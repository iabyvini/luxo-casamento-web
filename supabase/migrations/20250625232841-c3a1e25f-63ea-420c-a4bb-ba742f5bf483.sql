
-- Primeiro, vamos verificar se existe algum registro com slug similar
SELECT id, slug, couple_names, is_published 
FROM wedding_sites 
WHERE slug ILIKE '%flora%vini%2025%' 
   OR slug ILIKE '%flora%vinc%2025%';

-- Se encontrarmos um registro com slug incorreto (como 'flora-e-vincius-2025-9347'), 
-- vamos corrigi-lo para 'flora-e-vinicius-2025-9347'
UPDATE wedding_sites 
SET slug = 'flora-e-vinicius-2025-9347'
WHERE slug = 'flora-e-vincius-2025-9347';

-- Também vamos garantir que o site esteja publicado
UPDATE wedding_sites 
SET is_published = true
WHERE slug = 'flora-e-vinicius-2025-9347';

-- Se não existir nenhum registro, vamos criar um de teste
INSERT INTO wedding_sites (
  couple_names, 
  wedding_date, 
  template_name, 
  slug, 
  is_published, 
  quiz_answers,
  ai_welcome_message,
  user_id
)
SELECT 
  'Flora e Vinícius', 
  '2025-09-13', 
  'Modern Elegance', 
  'flora-e-vinicius-2025-9347', 
  true, 
  '{"style": "modern", "colors": ["rose", "gold"]}',
  'Bem-vindos ao nosso site de casamento!',
  (SELECT id FROM auth.users LIMIT 1)
WHERE NOT EXISTS (
  SELECT 1 FROM wedding_sites WHERE slug = 'flora-e-vinicius-2025-9347'
);
