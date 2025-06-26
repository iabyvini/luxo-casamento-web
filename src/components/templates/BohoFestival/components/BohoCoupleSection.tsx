
import CoupleSection from "@/components/wedding-site/CoupleSection";

const BohoCoupleSection = ({ coupleNames }: { coupleNames: string }) => {
  return (
    <div className="boho-festival-couple bg-gradient-to-br from-orange-50 to-amber-50 py-20">
      <CoupleSection coupleNames={coupleNames} />
      
      <style>{`
        .boho-festival-couple h2 {
          font-family: 'Dancing Script', cursive;
          color: #92400e;
          font-size: 3.5rem;
        }
        
        .boho-festival-couple p {
          font-family: 'Nunito', sans-serif;
          color: #78716c;
          line-height: 1.7;
        }
        
        .boho-festival-couple .couple-photo {
          border: 4px solid #d97706;
          border-radius: 50%;
          box-shadow: 0 15px 35px rgba(217, 119, 6, 0.2);
        }
      `}</style>
    </div>
  );
};

export default BohoCoupleSection;
