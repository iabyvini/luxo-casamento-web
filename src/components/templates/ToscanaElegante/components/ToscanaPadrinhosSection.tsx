
const ToscanaPadrinhosSection = () => {
  const padrinhos = [
    { nome: "Marina Silva", papel: "Madrinha", foto: "/placeholder.svg" },
    { nome: "Carlos Oliveira", papel: "Padrinho", foto: "/placeholder.svg" },
    { nome: "Ana Beatriz", papel: "Dama de Honra", foto: "/placeholder.svg" },
    { nome: "Pedro Santos", papel: "Padrinho", foto: "/placeholder.svg" },
  ];

  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-wide">
          Nossos Padrinhos
        </h2>
        
        <div className="toscana-divider"></div>
        
        <p className="text-lg toscana-accent mb-16 max-w-2xl mx-auto">
          As pessoas especiais que escolhemos para nos acompanhar neste momento único
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {padrinhos.map((pessoa, index) => (
            <div key={index} className="toscana-card rounded-lg p-6 text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                <img 
                  src={pessoa.foto} 
                  alt={pessoa.nome}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{pessoa.nome}</h3>
              <p className="toscana-accent text-sm font-medium">{pessoa.papel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToscanaPadrinhosSection;
