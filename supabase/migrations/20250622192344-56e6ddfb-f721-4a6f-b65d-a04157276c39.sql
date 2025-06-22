
-- Criar bucket para fotos da galeria
INSERT INTO storage.buckets (id, name, public) 
VALUES ('gallery-photos', 'gallery-photos', true);

-- Criar bucket para imagens dos presentes  
INSERT INTO storage.buckets (id, name, public)
VALUES ('gift-images', 'gift-images', true);

-- Políticas para o bucket gallery-photos
CREATE POLICY "Público pode ver fotos da galeria" 
  ON storage.objects FOR SELECT 
  USING (bucket_id = 'gallery-photos');

CREATE POLICY "Usuários autenticados podem fazer upload de fotos da galeria" 
  ON storage.objects FOR INSERT 
  WITH CHECK (bucket_id = 'gallery-photos' AND auth.role() = 'authenticated');

CREATE POLICY "Usuários podem deletar suas próprias fotos da galeria" 
  ON storage.objects FOR DELETE 
  USING (bucket_id = 'gallery-photos' AND auth.role() = 'authenticated');

-- Políticas para o bucket gift-images
CREATE POLICY "Público pode ver imagens dos presentes" 
  ON storage.objects FOR SELECT 
  USING (bucket_id = 'gift-images');

CREATE POLICY "Usuários autenticados podem fazer upload de imagens dos presentes" 
  ON storage.objects FOR INSERT 
  WITH CHECK (bucket_id = 'gift-images' AND auth.role() = 'authenticated');

CREATE POLICY "Usuários podem deletar suas próprias imagens dos presentes" 
  ON storage.objects FOR DELETE 
  USING (bucket_id = 'gift-images' AND auth.role() = 'authenticated');
