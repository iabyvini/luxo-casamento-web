
import { Heart, Calendar, MapPin, Clock } from "lucide-react";
import { PreviewData } from "@/types/quiz";
import { getTemplateColors } from "@/utils/templateMapping";

interface PreviewSiteProps {
  data: PreviewData;
}

const PreviewSite = ({ data }: PreviewSiteProps) => {
  const colors = getTemplateColors(data.templateName);
  const formattedDate = new Date(data.weddingDate).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="max-w-4xl mx-auto">
      <div className="luxury-card rounded-2xl overflow-hidden">
        {/* Header Section */}
        <div 
          className="p-12 text-center text-white relative"
          style={{ 
            background: `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 100%)` 
          }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center space-x-3 mb-6">
              <Heart className="h-8 w-8" fill="currentColor" />
              <h1 className="text-4xl md:text-5xl font-bold">
                {data.coupleNames}
              </h1>
              <Heart className="h-8 w-8" fill="currentColor" />
            </div>
            
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Calendar className="h-5 w-5" />
              <span className="text-xl">{formattedDate}</span>
            </div>

            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
              {data.welcomeMessage}
            </p>
          </div>
        </div>

        {/* Event Details */}
        <div className="p-8 bg-gradient-to-br from-brown-50 to-gold-50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center bg-white/80 rounded-lg p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-brown-800 mb-2">Cerimônia</h3>
              <p className="text-brown-600 mb-1">Igreja São José</p>
              <div className="flex items-center justify-center space-x-1 text-sm text-brown-500">
                <Clock className="h-4 w-4" />
                <span>16:00</span>
              </div>
            </div>

            <div className="text-center bg-white/80 rounded-lg p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-4">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-brown-800 mb-2">Recepção</h3>
              <p className="text-brown-600 mb-1">Fazenda Vista Alegre</p>
              <div className="flex items-center justify-center space-x-1 text-sm text-brown-500">
                <Clock className="h-4 w-4" />
                <span>18:00</span>
              </div>
            </div>

            <div className="text-center bg-white/80 rounded-lg p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brown-800/10 rounded-full mb-4">
                <Heart className="h-6 w-6 text-brown-800" />
              </div>
              <h3 className="font-semibold text-brown-800 mb-2">Festa</h3>
              <p className="text-brown-600 mb-1">Salão Dourado</p>
              <div className="flex items-center justify-center space-x-1 text-sm text-brown-500">
                <Clock className="h-4 w-4" />
                <span>20:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-white text-center border-t border-brown-100">
          <p className="text-brown-600 mb-4">
            Confirme sua presença até {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('pt-BR')}
          </p>
          <div className="text-sm text-brown-500">
            Site criado com ❤️ por Casamento Luxo Sites
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewSite;
