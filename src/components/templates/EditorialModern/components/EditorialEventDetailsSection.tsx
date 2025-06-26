
import EventDetailsSection from "@/components/wedding-site/EventDetailsSection";

const EditorialEventDetailsSection = ({ weddingDate, templateName, quizAnswers }: { weddingDate: string; templateName: string; quizAnswers: any }) => {
  return (
    <div className="editorial-modern-event bg-gray-50 py-24">
      <EventDetailsSection weddingDate={weddingDate} templateName={templateName} quizAnswers={quizAnswers} />
      
      <style>{`
        .editorial-modern-event h2 {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          font-size: 3rem;
          color: #1a1a1a;
          letter-spacing: -0.02em;
        }
        
        .editorial-modern-event .event-card {
          background: white;
          border: 1px solid #e5e5e5;
          border-radius: 0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }
      `}</style>
    </div>
  );
};

export default EditorialEventDetailsSection;
