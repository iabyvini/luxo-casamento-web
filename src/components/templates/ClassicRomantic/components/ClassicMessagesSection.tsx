
import MessagesSection from "@/components/wedding-site/MessagesSection";

const ClassicMessagesSection = ({ siteId }: { siteId: string }) => {
  return (
    <div className="classic-romantic-messages bg-gradient-to-br from-rose-50 to-white py-20">
      <MessagesSection siteId={siteId} />
      
      <style>{`
        .classic-romantic-messages h2 {
          font-family: 'Playfair Display', serif;
          color: #7f1d1d;
        }
        
        .classic-romantic-messages .message-card {
          background: linear-gradient(135deg, #fff 0%, #fdf2f8 100%);
          border: 2px solid #f9a8d4;
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(244, 114, 182, 0.15);
        }
      `}</style>
    </div>
  );
};

export default ClassicMessagesSection;
