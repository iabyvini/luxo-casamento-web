
import { useState } from "react";

interface ToscanaGaleriaSectionProps {
  siteId: string;
}

const ToscanaGaleriaSection = ({ siteId }: ToscanaGaleriaSectionProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const fotos = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ];

  return (
    <>
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-wide">
            Nossa Galeria
          </h2>
          
          <div className="toscana-divider"></div>
          
          <p className="text-lg toscana-accent mb-16">
            Momentos especiais capturados ao longo da nossa jornada
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {fotos.map((foto, index) => (
              <div
                key={index}
                className="toscana-card rounded-lg overflow-hidden cursor-pointer aspect-square"
                onClick={() => setSelectedImage(foto)}
              >
                <img
                  src={foto}
                  alt={`Foto ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de imagem */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Foto ampliada"
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ToscanaGaleriaSection;
