
import { Palette } from "lucide-react";

const TemplatesHeader = () => {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center space-x-2 bg-rose-100 text-rose-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
        <Palette className="h-4 w-4" />
        <span>Templates Exclusivos</span>
      </div>
      
      <h2 className="text-4xl md:text-5xl font-playfair font-bold text-neutral-primary mb-6">
        Escolha Seu Template Perfeito
      </h2>
      
      <p className="text-xl text-neutral-body max-w-3xl mx-auto leading-relaxed">
        Cada template foi cuidadosamente criado para diferentes estilos de casamento. 
        Personalize cores, textos e imagens para criar um site único.
      </p>
    </div>
  );
};

export default TemplatesHeader;
