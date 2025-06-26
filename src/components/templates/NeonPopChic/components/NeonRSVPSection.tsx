
import RSVPSection from "@/components/wedding-site/RSVPSection";

const NeonRSVPSection = ({ siteId, weddingDate, templateName }: { siteId: string; weddingDate: string; templateName: string }) => {
  return (
    <div className="neon-pop-rsvp bg-gradient-to-br from-purple-900 via-black to-purple-900 py-20">
      <RSVPSection siteId={siteId} weddingDate={weddingDate} templateName={templateName} />
      
      <style>{`
        .neon-pop-rsvp h2 {
          font-family: 'Orbitron', monospace;
          color: #FF1493;
          font-size: 3rem;
          text-shadow: 0 0 20px #FF1493;
        }
        
        .neon-pop-rsvp .rsvp-form {
          background: linear-gradient(135deg, #1a0033 0%, #000 100%);
          border: 2px solid #FF1493;
          border-radius: 10px;
          box-shadow: 0 0 20px rgba(255, 20, 147, 0.3);
        }
        
        .neon-pop-rsvp input, .neon-pop-rsvp button {
          font-family: 'Rajdhani', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default NeonRSVPSection;
