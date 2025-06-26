
import CoupleSection from "@/components/wedding-site/CoupleSection";

const ClassicCoupleSection = ({ coupleNames }: { coupleNames: string }) => {
  return (
    <div className="classic-romantic-couple bg-gradient-to-br from-white to-rose-50 py-20">
      <CoupleSection coupleNames={coupleNames} />
      
      <style>{`
        .classic-romantic-couple h2 {
          font-family: 'Playfair Display', serif;
          color: #7f1d1d;
        }
        
        .classic-romantic-couple p {
          font-family: 'Crimson Text', serif;
          color: #6b7280;
        }
        
        .classic-romantic-couple .couple-photo {
          border: 4px solid #f9a8d4;
          border-radius: 50%;
          box-shadow: 0 15px 35px rgba(244, 114, 182, 0.2);
        }
      `}</style>
    </div>
  );
};

export default ClassicCoupleSection;
