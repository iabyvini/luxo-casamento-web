
import GiftListSection from "@/components/wedding-site/GiftListSection";

const ClassicGiftListSection = ({ siteId }: { siteId: string }) => {
  return (
    <div className="classic-romantic-gifts bg-gradient-to-br from-rose-50 to-white py-20">
      <GiftListSection siteId={siteId} />
      
      <style>{`
        .classic-romantic-gifts h2 {
          font-family: 'Playfair Display', serif;
          color: #7f1d1d;
        }
        
        .classic-romantic-gifts .gift-item {
          background: linear-gradient(135deg, #fff 0%, #fdf2f8 100%);
          border: 2px solid #f9a8d4;
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(244, 114, 182, 0.15);
        }
      `}</style>
    </div>
  );
};

export default ClassicGiftListSection;
