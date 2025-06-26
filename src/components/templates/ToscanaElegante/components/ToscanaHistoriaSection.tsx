
interface ToscanaHistoriaSectionProps {
  coupleNames: string;
}

const ToscanaHistoriaSection = ({ coupleNames }: ToscanaHistoriaSectionProps) => {
  return (
    <section className="py-20 px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-wide">
          Nossa História
        </h2>
        
        <div className="toscana-divider"></div>
        
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">Como Nos Conhecemos</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Foi em uma tarde ensolarada de primavera, entre os ciprestes de uma vinícola na Toscana, 
              que nossos olhares se cruzaram pela primeira vez. O que começou como uma conversa casual 
              sobre vinhos se transformou em horas de diálogo profundo sobre a vida, sonhos e paixões.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">O Pedido</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Dois anos depois, no mesmo local onde nos conhecemos, entre as colinas douradas da Toscana, 
              aconteceu o momento mais especial de nossas vidas. Com o pôr do sol pintando o céu de 
              cores impossíveis, fizemos a promessa de caminhar juntos para sempre.
            </p>
          </div>
        </div>
        
        <div className="mt-16">
          <blockquote className="text-xl italic text-gray-600 max-w-2xl mx-auto">
            "O amor não é apenas olhar um para o outro, é olhar juntos na mesma direção."
            <cite className="block mt-4 text-sm font-medium not-italic">— Antoine de Saint-Exupéry</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default ToscanaHistoriaSection;
