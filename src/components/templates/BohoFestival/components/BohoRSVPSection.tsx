
import RSVPSection from "@/components/wedding-site/RSVPSection";

const BohoRSVPSection = ({ siteId, weddingDate, templateName }: { siteId: string; weddingDate: string; templateName: string }) => {
  return (
    <div className="boho-festival-rsvp bg-gradient-to-br from-orange-50 to-amber-50 py-20">
      <RSVPSection siteId={siteId} weddingDate={weddingDate} templateName={templateName} />
      
      <style>{`
        .boho-festival-rsvp h2 {
          font-family: 'Dancing Script', cursive;
          color: #92400e;
          font-size: 3.5rem;
        }
        
        .boho-festival-rsvp .rsvp-form {
          background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%);
          border: 2px solid #d97706;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(217, 119, 6, 0.1);
        }
      `}</style>
    </div>
  );
};

export default BohoRSVPSection;
