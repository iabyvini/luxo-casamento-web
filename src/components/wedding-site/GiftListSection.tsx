
import { Gift, ExternalLink } from "lucide-react";

const GiftListSection = () => {
  const giftStores = [
    {
      name: "Magazine Luiza",
      description: "Lista principal com itens para casa",
      url: "#",
      icon: "🏠"
    },
    {
      name: "Americanas",
      description: "Eletrodomésticos e decoração",
      url: "#",
      icon: "⚡"
    },
    {
      name: "Pix",
      description: "Contribuição para lua de mel",
      url: "#",
      icon: "🌙"
    }
  ];

  return (
    <section id="gifts" className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Gift className="h-4 w-4" />
            <span>Lista de Presentes</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
            Presentes
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Sua presença já é o melhor presente, mas se quiserem nos presentear, 
            ficamos muito gratos! Aqui estão algumas opções:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {giftStores.map((store, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">
                {store.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {store.name}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {store.description}
              </p>
              
              <button className="w-full bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors inline-flex items-center justify-center">
                <span>Ver Lista</span>
                <ExternalLink className="h-4 w-4 ml-2" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Chave PIX para Lua de Mel
            </h3>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <code className="text-gray-700 font-mono">
                pix@exemplo.com
              </code>
            </div>
            
            <p className="text-gray-600 text-sm">
              Com muito carinho, estamos juntando uma graninha para nossa lua de mel. 
              Qualquer valor será recebido com muito amor! 💕
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftListSection;
