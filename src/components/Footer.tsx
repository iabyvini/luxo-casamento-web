
import { Heart, Instagram, Facebook, Twitter, Mail, Phone, MapPin, Star, Shield, Award, Users } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-brown-900 via-brown-800 to-amber-900 text-white py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Enhanced Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-luxury p-3 rounded-2xl luxury-shadow">
                <Heart className="h-8 w-8 text-white" fill="white" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-playfair font-bold text-white">Casamento Luxo</h3>
                <span className="text-sm text-amber-300 font-dancing -mt-1">Sites que Encantam</span>
              </div>
            </div>
            
            <p className="text-brown-300 mb-8 max-w-md leading-relaxed font-light">
              Criamos sites de casamento únicos e personalizados que transformam seu grande dia 
              em uma experiência digital inesquecível. <span className="text-amber-300 font-medium">Seu amor merece ser celebrado com elegância</span>.
            </p>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <Users className="h-6 w-6 text-amber-300 mx-auto mb-2" />
                <div className="text-white font-bold text-lg">10.000+</div>
                <div className="text-brown-300 text-xs">Casais Atendidos</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <Shield className="h-6 w-6 text-green-300 mx-auto mb-2" />
                <div className="text-white font-bold text-lg">100%</div>
                <div className="text-brown-300 text-xs">Dados Seguros</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <Award className="h-6 w-6 text-rose-300 mx-auto mb-2" />
                <div className="text-white font-bold text-lg">4.9/5</div>
                <div className="text-brown-300 text-xs">Avaliação Média</div>
              </div>
            </div>
            
            {/* Premium Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 backdrop-blur-sm p-3 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20">
                <Instagram className="h-6 w-6 text-pink-300" />
              </a>
              <a href="#" className="bg-white/10 backdrop-blur-sm p-3 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20">
                <Facebook className="h-6 w-6 text-blue-300" />
              </a>
              <a href="#" className="bg-white/10 backdrop-blur-sm p-3 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20">
                <Twitter className="h-6 w-6 text-sky-300" />
              </a>
            </div>
          </div>

          {/* Enhanced Navigation Links */}
          <div>
            <h4 className="font-playfair font-semibold mb-6 text-amber-300 text-lg">
              Produto
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#templates" className="text-brown-300 hover:text-white transition-colors duration-300">
                  Templates Luxuosos
                </a>
              </li>
              <li>
                <a href="#funcionalidades" className="text-brown-300 hover:text-white transition-colors duration-300">
                  Funcionalidades IA
                </a>
              </li>
              <li>
                <a href="#precos" className="text-brown-300 hover:text-white transition-colors duration-300">
                  Planos & Preços
                </a>
              </li>
              <li>
                <a href="#" className="text-brown-300 hover:text-white transition-colors duration-300">
                  Galeria de Exemplos
                </a>
              </li>
            </ul>
          </div>

          {/* Enhanced Support Section */}
          <div>
            <h4 className="font-playfair font-semibold mb-6 text-amber-300 text-lg">
              Suporte
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-brown-300 hover:text-white transition-colors duration-300">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="text-brown-300 hover:text-white transition-colors duration-300">
                  Comunidade
                </a>
              </li>
              <li>
                <a href="#" className="text-brown-300 hover:text-white transition-colors duration-300">
                  Fale com Especialistas
                </a>
              </li>
              <li>
                <a href="#" className="text-brown-300 hover:text-white transition-colors duration-300">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Enhanced Contact Info */}
        <div className="border-t border-white/20 pt-12 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h4 className="font-playfair font-semibold mb-6 text-amber-300 text-xl text-center">
              Vamos Conversar Sobre Seu Grande Dia
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-gradient-luxury p-4 rounded-2xl w-fit mx-auto mb-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="text-brown-300 text-sm mb-1">Email Dedicado</div>
                <div className="text-white font-medium">contato@casamentoluxosites.com.br</div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-luxury p-4 rounded-2xl w-fit mx-auto mb-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div className="text-brown-300 text-sm mb-1">WhatsApp Exclusivo</div>
                <div className="text-white font-medium">(11) 99999-9999</div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-luxury p-4 rounded-2xl w-fit mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div className="text-brown-300 text-sm mb-1">Atendimento Brasil</div>
                <div className="text-white font-medium">São Paulo • Rio • Brasília</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <p className="text-brown-400 text-sm">
              © 2024 Casamento Luxo Sites. Feito com 
            </p>
            <div className="flex items-center space-x-1">
              <Heart className="h-4 w-4 text-rose-400" fill="currentColor" />
              <span className="text-brown-400 text-sm">para casais apaixonados</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-brown-400 hover:text-white transition-colors duration-300">
              Termos de Uso
            </a>
            <a href="#" className="text-brown-400 hover:text-white transition-colors duration-300">
              Política de Privacidade
            </a>
            <a href="#" className="text-brown-400 hover:text-white transition-colors duration-300">
              Certificações
            </a>
          </div>
        </div>

        {/* Romantic signature line */}
        <div className="text-center mt-8 pt-8 border-t border-white/10">
          <div className="flex items-center justify-center space-x-3 text-brown-400 text-sm">
            <Heart className="h-4 w-4 text-pink-400" fill="currentColor" />
            <span className="font-dancing text-lg">Transformando sonhos em realidade digital</span>
            <Heart className="h-4 w-4 text-pink-400" fill="currentColor" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
