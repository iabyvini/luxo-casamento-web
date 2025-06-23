
-- Criar bucket para fotos do casal
INSERT INTO storage.buckets (id, name, public)
VALUES ('couple-photos', 'couple-photos', true);

-- Política para permitir que qualquer usuário veja as fotos (público)
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'couple-photos');

-- Política para permitir que usuários autenticados façam upload
CREATE POLICY "Authenticated users can upload couple photos" ON storage.objects 
FOR INSERT WITH CHECK (bucket_id = 'couple-photos' AND auth.role() = 'authenticated');

-- Política para permitir que usuários autenticados atualizem suas próprias fotos
CREATE POLICY "Authenticated users can update couple photos" ON storage.objects 
FOR UPDATE USING (bucket_id = 'couple-photos' AND auth.role() = 'authenticated');

-- Política para permitir que usuários autenticados deletem suas próprias fotos
CREATE POLICY "Authenticated users can delete couple photos" ON storage.objects 
FOR DELETE USING (bucket_id = 'couple-photos' AND auth.role() = 'authenticated');
