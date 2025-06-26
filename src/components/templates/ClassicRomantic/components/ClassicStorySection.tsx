
import OurStorySection from "@/components/wedding-site/OurStorySection";

const ClassicStorySection = ({ coupleNames, templateName }: { coupleNames: string; templateName: string }) => {
  return (
    <div className="classic-romantic-story bg-gradient-to-br from-rose-50 to-white py-20">
      <OurStorySection coupleNames={coupleNames} templateName={templateName} />
      
      <style>{`
        .classic-romantic-story h2 {
          font-family: 'Playfair Display', serif;
          color: #7f1d1d;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .classic-romantic-story p {
          font-family: 'Crimson Text', serif;
          color: #6b7280;
          line-height: 1.8;
        }
        
        .classic-romantic-story .story-timeline {
          border-left: 3px solid #f9a8d4;
        }
      `}</style>
    </div>
  );
};

export default ClassicStorySection;
