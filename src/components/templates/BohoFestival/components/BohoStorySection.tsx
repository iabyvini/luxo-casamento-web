
import OurStorySection from "@/components/wedding-site/OurStorySection";

const BohoStorySection = ({ coupleNames, templateName }: { coupleNames: string; templateName: string }) => {
  return (
    <div className="boho-festival-story bg-gradient-to-br from-amber-50 to-orange-50 py-20">
      <OurStorySection coupleNames={coupleNames} templateName={templateName} />
      
      <style>{`
        .boho-festival-story h2 {
          font-family: 'Dancing Script', cursive;
          color: #92400e;
          font-size: 3.5rem;
        }
        
        .boho-festival-story p {
          font-family: 'Nunito', sans-serif;
          color: #78716c;
          line-height: 1.7;
        }
        
        .boho-festival-story .story-timeline {
          border-left: 3px solid #d97706;
        }
      `}</style>
    </div>
  );
};

export default BohoStorySection;
