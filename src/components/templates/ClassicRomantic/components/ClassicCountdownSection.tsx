
import CountdownSection from "@/components/wedding-site/CountdownSection";

const ClassicCountdownSection = ({ weddingDate }: { weddingDate: string }) => {
  return (
    <div className="bg-gradient-to-br from-rose-50 to-pink-50 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Contagem Regressiva
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent w-20"></div>
            <div className="text-2xl text-rose-400">❦</div>
            <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent w-20"></div>
          </div>
        </div>
        
        <div className="classic-romantic-countdown">
          <CountdownSection weddingDate={weddingDate} />
        </div>
      </div>
      
      <style>{`
        .classic-romantic-countdown .countdown-item {
          background: linear-gradient(135deg, #ffffff 0%, #fdf2f8 100%);
          border: 2px solid #f9a8d4;
          box-shadow: 0 10px 25px rgba(244, 114, 182, 0.1);
        }
        
        .classic-romantic-countdown .countdown-number {
          color: #be185d;
          font-family: 'Playfair Display', serif;
        }
        
        .classic-romantic-countdown .countdown-label {
          color: #9d174d;
          font-family: 'Crimson Text', serif;
        }
      `}</style>
    </div>
  );
};

export default ClassicCountdownSection;
