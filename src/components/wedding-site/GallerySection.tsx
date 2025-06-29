import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import AdaptiveGallery from "@/components/gallery/AdaptiveGallery";
import { useModernVisualTokens } from "@/contexts/ModernVisualTokensContext";

interface GallerySectionProps {
  siteId: string;
  templateName: string;
  quizAnswers?: any;
}

interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  caption?: string;
}

const GallerySection = ({ siteId, templateName, quizAnswers }: GallerySectionProps) => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const { modernTokens } = useModernVisualTokens();

  useEffect(() => {
    loadGalleryImages();
  }, [siteId]);

  const loadGalleryImages = async () => {
    if (!siteId || siteId === "preview") {
      // Imagens de placeholder para preview
      setImages([
        {
          id: '1',
          url: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Momento romântico do casal',
          caption: 'Um momento especial juntos'
        },
        {
          id: '2', 
          url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Cerimônia de casamento',
          caption: 'O momento do sim'
        },
        {
          id: '3',
          url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Festa de casamento',
          caption: 'Celebrando com família e amigos'
        },
        {
          id: '4',
          url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Detalhes do casamento',
          caption: 'Cada detalhe pensado com carinho'
        },
        {
          id: '5',
          url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Paisagem do local',
          caption: 'O cenário perfeito para nosso grande dia'
        },
        {
          id: '6',
          url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Preparativos',
          caption: 'Os últimos preparativos antes do grande momento'
        }
      ]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      
      const { data, error } = await supabase
        .from('gallery_photos')
        .select('*')
        .eq('site_id', siteId)
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Erro ao carregar galeria:', error);
        toast({
          title: "Erro ao carregar galeria",
          description: "Não foi possível carregar as fotos da galeria.",
          variant: "destructive",
        });
        setImages([]);
        return;
      }

      if (data && data.length > 0) {
        const galleryImages: GalleryImage[] = data.map((photo, index) => ({
          id: photo.id,
          url: photo.photo_url,
          alt: photo.caption || `Foto da galeria ${index + 1}`,
          caption: photo.caption
        }));
        
        setImages(galleryImages);
      } else {
        // Se não há fotos, usar imagens de placeholder
        setImages([]);
      }
    } catch (error) {
      console.error('Erro ao carregar galeria:', error);
      toast({
        title: "Erro inesperado",
        description: "Ocorreu um erro ao carregar a galeria.",
        variant: "destructive",
      });
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="gallery" className="py-16" style={{ backgroundColor: modernTokens?.colors.background || '#fff' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 modern-heading">
              Nossa Galeria
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: modernTokens?.colors.accent || '#d4af37' }}></div>
          </div>
          
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: modernTokens?.colors.primary || '#8B5A3C' }}></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="py-16" style={{ backgroundColor: modernTokens?.colors.background || '#fff' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 modern-heading">
            Nossa Galeria
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: modernTokens?.colors.accent || '#d4af37' }}></div>
          <p className="text-lg modern-body opacity-80 max-w-2xl mx-auto">
            Momentos especiais capturados para sempre. Cada foto conta uma parte da nossa história de amor.
          </p>
        </div>

        {images.length > 0 ? (
          <AdaptiveGallery 
            images={images}
            className="max-w-6xl mx-auto"
            columns={modernTokens?.galleryType === 'grid' ? 3 : undefined}
            autoPlay={modernTokens?.galleryType === 'slideshow'}
            autoPlayInterval={6000}
          />
        ) : (
          <div className="text-center py-12">
            <div className="bg-gray-100 rounded-lg p-8 max-w-md mx-auto">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Galeria em Construção
              </h3>
              <p className="text-gray-500 text-sm">
                As fotos especiais do casamento serão adicionadas em breve.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
