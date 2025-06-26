
import GiftListSection from "@/components/wedding-site/GiftListSection";

const NeonGiftListSection = ({ siteId }: { siteId: string }) => {
  return (
    <div className="neon-pop-gifts bg-gradient-to-br from-black via-purple-900 to-black py-20">
      <GiftListSection siteId={siteId} />
      
      <style>{`
        .neon-pop-gifts h2 {
          font-family: 'Orbitron', monospace;
          color: #FF1493;
          font-size: 3rem;
          text-shadow: 0 0 20px #FF1493;
        }
        
        .neon-pop-gifts .gift-item {
          background: linear-gradient(135deg, #1a0033 0%, #000 100%);
          border: 2px solid #8A2BE2;
          border-radius: 10px;
          box-shadow: 0 0 20px rgba(138, 43, 226, 0.3);
        }
      `}</style>
    </div>
  );
};

export default NeonGiftListSection;
