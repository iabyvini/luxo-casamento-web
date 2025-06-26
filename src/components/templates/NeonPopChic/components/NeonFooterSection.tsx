
import FooterSection from "@/components/wedding-site/FooterSection";

const NeonFooterSection = ({ coupleNames, weddingDate }: { coupleNames: string; weddingDate: string }) => {
  return (
    <div className="neon-pop-footer bg-gradient-to-br from-black to-purple-900 py-16">
      <FooterSection coupleNames={coupleNames} weddingDate={weddingDate} />
      
      <style>{`
        .neon-pop-footer {
          font-family: 'Rajdhani', sans-serif;
          color: #8A2BE2;
        }
        
        .neon-pop-footer h3 {
          font-family: 'Orbitron', monospace;
          color: #FF1493;
          text-shadow: 0 0 10px #FF1493;
        }
      `}</style>
    </div>
  );
};

export default NeonFooterSection;
