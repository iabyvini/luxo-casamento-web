
import { Heart, Instagram, Facebook, Share2, MapPin, Clock } from "lucide-react";

interface FooterSectionProps {
  coupleNames: string;
  weddingDate: string;
}

const FooterSection = ({ coupleNames, weddingDate }: FooterSectionProps) => {
  const currentYear = new Date().getFullYear();
  const formattedDate = new Date(weddingDate).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <footer className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main footer content */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Heart className="h-8 w-8 text-green-400" fill="currentColor" />
              <h3 className="text-3xl font-serif font-bold">
                {coupleNames}
              </h3>
              <Heart className="h-8 w-8 text-green-400" fill="currentColor" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-2">
                <Clock className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">{formattedDate}</span>
              </div>
              
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">Local será informado em breve</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 mb-8">
            <button className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 rounded-full px-4 py-2 transition-colors">
              <Instagram className="h-5 w-5 text-pink-400" />
              <span className="text-sm text-gray-300">@casamento{coupleNames.toLowerCase().replace(/\s+&\s+/, '')}</span>
            </button>
            
            <button className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 rounded-full px-4 py-2 transition-colors">
              <Facebook className="h-5 w-5 text-blue-400" />
              <span className="text-sm text-gray-300">Nosso Evento</span>
            </button>
            
            <button className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 rounded-full px-4 py-2 transition-colors">
              <Share2 className="h-5 w-5 text-green-400" />
              <span className="text-sm text-gray-300">Compartilhar</span>
            </button>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-green-400 mx-auto mb-8"></div>

          {/* Footer bottom */}
          <div className="text-center space-y-3 text-gray-400">
            <p className="text-lg">
              "O amor não se vê com os olhos, mas com o coração"
            </p>
            
            <p className="text-sm">
              © {currentYear} {coupleNames}. Feito com muito amor.
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-xs">
              <span>Site criado com</span>
              <Heart className="h-3 w-3 text-red-400" fill="currentColor" />
              <span>por</span>
              <strong className="text-green-400">Lovable Wedding Sites</strong>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
