
import { Heart, Instagram, Facebook, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brown-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-luxury p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" fill="white" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-white">Casamento Luxo</h3>
                <span className="text-sm text-gold-300 -mt-1">Sites</span>
              </div>
            </div>
            <p className="text-brown-300 mb-6 max-w-md">
              Criamos sites de casamento elegantes e personalizados para tornar 
              seu grande dia ainda mais especial. Compartilhe seu amor com o mundo 
              de forma única e memorável.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-brown-800 p-2 rounded-lg hover:bg-brown-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-brown-800 p-2 rounded-lg hover:bg-brown-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-brown-800 p-2 rounded-lg hover:bg-brown-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gold-300">Produto</h4>
            <ul className="space-y-2">
              <li>
                <a href="#templates" className="text-brown-300 hover:text-white transition-colors">
                  Templates
                </a>
              </li>
              <li>
                <a href="#funcionalidades" className="text-brown-300 hover:text-white transition-colors">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#precos" className="text-brown-300 hover:text-white transition-colors">
                  Preços
                </a>
              </li>
              <li>
                <a href="#" className="text-brown-300 hover:text-white transition-colors">
                  Exemplos
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-gold-300">Suporte</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-brown-300 hover:text-white transition-colors">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="text-brown-300 hover:text-white transition-colors">
                  Tutoriais
                </a>
              </li>
              <li>
                <a href="#" className="text-brown-300 hover:text-white transition-colors">
                  Fale Conosco
                </a>
              </li>
              <li>
                <a href="#" className="text-brown-300 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-brown-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-gold-300" />
              <span className="text-brown-300">contato@casamentoluxosites.com.br</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-gold-300" />
              <span className="text-brown-300">(11) 99999-9999</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-brown-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-brown-400 text-sm mb-4 md:mb-0">
            © 2024 Casamento Luxo Sites. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-brown-400 hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-brown-400 hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-brown-400 hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
