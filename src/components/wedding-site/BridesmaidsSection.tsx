
import { Users, Crown } from "lucide-react";

const BridesmaidsSection = () => {
  const bridesmaids = [
    { name: "Ana Paula", role: "Madrinha", relation: "Irmã da Noiva" },
    { name: "Carla Santos", role: "Madrinha", relation: "Melhor Amiga" },
    { name: "Juliana Lima", role: "Madrinha", relation: "Prima" },
    { name: "Fernanda Costa", role: "Madrinha", relation: "Amiga da Faculdade" }
  ];

  const groomsmen = [
    { name: "Pedro Silva", role: "Padrinho", relation: "Irmão do Noivo" },
    { name: "Carlos Mendes", role: "Padrinho", relation: "Melhor Amigo" },
    { name: "Rafael Oliveira", role: "Padrinho", relation: "Primo" },
    { name: "Diego Rocha", role: "Padrinho", relation: "Amigo de Infância" }
  ];

  return (
    <section id="bridesmaids" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Crown className="h-4 w-4" />
            <span>Padrinhos</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
            Nossos Padrinhos
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            As pessoas especiais que escolhemos para nos acompanhar neste momento único
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Madrinhas */}
          <div>
            <h3 className="text-2xl font-serif text-gray-800 text-center mb-8">
              Madrinhas da Noiva
            </h3>
            
            <div className="space-y-6">
              {bridesmaids.map((bridesmaid, index) => (
                <div key={index} className="bg-gradient-to-r from-green-50 to-white rounded-xl p-6 border border-green-100 shadow-sm">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
                      <span className="text-xl font-serif text-green-700">
                        {bridesmaid.name.charAt(0)}
                      </span>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">
                        {bridesmaid.name}
                      </h4>
                      <p className="text-green-600 font-medium text-sm">
                        {bridesmaid.role}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {bridesmaid.relation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Padrinhos */}
          <div>
            <h3 className="text-2xl font-serif text-gray-800 text-center mb-8">
              Padrinhos do Noivo
            </h3>
            
            <div className="space-y-6">
              {groomsmen.map((groomsman, index) => (
                <div key={index} className="bg-gradient-to-r from-green-50 to-white rounded-xl p-6 border border-green-100 shadow-sm">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
                      <span className="text-xl font-serif text-green-700">
                        {groomsman.name.charAt(0)}
                      </span>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">
                        {groomsman.name}
                      </h4>
                      <p className="text-green-600 font-medium text-sm">
                        {groomsman.role}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {groomsman.relation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BridesmaidsSection;
