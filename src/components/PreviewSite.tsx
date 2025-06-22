
import { useEffect } from "react";
import { PreviewData } from "@/types/quiz";
import { useVisualTokens } from "@/contexts/VisualTokensContext";
import WeddingSiteNavigation from "./wedding-site/WeddingSiteNavigation";
import HeroSection from "./wedding-site/HeroSection";
import CountdownSection from "./wedding-site/CountdownSection";
import CoupleSection from "./wedding-site/CoupleSection";
import BridesmaidsSection from "./wedding-site/BridesmaidsSection";
import GiftListSection from "./wedding-site/GiftListSection";
import RSVPSection from "./wedding-site/RSVPSection";
import MessagesSection from "./wedding-site/MessagesSection";
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
      
      <CountdownSection weddingDate={data.weddingDate} />
      
      <CoupleSection coupleNames={data.coupleNames} />
      
      <BridesmaidsSection />
      
      <GiftListSection siteId="preview" />
      
      <RSVPSection 
        weddingDate={data.weddingDate}
        templateName={data.templateName}
      />
      
      <MessagesSection />
      
      <FooterSection
        coupleNames={data.coupleNames}
        weddingDate={data.weddingDate}
      />
    </div>
  );
};

export default PreviewSite;
