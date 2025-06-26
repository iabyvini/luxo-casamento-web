
import RSVPSection from "@/components/wedding-site/RSVPSection";

const ClassicRSVPSection = ({ siteId, weddingDate, templateName }: { siteId: string; weddingDate: string; templateName: string }) => {
  return (
    <div className="classic-romantic-rsvp bg-gradient-to-br from-white to-rose-50 py-20">
      <RSVPSection siteId={siteId} weddingDate={weddingDate} templateName={templateName} />
      
      <style>{`
        .classic-romantic-rsvp h2 {
          font-family: 'Playfair Display', serif;
          color: #7f1d1d;
        }
        
        .classic-romantic-rsvp .rsvp-form {
          background: linear-gradient(135deg, #fff 0%, #fdf2f8 100%);
          border: 2px solid #f9a8d4;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(244, 114, 182, 0.1);
        }
      `}</style>
    </div>
  );
};

export default ClassicRSVPSection;
