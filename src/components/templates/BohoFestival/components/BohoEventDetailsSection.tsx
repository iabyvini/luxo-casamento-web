
import EventDetailsSection from "@/components/wedding-site/EventDetailsSection";

const BohoEventDetailsSection = ({ weddingDate, templateName, quizAnswers }: { weddingDate: string; templateName: string; quizAnswers: any }) => {
  return (
    <div className="boho-festival-event bg-gradient-to-br from-amber-50 to-orange-50 py-20">
      <EventDetailsSection weddingDate={weddingDate} templateName={templateName} quizAnswers={quizAnswers} />
      
      <style>{`
        .boho-festival-event h2 {
          font-family: 'Dancing Script', cursive;
          color: #92400e;
          font-size: 3.5rem;
        }
        
        .boho-festival-event .event-card {
          background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%);
          border: 2px solid #d97706;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(217, 119, 6, 0.1);
        }
        
        .boho-festival-event .event-icon {
          color: #d97706;
        }
      `}</style>
    </div>
  );
};

export default BohoEventDetailsSection;
