
import FooterSection from "@/components/wedding-site/FooterSection";

const ClassicFooterSection = ({ coupleNames, weddingDate }: { coupleNames: string; weddingDate: string }) => {
  return (
    <div className="classic-romantic-footer bg-gradient-to-br from-rose-100 to-pink-100 py-16">
      <FooterSection coupleNames={coupleNames} weddingDate={weddingDate} />
      
      <style>{`
        .classic-romantic-footer {
          font-family: 'Crimson Text', serif;
          color: #7f1d1d;
        }
        
        .classic-romantic-footer h3 {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </div>
  );
};

export default ClassicFooterSection;
