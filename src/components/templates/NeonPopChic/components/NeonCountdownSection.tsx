
import CountdownSection from "@/components/wedding-site/CountdownSection";

const NeonCountdownSection = ({ weddingDate }: { weddingDate: string }) => {
  return (
    <div className="neon-pop-countdown bg-gradient-to-br from-black via-purple-900 to-black py-20">
      <CountdownSection weddingDate={weddingDate} />
      
      <style>{`
        .neon-pop-countdown h2 {
          font-family: 'Orbitron', monospace;
          color: #FF1493;
          font-size: 3rem;
          text-shadow: 0 0 20px #FF1493, 0 0 40px #FF1493;
          animation: pulse 2s infinite;
        }
        
        .neon-pop-countdown .countdown-item {
          background: linear-gradient(135deg, #1a0033 0%, #000 100%);
          border: 2px solid #FF1493;
          border-radius: 10px;
          box-shadow: 0 0 20px rgba(255, 20, 147, 0.5);
          color: #FF1493;
          font-family: 'Audiowide', cursive;
        }
        
        @keyframes pulse {
          0%, 100% { text-shadow: 0 0 20px #FF1493, 0 0 40px #FF1493; }
          50% { text-shadow: 0 0 10px #FF1493, 0 0 20px #FF1493, 0 0 30px #8A2BE2; }
        }
      `}</style>
    </div>
  );
};

export default NeonCountdownSection;
