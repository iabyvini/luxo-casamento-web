
import GallerySection from "@/components/wedding-site/GallerySection";

const EditorialGallerySection = ({ siteId, templateName, quizAnswers }: { siteId: string; templateName: string; quizAnswers: any }) => {
  return (
    <div className="editorial-modern-gallery bg-white py-24">
      <GallerySection siteId={siteId} templateName={templateName} quizAnswers={quizAnswers} />
      
      <style>{`
        .editorial-modern-gallery h2 {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          font-size: 3rem;
          color: #1a1a1a;
          letter-spacing: -0.02em;
        }
        
        .editorial-modern-gallery .gallery-item {
          border: none;
          border-radius: 0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        
        .editorial-modern-gallery .gallery-item:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default EditorialGallerySection;
