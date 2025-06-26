
import EventDetailsSection from "@/components/wedding-site/EventDetailsSection";

const ClassicEventDetailsSection = ({ weddingDate, templateName, quizAnswers }: { weddingDate: string; templateName: string; quizAnswers: any }) => {
  return (
    <div className="classic-romantic-event bg-gradient-to-br from-rose-50 to-white py-20">
      <EventDetailsSection weddingDate={weddingDate} templateName={templateName} quizAnswers={quizAnswers} />
      
      <style>{`
        .classic-romantic-event h2 {
          font-family: 'Playfair Display', serif;
          color: #7f1d1d;
        }
        
        .classic-romantic-event .event-card {
          background: linear-gradient(135deg, #fff 0%, #fdf2f8 100%);
          border: 2px solid #f9a8d4;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(244, 114, 182, 0.1);
        }
        
        .classic-romantic-event .event-icon {
          color: #be185d;
        }
      `}</style>
    </div>
  );
};

export default ClassicEventDetailsSection;
