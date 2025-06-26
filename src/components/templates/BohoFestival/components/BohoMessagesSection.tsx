
import MessagesSection from "@/components/wedding-site/MessagesSection";

const BohoMessagesSection = ({ siteId }: { siteId: string }) => {
  return (
    <div className="boho-festival-messages bg-gradient-to-br from-amber-50 to-orange-50 py-20">
      <MessagesSection siteId={siteId} />
      
      <style>{`
        .boho-festival-messages h2 {
          font-family: 'Dancing Script', cursive;
          color: #92400e;
          font-size: 3.5rem;
        }
        
        .boho-festival-messages .message-card {
          background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%);
          border: 2px solid #d97706;
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(217, 119, 6, 0.15);
        }
      `}</style>
    </div>
  );
};

export default BohoMessagesSection;
