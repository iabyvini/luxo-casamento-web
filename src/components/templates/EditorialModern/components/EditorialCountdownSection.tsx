
import CountdownSection from "@/components/wedding-site/CountdownSection";

const EditorialCountdownSection = ({ weddingDate }: { weddingDate: string }) => {
  return (
    <div className="editorial-modern-countdown bg-white py-24">
      <CountdownSection weddingDate={weddingDate} />
      
      <style>{`
        .editorial-modern-countdown h2 {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          font-size: 3rem;
          color: #1a1a1a;
          letter-spacing: -0.02em;
        }
        
        .editorial-modern-countdown .countdown-item {
          background: #f8f8f8;
          border: 1px solid #e5e5e5;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default EditorialCountdownSection;
