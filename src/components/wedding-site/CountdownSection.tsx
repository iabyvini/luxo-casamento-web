
import { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import { useModernVisualTokens } from "@/contexts/ModernVisualTokensContext";

interface CountdownSectionProps {
  weddingDate: string;
}

const CountdownSection = ({ weddingDate }: CountdownSectionProps) => {
  const { templateProfile } = useModernVisualTokens();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const wedding = new Date(weddingDate).getTime();
      const now = new Date().getTime();
      const difference = wedding - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  // Estilos baseados no template selecionado
  const getTemplateStyles = () => {
    if (!templateProfile) {
      return {
        bgClass: "bg-white",
        textClass: "text-gray-800",
        cardClass: "bg-gradient-to-br from-green-50 to-green-100 border-green-200",
        numberClass: "text-green-700",
        labelClass: "text-green-600"
      };
    }

    switch (templateProfile.id) {
      case 'editorial-romantic':
        return {
          bgClass: "bg-gray-50",
          textClass: "text-gray-900",
          cardClass: "bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300",
          numberClass: "text-gray-900",
          labelClass: "text-gray-700"
        };
      
      case 'minimal-luxury':
        return {
          bgClass: "bg-black",
          textClass: "text-white",
          cardClass: "bg-gradient-to-br from-gray-900 to-black border-gray-700",
          numberClass: "text-white",
          labelClass: "text-gray-300"
        };
      
      case 'boho-refined':
        return {
          bgClass: "bg-amber-50",
          textClass: "text-amber-900",
          cardClass: "bg-gradient-to-br from-amber-100 to-amber-200 border-amber-300",
          numberClass: "text-amber-800",
          labelClass: "text-amber-700"
        };
      
      case 'classic-contemporary':
        return {
          bgClass: "bg-amber-50",
          textClass: "text-amber-900",
          cardClass: "bg-gradient-to-br from-amber-100 to-amber-200 border-amber-300",
          numberClass: "text-amber-800",
          labelClass: "text-amber-700"
        };
      
      case 'natural-modern':
        return {
          bgClass: "bg-green-50",
          textClass: "text-green-900",
          cardClass: "bg-gradient-to-br from-green-100 to-green-200 border-green-300",
          numberClass: "text-green-800",
          labelClass: "text-green-700"
        };
      
      case 'neutral-sophisticated':
        return {
          bgClass: "bg-gray-50",
          textClass: "text-gray-900",
          cardClass: "bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300",
          numberClass: "text-gray-900",
          labelClass: "text-gray-700"
        };
      
      default:
        return {
          bgClass: "bg-white",
          textClass: "text-gray-800",
          cardClass: "bg-gradient-to-br from-green-50 to-green-100 border-green-200",
          numberClass: "text-green-700",
          labelClass: "text-green-600"
        };
    }
  };

  const styles = getTemplateStyles();

  return (
    <section id="countdown" className={`py-20 ${styles.bgClass}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${styles.cardClass}`}>
            <Clock className="h-4 w-4" />
            <span>Contagem Regressiva</span>
          </div>
          
          <h2 className={`text-4xl font-serif ${styles.textClass} mb-4`}>
            Faltam Poucos Dias!
          </h2>
          
          <p className={`${styles.textClass} opacity-70 max-w-2xl mx-auto`}>
            Estamos ansiosos para celebrar este momento especial com vocês
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className={`${styles.cardClass} rounded-xl p-6 text-center border`}>
            <div className={`text-4xl md:text-5xl font-bold ${styles.numberClass} mb-2`}>
              {timeLeft.days}
            </div>
            <div className={`text-sm font-medium ${styles.labelClass} uppercase tracking-wider`}>
              Dias
            </div>
          </div>
          
          <div className={`${styles.cardClass} rounded-xl p-6 text-center border`}>
            <div className={`text-4xl md:text-5xl font-bold ${styles.numberClass} mb-2`}>
              {timeLeft.hours}
            </div>
            <div className={`text-sm font-medium ${styles.labelClass} uppercase tracking-wider`}>
              Horas
            </div>
          </div>
          
          <div className={`${styles.cardClass} rounded-xl p-6 text-center border`}>
            <div className={`text-4xl md:text-5xl font-bold ${styles.numberClass} mb-2`}>
              {timeLeft.minutes}
            </div>
            <div className={`text-sm font-medium ${styles.labelClass} uppercase tracking-wider`}>
              Minutos
            </div>
          </div>
          
          <div className={`${styles.cardClass} rounded-xl p-6 text-center border`}>
            <div className={`text-4xl md:text-5xl font-bold ${styles.numberClass} mb-2`}>
              {timeLeft.seconds}
            </div>
            <div className={`text-sm font-medium ${styles.labelClass} uppercase tracking-wider`}>
              Segundos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
