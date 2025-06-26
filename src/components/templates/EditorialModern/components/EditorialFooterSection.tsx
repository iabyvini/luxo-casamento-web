
import FooterSection from "@/components/wedding-site/FooterSection";

const EditorialFooterSection = ({ coupleNames, weddingDate }: { coupleNames: string; weddingDate: string }) => {
  return (
    <div className="editorial-modern-footer bg-black text-white py-16">
      <FooterSection coupleNames={coupleNames} weddingDate={weddingDate} />
      
      <style>{`
        .editorial-modern-footer {
          font-family: 'Inter', sans-serif;
          color: white;
        }
        
        .editorial-modern-footer h3 {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
        }
      `}</style>
    </div>
  );
};

export default EditorialFooterSection;
