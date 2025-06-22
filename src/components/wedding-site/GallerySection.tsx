
import { useState, useEffect } from "react";
import { Camera, Heart, Sparkles } from "lucide-react";
import { QuizAnswers } from "@/types/quiz";
import { supabase } from "@/integrations/supabase/client";

interface GalleryPhoto {
  id: string;
  photo_url: string;
  caption?: string;
  category: string;
  display_order: number;
}

interface GallerySectionProps {
  siteId: string;
  templateName: string;
  quizAnswers: QuizAnswers;
  customContent?: {
    enabled?: boolean;
    title?: string;
  };
}

const GallerySection = ({ siteId, templateName, quizAnswers, customContent }: GallerySectionProps) => {
  const [photos, setPhotos] = useState<GalleryPhoto[]>([]);
  const [loading, setLoading] = useState(true);

  // Se a seção está desabilitada, não renderizar
  if (customContent?.enabled === false) {
    return null;
  }

  useEffect(() => {
    fetchPhotos();
  }, [siteId]);

  const fetchPhotos = async () => {
    try {
      const { data, error } = await supabase
        .from('gallery_photos')
        .select('*')
        .eq('site_id', siteId)
        .order('display_order', { ascending: true });

      if (error) throw error;
      setPhotos(data || []);
    } catch (error: any) {
      console.error('Erro ao carregar fotos:', error);
    } finally {
      setLoading(false);
    }
  };

  // Usando placeholder images da lista disponível como fallback
  const placeholderImages = [
    {
      id: "placeholder-1",
      photo_url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Momento especial do casal",
      category: "Ensaio",
      display_order: 1
    },
    {
      id: "placeholder-2", 
      photo_url: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Cenário romântico",
      category: "Locação",
      display_order: 2
    },
    {
      id: "placeholder-3",
      photo_url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Paisagem do ensaio",
      category: "Natureza", 
      display_order: 3
    },
    {
      id: "placeholder-4",
      photo_url: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Momento íntimo",
      category: "Ensaio",
      display_order: 4
    },
    {
      id: "placeholder-5",
      photo_url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Preparativos",
      category: "Behind",
      display_order: 5
    },
    {
      id: "placeholder-6",
      photo_url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Detalhes especiais",
      category: "Detalhes",
      display_order: 6
    }
  ];

  const getGalleryTitle = (template: string) => {
    if (customContent?.title) return customContent.title;
    
    switch (template) {
      case 'Bohemian Dream':
        return "Momentos Livres";
      case 'Vintage Charm':
        return "Memórias Preciosas";
      case 'Modern Love':
        return "Nossa Timeline";
      case 'Minimalist':
        return "Essência";
      default:
        return "Nossa Galeria";
    }
  };

  // Use photos from database if available, otherwise use placeholders
  const displayPhotos = photos.length > 0 ? photos : placeholderImages;

  if (loading) {
    return (
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p>Carregando galeria...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brown-50 border border-brown-200 rounded-full px-6 py-3 mb-6">
            <Camera className="h-5 w-5 text-primary" />
            <span className="font-medium text-brown-700">Galeria</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {getGalleryTitle(templateName)}
          </h2>
          
          <p className="text-lg text-brown-600 max-w-2xl mx-auto">
            {photos.length > 0 
              ? "Cada imagem conta uma parte da nossa história. Momentos capturados que guardaremos para sempre no coração."
              : "Nossa galeria está sendo preparada com muito carinho. Em breve teremos fotos especiais para compartilhar com vocês!"
            }
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayPhotos.map((photo, index) => (
            <div 
              key={photo.id} 
              className={`group relative overflow-hidden rounded-xl luxury-shadow hover:scale-105 transition-all duration-300 ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className={`aspect-square ${index === 0 ? 'md:aspect-[2/2]' : ''} overflow-hidden`}>
                <img
                  src={photo.photo_url}
                  alt={photo.caption || 'Foto da galeria'}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <Heart className="h-8 w-8 mx-auto mb-2" fill="currentColor" />
                  <p className="text-sm font-medium">{photo.category}</p>
                  {photo.caption && (
                    <p className="text-xs mt-1 opacity-80">{photo.caption}</p>
                  )}
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                <span className="text-xs font-medium text-brown-700">{photo.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Footer */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-brown-50 to-gold-50 rounded-full px-6 py-4 border border-brown-200">
            <Sparkles className="h-5 w-5 text-accent" fill="currentColor" />
            <span className="text-brown-700 font-medium">
              {photos.length > 0 
                ? "Mais fotos serão adicionadas em breve"
                : "Fotos em breve - acompanhem!"
              }
            </span>
            <Sparkles className="h-5 w-5 text-accent" fill="currentColor" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
