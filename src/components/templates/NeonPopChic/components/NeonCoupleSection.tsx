
import CoupleSection from "@/components/wedding-site/CoupleSection";

const NeonCoupleSection = ({ coupleNames }: { coupleNames: string }) => {
  return (
    <div className="neon-pop-couple bg-gradient-to-br from-purple-900 via-black to-purple-900 py-20">
      <CoupleSection coupleNames={coupleNames} />
      
      <style>{`
        .neon-pop-couple h2 {
          font-family: 'Orbitron', monospace;
          color: #FF1493;
          font-size: 3rem;
          text-shadow: 0 0 20px #FF1493;
        }
        
        .neon-pop-couple p {
          font-family: 'Rajdhani', sans-serif;
          color: #8A2BE2;
          line-height: 1.6;
          text-shadow: 0 0 10px #8A2BE2;
        }
        
        .neon-pop-couple .couple-photo {
          border: 3px solid #FF1493;
          border-radius: 50%;
          box-shadow: 0 0 30px rgba(255, 20, 147, 0.5);
        }
      `}</style>
    </div>
  );
};

export default NeonCoupleSection;
