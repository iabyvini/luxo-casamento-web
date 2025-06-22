
-- Criar tabela para itens de presente
CREATE TABLE public.gift_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  site_id UUID NOT NULL REFERENCES public.wedding_sites(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  category TEXT DEFAULT 'Geral',
  image_url TEXT,
  is_purchased BOOLEAN DEFAULT FALSE,
  purchased_by TEXT,
  purchased_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Adicionar RLS (Row Level Security)
ALTER TABLE public.gift_items ENABLE ROW LEVEL SECURITY;

-- Política para visualização pública dos itens (necessário para o site público)
CREATE POLICY "Gift items are viewable by everyone" 
  ON public.gift_items 
  FOR SELECT 
  USING (true);

-- Política para que proprietários do site possam gerenciar seus itens
CREATE POLICY "Site owners can manage their gift items" 
  ON public.gift_items 
  FOR ALL 
  USING (
    site_id IN (
      SELECT id FROM public.wedding_sites 
      WHERE user_id = auth.uid()
    )
  );

-- Política para permitir "compra" de itens (update para marcar como comprado)
CREATE POLICY "Anyone can purchase gift items" 
  ON public.gift_items 
  FOR UPDATE 
  USING (NOT is_purchased);

-- Trigger para atualizar updated_at
CREATE TRIGGER handle_updated_at_gift_items
  BEFORE UPDATE ON public.gift_items
  FOR EACH ROW EXECUTE PROCEDURE public.handle_updated_at();

-- Criar tabela para uploads de fotos da galeria
CREATE TABLE public.gallery_photos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  site_id UUID NOT NULL REFERENCES public.wedding_sites(id) ON DELETE CASCADE,
  photo_url TEXT NOT NULL,
  caption TEXT,
  category TEXT DEFAULT 'Geral',
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Adicionar RLS para fotos da galeria
ALTER TABLE public.gallery_photos ENABLE ROW LEVEL SECURITY;

-- Política para visualização pública das fotos
CREATE POLICY "Gallery photos are viewable by everyone" 
  ON public.gallery_photos 
  FOR SELECT 
  USING (true);

-- Política para que proprietários do site possam gerenciar suas fotos
CREATE POLICY "Site owners can manage their gallery photos" 
  ON public.gallery_photos 
  FOR ALL 
  USING (
    site_id IN (
      SELECT id FROM public.wedding_sites 
      WHERE user_id = auth.uid()
    )
  );
