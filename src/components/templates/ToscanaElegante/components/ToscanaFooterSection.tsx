
interface ToscanaFooterSectionProps {
  coupleNames: string;
  weddingDate: string;
}

const ToscanaFooterSection = ({ coupleNames, weddingDate }: ToscanaFooterSectionProps) => {
  return (
    <footer className="py-16 px-8 bg-black text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide">
          {coupleNames}
        </h2>
        
        <div className="w-24 h-0.5 bg-white mx-auto mb-8"></div>
        
        <p className="text-lg mb-8 opacity-90">
          {weddingDate}
        </p>
        
        <blockquote className="text-xl md:text-2xl italic mb-8 max-w-2xl mx-auto leading-relaxed">
          "Entre os ciprestes da Toscana e o amor eterno, celebramos o início de nossa jornada juntos."
        </blockquote>
        
        <div className="space-y-4 text-sm opacity-80">
          <p>Villa Toscana • São Paulo, Brasil</p>
          <p>Obrigado por fazer parte da nossa história</p>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-xs opacity-60">
            Site criado com ❤️ para celebrar nosso amor
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ToscanaFooterSection;
