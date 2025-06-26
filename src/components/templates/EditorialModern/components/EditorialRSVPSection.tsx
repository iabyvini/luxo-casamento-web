
import RSVPSection from "@/components/wedding-site/RSVPSection";

const EditorialRSVPSection = ({ siteId, weddingDate, templateName }: { siteId: string; weddingDate: string; templateName: string }) => {
  return (
    <div className="editorial-modern-rsvp bg-white py-24">
      <RSVPSection siteId={siteId} weddingDate={weddingDate} templateName={templateName} />
      
      <style>{`
        .editorial-modern-rsvp h2 {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          font-size: 3rem;
          color: #1a1a1a;
          letter-spacing: -0.02em;
        }
        
        .editorial-modern-rsvp .rsvp-form {
          background: #f8f8f8;
          border: 1px solid #e5e5e5;
          border-radius: 0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }
      `}</style>
    </div>
  );
};

export default EditorialRSVPSection;
