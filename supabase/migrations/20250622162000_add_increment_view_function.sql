
-- Função para incrementar contador de visualizações
CREATE OR REPLACE FUNCTION increment_view_count(site_slug text)
RETURNS void AS $$
BEGIN
  UPDATE public.wedding_sites 
  SET views_count = COALESCE(views_count, 0) + 1 
  WHERE slug = site_slug AND is_published = true;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
