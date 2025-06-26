
import MessagesSection from "@/components/wedding-site/MessagesSection";

const EditorialMessagesSection = ({ siteId }: { siteId: string }) => {
  return (
    <div className="editorial-modern-messages bg-gray-50 py-24">
      <MessagesSection siteId={siteId} />
      
      <style>{`
        .editorial-modern-messages h2 {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          font-size: 3rem;
          color: #1a1a1a;
          letter-spacing: -0.02em;
        }
        
        .editorial-modern-messages .message-card {
          background: white;
          border: 1px solid #e5e5e5;
          border-radius: 0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }
      `}</style>
    </div>
  );
};

export default EditorialMessagesSection;
