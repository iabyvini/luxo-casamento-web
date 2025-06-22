
-- Criar bucket para fotos do casal
INSERT INTO storage.buckets (id, name, public) 
VALUES ('couple-photos', 'couple-photos', true);

-- Políticas para o bucket couple-photos
CREATE POLICY "Allow public access to couple photos" ON storage.objects
FOR SELECT USING (bucket_id = 'couple-photos');

CREATE POLICY "Allow authenticated users to upload couple photos" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'couple-photos' AND auth.role() = 'authenticated');

CREATE POLICY "Allow users to update their couple photos" ON storage.objects
FOR UPDATE USING (bucket_id = 'couple-photos' AND auth.role() = 'authenticated');

CREATE POLICY "Allow users to delete their couple photos" ON storage.objects
FOR DELETE USING (bucket_id = 'couple-photos' AND auth.role() = 'authenticated');
