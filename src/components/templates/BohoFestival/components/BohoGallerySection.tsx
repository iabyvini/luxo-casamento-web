
import GallerySection from "@/components/wedding-site/GallerySection";

const BohoGallerySection = ({ siteId, templateName, quizAnswers }: { siteId: string; templateName: string; quizAnswers: any }) => {
  return (
    <div className="boho-festival-gallery bg-gradient-to-br from-orange-50 to-amber-50 py-20">
      <GallerySection siteId={siteId} templateName={templateName} quizAnswers={quizAnswers} />
      
      <style>{`
        .boho-festival-gallery h2 {
          font-family: 'Dancing Script', cursive;
          color: #92400e;
          font-size: 3.5rem;
        }
        
        .boho-festival-gallery .gallery-item {
          border: 3px solid #d97706;
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(217, 119, 6, 0.15);
          transition: transform 0.3s ease;
          transform: rotate(-2deg);
        }
        
        .boho-festival-gallery .gallery-item:nth-child(even) {
          transform: rotate(2deg);
        }
        
        .boho-festival-gallery .gallery-item:hover {
          transform: rotate(0deg) scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default BohoGallerySection;
