
import BridesmaidsSection from "@/components/wedding-site/BridesmaidsSection";

const ClassicBridesmaidsSection = () => {
  return (
    <div className="classic-romantic-bridesmaids bg-gradient-to-br from-white to-rose-50 py-20">
      <BridesmaidsSection />
      
      <style>{`
        .classic-romantic-bridesmaids h2 {
          font-family: 'Playfair Display', serif;
          color: #7f1d1d;
        }
        
        .classic-romantic-bridesmaids .bridesmaid-card {
          background: linear-gradient(135deg, #fff 0%, #fdf2f8 100%);
          border: 2px solid #f9a8d4;
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(244, 114, 182, 0.15);
        }
      `}</style>
    </div>
  );
};

export default ClassicBridesmaidsSection;
