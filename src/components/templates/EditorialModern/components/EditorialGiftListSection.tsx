
import GiftListSection from "@/components/wedding-site/GiftListSection";

const EditorialGiftListSection = ({ siteId }: { siteId: string }) => {
  return (
    <div className="editorial-modern-gifts bg-gray-50 py-24">
      <GiftListSection siteId={siteId} />
      
      <style>{`
        .editorial-modern-gifts h2 {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          font-size: 3rem;
          color: #1a1a1a;
          letter-spacing: -0.02em;
        }
        
        .editorial-modern-gifts .gift-item {
          background: white;
          border: 1px solid #e5e5e5;
          border-radius: 0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }
      `}</style>
    </div>
  );
};

export default EditorialGiftListSection;
