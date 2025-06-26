
import CoupleSection from "@/components/wedding-site/CoupleSection";

const EditorialCoupleSection = ({ coupleNames }: { coupleNames: string }) => {
  return (
    <div className="editorial-modern-couple bg-gray-50 py-24">
      <CoupleSection coupleNames={coupleNames} />
      
      <style>{`
        .editorial-modern-couple h2 {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          font-size: 3rem;
          color: #1a1a1a;
          letter-spacing: -0.02em;
        }
        
        .editorial-modern-couple p {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          color: #666;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};

export default EditorialCoupleSection;
