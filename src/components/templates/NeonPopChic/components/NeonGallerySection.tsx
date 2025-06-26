
import GallerySection from "@/components/wedding-site/GallerySection";

const NeonGallerySection = ({ siteId, templateName, quizAnswers }: { siteId: string; templateName: string; quizAnswers: any }) => {
  return (
    <div className="neon-pop-gallery bg-gradient-to-br from-purple-900 via-black to-purple-900 py-20">
      <GallerySection siteId={siteId} templateName={templateName} quizAnswers={quizAnswers} />
      
      <style>{`
        .neon-pop-gallery h2 {
          font-family: 'Orbitron', monospace;
          color: #FF1493;
          font-size: 3rem;
          text-shadow: 0 0 20px #FF1493;
        }
        
        .neon-pop-gallery .gallery-item {
          border: 2px solid #FF1493;
          border-radius: 10px;
          box-shadow: 0 0 20px rgba(255, 20, 147, 0.3);
          transition: all 0.3s ease;
        }
        
        .neon-pop-gallery .gallery-item:hover {
          transform: scale(1.05);
          box-shadow: 0 0 30px rgba(255, 20, 147, 0.6);
        }
      `}</style>
    </div>
  );
};

export default NeonGallerySection;
