
import FooterSection from "@/components/wedding-site/FooterSection";

const BohoFooterSection = ({ coupleNames, weddingDate }: { coupleNames: string; weddingDate: string }) => {
  return (
    <div className="boho-festival-footer bg-gradient-to-br from-amber-100 to-orange-100 py-16">
      <FooterSection coupleNames={coupleNames} weddingDate={weddingDate} />
      
      <style>{`
        .boho-festival-footer {
          font-family: 'Nunito', sans-serif;
          color: #92400e;
        }
        
        .boho-festival-footer h3 {
          font-family: 'Dancing Script', cursive;
        }
      `}</style>
    </div>
  );
};

export default BohoFooterSection;
