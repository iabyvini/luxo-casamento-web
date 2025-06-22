
import { useEffect } from "react";
import { PreviewData } from "@/types/quiz";
import { useVisualTokens } from "@/contexts/VisualTokensContext";
import WeddingSiteNavigation from "./wedding-site/WeddingSiteNavigation";
import HeroSection from "./wedding-site/HeroSection";
import OurStorySection from "./wedding-site/OurStorySection";
import EventDetailsSection from "./wedding-site/EventDetailsSection";
import GallerySection from "./wedding-site/GallerySection";
import RSVPSection from "./wedding-site/RSVPSection";
import FooterSection from "./wedding-site/FooterSection";

interface PreviewSiteProps {
  data: PreviewData;
}

const PreviewSite = ({ data }: PreviewSiteProps) => {
  const { applyTokens } = useVisualTokens();

  useEffect(() => {
    if (data.quizAnswers) {
      applyTokens(data.quizAnswers);
    }
  }, [data.quizAnswers, applyTokens]);

  return (
    <div className="min-h-screen bg-white">
      <WeddingSiteNavigation coupleNames={data.coupleNames} />
      
      <HeroSection
        coupleNames={data.coupleNames}
        weddingDate={data.weddingDate}
        welcomeMessage={data.welcomeMessage}
        templateName={data.templateName}
        quizAnswers={data.quizAnswers}
      />
      
      <OurStorySection
        coupleNames={data.coupleNames}
        templateName={data.templateName}
        quizAnswers={data.quizAnswers}
      />
      
      <EventDetailsSection
        weddingDate={data.weddingDate}
        templateName={data.templateName}
        quizAnswers={data.quizAnswers}
      />
      
      <GallerySection 
        templateName={data.templateName}
        quizAnswers={data.quizAnswers}
      />
      
      <RSVPSection
        weddingDate={data.weddingDate}
        templateName={data.templateName}
        quizAnswers={data.quizAnswers}
      />
      
      <FooterSection
        coupleNames={data.coupleNames}
        templateName={data.templateName}
        quizAnswers={data.quizAnswers}
      />
    </div>
  );
};

export default PreviewSite;
