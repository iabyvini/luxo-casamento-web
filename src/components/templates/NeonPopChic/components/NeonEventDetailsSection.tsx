
import EventDetailsSection from "@/components/wedding-site/EventDetailsSection";

const NeonEventDetailsSection = ({ weddingDate, templateName, quizAnswers }: { weddingDate: string; templateName: string; quizAnswers: any }) => {
  return (
    <div className="neon-pop-event bg-gradient-to-br from-black via-purple-900 to-black py-20">
      <EventDetailsSection weddingDate={weddingDate} templateName={templateName} quizAnswers={quizAnswers} />
      
      <style>{`
        .neon-pop-event h2 {
          font-family: 'Orbitron', monospace;
          color: #FF1493;
          font-size: 3rem;
          text-shadow: 0 0 20px #FF1493;
        }
        
        .neon-pop-event .event-card {
          background: linear-gradient(135deg, #1a0033 0%, #000 100%);
          border: 2px solid #8A2BE2;
          border-radius: 10px;
          box-shadow: 0 0 20px rgba(138, 43, 226, 0.3);
        }
        
        .neon-pop-event .event-icon {
          color: #FF1493;
          filter: drop-shadow(0 0 10px #FF1493);
        }
      `}</style>
    </div>
  );
};

export default NeonEventDetailsSection;
