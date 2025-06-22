
-- Extensão para UUIDs
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tabela de perfis de usuários (complementa auth.users)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  phone TEXT,
  avatar_url TEXT,
  subscription_status TEXT DEFAULT 'free' CHECK (subscription_status IN ('free', 'premium', 'enterprise')),
  subscription_end TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Tabela de sites de casamento
CREATE TABLE public.wedding_sites (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  slug TEXT UNIQUE NOT NULL, -- Para URLs únicas como /ana-joao-2024
  couple_names TEXT NOT NULL,
  wedding_date DATE NOT NULL,
  template_name TEXT NOT NULL,
  quiz_answers JSONB NOT NULL,
  ai_welcome_message TEXT,
  custom_content JSONB DEFAULT '{}', -- Conteúdo editável do site
  is_published BOOLEAN DEFAULT false,
  domain_custom TEXT, -- Para domínios personalizados premium
  analytics_data JSONB DEFAULT '{}',
  views_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Tabela de listas de presentes
CREATE TABLE public.gift_lists (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  site_id UUID REFERENCES public.wedding_sites(id) ON DELETE CASCADE NOT NULL,
  gift_type TEXT NOT NULL CHECK (gift_type IN ('store_link', 'pix', 'custom')),
  title TEXT NOT NULL,
  description TEXT,
  store_name TEXT,
  store_url TEXT,
  pix_key TEXT,
  target_amount DECIMAL(10,2), -- Para metas de dinheiro
  current_amount DECIMAL(10,2) DEFAULT 0,
  commission_rate DECIMAL(5,4) DEFAULT 0.0389, -- 3,89%
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Tabela de confirmações RSVP
CREATE TABLE public.rsvp_responses (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  site_id UUID REFERENCES public.wedding_sites(id) ON DELETE CASCADE NOT NULL,
  guest_name TEXT NOT NULL,
  guest_email TEXT,
  guest_phone TEXT,
  will_attend BOOLEAN NOT NULL,
  companion_count INTEGER DEFAULT 0,
  dietary_restrictions TEXT,
  message TEXT,
  confirmed_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Tabela de recados/mensagens
CREATE TABLE public.messages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  site_id UUID REFERENCES public.wedding_sites(id) ON DELETE CASCADE NOT NULL,
  sender_name TEXT NOT NULL,
  sender_email TEXT,
  message TEXT NOT NULL,
  is_approved BOOLEAN DEFAULT true, -- Para moderação se necessário
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Tabela de assinaturas/pagamentos (para Stripe)
CREATE TABLE public.subscriptions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  plan_type TEXT NOT NULL CHECK (plan_type IN ('free', 'domain_custom', 'backup', 'analytics', 'premium_full')),
  plan_name TEXT NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'BRL',
  status TEXT NOT NULL CHECK (status IN ('active', 'canceled', 'expired', 'pending')),
  current_period_start TIMESTAMPTZ,
  current_period_end TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Índices para performance
CREATE INDEX idx_wedding_sites_user_id ON public.wedding_sites(user_id);
CREATE INDEX idx_wedding_sites_slug ON public.wedding_sites(slug);
CREATE INDEX idx_gift_lists_site_id ON public.gift_lists(site_id);
CREATE INDEX idx_rsvp_responses_site_id ON public.rsvp_responses(site_id);
CREATE INDEX idx_messages_site_id ON public.messages(site_id);
CREATE INDEX idx_subscriptions_user_id ON public.subscriptions(user_id);

-- RLS (Row Level Security) - Políticas de segurança
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wedding_sites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gift_lists ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rsvp_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;

-- Políticas para profiles
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Políticas para wedding_sites
CREATE POLICY "Users can view own sites" ON public.wedding_sites
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create own sites" ON public.wedding_sites
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own sites" ON public.wedding_sites
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own sites" ON public.wedding_sites
  FOR DELETE USING (auth.uid() = user_id);

-- Políticas para gift_lists (site owners can manage)
CREATE POLICY "Site owners can manage gift lists" ON public.gift_lists
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.wedding_sites 
      WHERE id = gift_lists.site_id AND user_id = auth.uid()
    )
  );

-- Políticas para rsvp_responses (qualquer pessoa pode confirmar, só o dono pode ver)
CREATE POLICY "Anyone can create RSVP" ON public.rsvp_responses
  FOR INSERT WITH CHECK (true);
CREATE POLICY "Site owners can view RSVPs" ON public.rsvp_responses
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.wedding_sites 
      WHERE id = rsvp_responses.site_id AND user_id = auth.uid()
    )
  );

-- Políticas para messages (qualquer pessoa pode enviar, só o dono pode ver)
CREATE POLICY "Anyone can create messages" ON public.messages
  FOR INSERT WITH CHECK (true);
CREATE POLICY "Site owners can view messages" ON public.messages
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.wedding_sites 
      WHERE id = messages.site_id AND user_id = auth.uid()
    )
  );

-- Políticas para subscriptions
CREATE POLICY "Users can view own subscriptions" ON public.subscriptions
  FOR SELECT USING (auth.uid() = user_id);

-- Trigger para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_updated_at_profiles
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at_wedding_sites
  BEFORE UPDATE ON public.wedding_sites
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at_subscriptions
  BEFORE UPDATE ON public.subscriptions
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- Trigger para criar perfil automaticamente quando usuário se cadastra
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email)
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
