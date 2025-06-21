
import { Heart, Instagram, Facebook, Share2 } from "lucide-react";

interface FooterSectionProps {
  coupleNames: string;
  templateName: string;
}

const FooterSection = ({ coupleNames, templateName }: FooterSectionProps) => {
  const currentYear = new Date().getFullYear();

  const getFooterStyle = (template: string) => {
    switch (template) {
      case 'Bohemian Dream':
        return "bg-gradient-to-r from-orange-100 to-purple-100";
      case 'Vintage Charm':
        return "bg-gradient-to-r from-amber-50 to-yellow-100";
      case 'Modern Love':
        return "bg-gradient-to-r from-gray-100 to-red-50";
      case 'Minimalist':
        return "bg-gray-50";
      default:
        return "bg-gradient-to-r from-brown-50 to-gold-50";
    }
  };

  return (
    <footer className={`py-12 border-t border-brown-200 ${getFooterStyle(templateName)}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Couple Names */}
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Heart className="h-6 w-6 text-primary" fill="currentColor" />
            <h3 className="text-2xl font-bold gradient-text">
              {coupleNames}
            </h3>
            <Heart className="h-6 w-6 text-primary" fill="currentColor" />
          </div>

          {/* Social Links (Simuladas) */}
          <div className="flex items-center justify-center space-x-6 mb-8">
            <button className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-brown-200 hover:bg-white transition-colors">
              <Instagram className="h-4 w-4 text-pink-600" />
              <span className="text-sm text-brown-700">@casamento{coupleNames.toLowerCase().replace(/\s+&\s+/, '')}</span>
            </button>
            
            <button className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-brown-200 hover:bg-white transition-colors">
              <Facebook className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-brown-700">Nosso Evento</span>
            </button>
            
            <button className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-brown-200 hover:bg-white transition-colors">
              <Share2 className="h-4 w-4 text-green-600" />
              <span className="text-sm text-brown-700">Compartilhar</span>
            </button>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-luxury mx-auto mb-6"></div>

          {/* Footer Info */}
          <div className="space-y-3 text-brown-600">
            <p className="text-sm">
              Obrigado por fazer parte da nossa história de amor
            </p>
            
            <p className="text-xs">
              © {currentYear} {coupleNames}. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-xs text-brown-500">
              <span>Site criado com</span>
              <Heart className="h-3 w-3 text-red-400" fill="currentColor" />
              <span>por</span>
              <strong className="text-primary">Casamento Luxo Sites</strong>
            </div>
          </div>

          {/* Template Badge */}
          <div className="mt-6 inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-3 py-1 border border-brown-200">
            <div className="w-2 h-2 bg-gradient-luxury rounded-full"></div>
            <span className="text-xs text-brown-600 font-medium">
              Template: {templateName}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
