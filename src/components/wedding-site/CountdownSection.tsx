
import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface CountdownSectionProps {
  weddingDate: string;
}

const CountdownSection = ({ weddingDate }: CountdownSectionProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Tratar a data corretamente para evitar problemas de timezone
      // Assumir que a data está no formato YYYY-MM-DD e criar no timezone local
      const dateParts = weddingDate.split('-');
      const wedding = new Date(
        parseInt(dateParts[0]), 
        parseInt(dateParts[1]) - 1, // mês é 0-indexado
        parseInt(dateParts[2]),
        23, 59, 59 // definir para o final do dia
      ).getTime();
      
      const now = new Date().getTime();
      const difference = wedding - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <section id="countdown" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Clock className="h-4 w-4" />
            <span>Contagem Regressiva</span>
          </div>
          
          <h2 className="text-4xl font-serif text-gray-800 mb-4">
            Faltam Poucos Dias!
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos ansiosos para celebrar este momento especial com vocês
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center border border-green-200">
            <div className="text-4xl md:text-5xl font-bold text-green-700 mb-2">
              {timeLeft.days}
            </div>
            <div className="text-sm font-medium text-green-600 uppercase tracking-wider">
              Dias
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center border border-green-200">
            <div className="text-4xl md:text-5xl font-bold text-green-700 mb-2">
              {timeLeft.hours}
            </div>
            <div className="text-sm font-medium text-green-600 uppercase tracking-wider">
              Horas
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center border border-green-200">
            <div className="text-4xl md:text-5xl font-bold text-green-700 mb-2">
              {timeLeft.minutes}
            </div>
            <div className="text-sm font-medium text-green-600 uppercase tracking-wider">
              Minutos
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center border border-green-200">
            <div className="text-4xl md:text-5xl font-bold text-green-700 mb-2">
              {timeLeft.seconds}
            </div>
            <div className="text-sm font-medium text-green-600 uppercase tracking-wider">
              Segundos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
