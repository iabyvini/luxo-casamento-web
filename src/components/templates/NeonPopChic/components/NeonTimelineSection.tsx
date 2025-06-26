
import OurStorySection from "@/components/wedding-site/OurStorySection";

const NeonTimelineSection = ({ coupleNames, templateName }: { coupleNames: string; templateName: string }) => {
  return (
    <div className="neon-pop-timeline bg-gradient-to-br from-black via-purple-900 to-black py-20">
      <OurStorySection coupleNames={coupleNames} templateName={templateName} />
      
      <style>{`
        .neon-pop-timeline h2 {
          font-family: 'Orbitron', monospace;
          color: #FF1493;
          font-size: 3rem;
          text-shadow: 0 0 20px #FF1493;
        }
        
        .neon-pop-timeline p {
          font-family: 'Rajdhani', sans-serif;
          color: #8A2BE2;
          line-height: 1.6;
        }
        
        .neon-pop-timeline .story-timeline {
          border-left: 3px solid #FF1493;
          box-shadow: 0 0 10px rgba(255, 20, 147, 0.3);
        }
      `}</style>
    </div>
  );
};

export default NeonTimelineSection;
