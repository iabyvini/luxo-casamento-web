
import CountdownSection from "@/components/wedding-site/CountdownSection";

const BohoCountdownSection = ({ weddingDate }: { weddingDate: string }) => {
  return (
    <div className="boho-festival-countdown bg-gradient-to-br from-amber-50 to-orange-50 py-20">
      <CountdownSection weddingDate={weddingDate} />
      
      <style>{`
        .boho-festival-countdown h2 {
          font-family: 'Dancing Script', cursive;
          color: #92400e;
          font-size: 3.5rem;
        }
        
        .boho-festival-countdown .countdown-item {
          background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%);
          border: 2px solid #d97706;
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(217, 119, 6, 0.15);
        }
      `}</style>
    </div>
  );
};

export default BohoCountdownSection;
