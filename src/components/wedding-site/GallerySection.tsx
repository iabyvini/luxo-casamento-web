import { Camera, Heart, Sparkles } from "lucide-react";
import { QuizAnswers } from "@/types/quiz";

interface GallerySectionProps {
  templateName: string;
  quizAnswers: QuizAnswers;
}

const GallerySection = ({ templateName, quizAnswers }: GallerySectionProps) => {
  // Usando placeholder images da lista disponível
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Momento especial do casal",
      category: "Ensaio"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Cenário romântico",
      category: "Locação"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Paisagem do ensaio",
      category: "Natureza"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Momento íntimo",
      category: "Ensaio"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Preparativos",
      category: "Behind"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Detalhes especiais",
      category: "Detalhes"
    }
  ];

  const getGalleryTitle = (template: string) => {
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
            Cada imagem conta uma parte da nossa história. Momentos capturados que guardaremos para sempre no coração.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              className={`group relative overflow-hidden rounded-xl luxury-shadow hover:scale-105 transition-all duration-300 ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className={`aspect-square ${index === 0 ? 'md:aspect-[2/2]' : ''} overflow-hidden`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <Heart className="h-8 w-8 mx-auto mb-2" fill="currentColor" />
                  <p className="text-sm font-medium">{image.category}</p>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                <span className="text-xs font-medium text-brown-700">{image.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Footer */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-brown-50 to-gold-50 rounded-full px-6 py-4 border border-brown-200">
            <Sparkles className="h-5 w-5 text-accent" fill="currentColor" />
            <span className="text-brown-700 font-medium">
              Mais fotos serão adicionadas em breve
            </span>
            <Sparkles className="h-5 w-5 text-accent" fill="currentColor" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
