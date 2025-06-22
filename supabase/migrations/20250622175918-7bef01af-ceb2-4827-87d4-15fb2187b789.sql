
-- Create the increment_view_count function that was referenced in the code
CREATE OR REPLACE FUNCTION public.increment_view_count(site_slug text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE public.wedding_sites 
  SET views_count = COALESCE(views_count, 0) + 1 
  WHERE slug = site_slug;
END;
$$;
