
import GallerySection from "@/components/wedding-site/GallerySection";

const ClassicGallerySection = ({ siteId, templateName, quizAnswers }: { siteId: string; templateName: string; quizAnswers: any }) => {
  return (
    <div className="classic-romantic-gallery bg-gradient-to-br from-white to-rose-50 py-20">
      <GallerySection siteId={siteId} templateName={templateName} quizAnswers={quizAnswers} />
      
      <style>{`
        .classic-romantic-gallery h2 {
          font-family: 'Playfair Display', serif;
          color: #7f1d1d;
        }
        
        .classic-romantic-gallery .gallery-item {
          border: 3px solid #f9a8d4;
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(244, 114, 182, 0.15);
          transition: transform 0.3s ease;
        }
        
        .classic-romantic-gallery .gallery-item:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default ClassicGallerySection;
