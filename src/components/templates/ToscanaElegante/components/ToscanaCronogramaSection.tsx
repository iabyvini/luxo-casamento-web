
interface ToscanaCronogramaSectionProps {
  weddingDate: string;
}

const ToscanaCronogramaSection = ({ weddingDate }: ToscanaCronogramaSectionProps) => {
  const eventos = [
    { horario: "14:00", evento: "Chegada dos Convidados", local: "Igreja São Francisco" },
    { horario: "14:30", evento: "Cerimônia Religiosa", local: "Igreja São Francisco" },
    { horario: "15:30", evento: "Sessão de Fotos", local: "Jardins da Igreja" },
    { horario: "17:00", evento: "Recepção", local: "Villa Toscana" },
    { horario: "18:00", evento: "Jantar", local: "Villa Toscana" },
    { horario: "20:00", evento: "Festa e Dança", local: "Villa Toscana" },
  ];

  return (
    <section className="py-20 px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-wide">
          Cronograma
        </h2>
        
        <div className="toscana-divider"></div>
        
        <p className="text-lg toscana-accent mb-16">
          {new Date(weddingDate).toLocaleDateString('pt-BR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
        </p>
        
        <div className="space-y-6">
          {eventos.map((evento, index) => (
            <div key={index} className="toscana-card rounded-lg p-6 flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="text-2xl font-bold text-black w-20 text-left">
                  {evento.horario}
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold mb-1">{evento.evento}</h3>
                  <p className="toscana-accent text-sm">{evento.local}</p>
                </div>
              </div>
              <div className="w-2 h-2 bg-black rounded-full"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <p className="text-lg toscana-accent italic">
            "Cada momento é uma celebração do nosso amor"
          </p>
        </div>
      </div>
    </section>
  );
};

export default ToscanaCronogramaSection;
