
-- Adicionar a coluna couple_photo_url na tabela wedding_sites
ALTER TABLE public.wedding_sites 
ADD COLUMN couple_photo_url TEXT;

-- Adicionar comentário para documentar a coluna
COMMENT ON COLUMN public.wedding_sites.couple_photo_url IS 'URL da foto do casal armazenada no Supabase Storage';
