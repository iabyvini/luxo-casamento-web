
import { PreviewData } from "@/types/quiz";
import ErrorBoundary from "./ErrorBoundary";
import WeddingSiteNavigation from "./wedding-site/WeddingSiteNavigation";
import HeroSection from "./wedding-site/HeroSection";
import CountdownSection from "./wedding-site/CountdownSection";
import CoupleSection from "./wedding-site/CoupleSection";
import OurStorySection from "./wedding-site/OurStorySection";
import GallerySection from "./wedding-site/GallerySection";
import EventDetailsSection from "./wedding-site/EventDetailsSection";
import BridesmaidsSection from "./wedding-site/BridesmaidsSection";
import GiftListSection from "./wedding-site/GiftListSection";
import RSVPSection from "./wedding-site/RSVPSection";
import MessagesSection from "./wedding-site/MessagesSection";
import FooterSection from "./wedding-site/FooterSection";

interface SiteRendererProps {
  siteData: PreviewData;
  siteId?: string;
}

const SiteRenderer = ({ siteData, siteId = "preview" }: SiteRendererProps) => {
  console.log('🎨 SiteRenderer renderizando site:', siteId);

  return (
    <ErrorBoundary>
      <div className="wedding-site">
        <WeddingSiteNavigation coupleNames={siteData.coupleNames} />
        <HeroSection 
          coupleNames={siteData.coupleNames}
          weddingDate={siteData.weddingDate}
          welcomeMessage={siteData.welcomeMessage}
          templateName={siteData.templateName}
        />
        <CountdownSection weddingDate={siteData.weddingDate} />
        <CoupleSection coupleNames={siteData.coupleNames} />
        <OurStorySection 
          coupleNames={siteData.coupleNames}
          templateName={siteData.templateName}
        />
        <GallerySection 
          siteId={siteId}
          templateName={siteData.templateName}
          quizAnswers={siteData.quizAnswers}
        />
        <EventDetailsSection 
          weddingDate={siteData.weddingDate}
          templateName={siteData.templateName}
          quizAnswers={siteData.quizAnswers}
        />
        <BridesmaidsSection />
        <GiftListSection siteId={siteId} />
        <RSVPSection 
          weddingDate={siteData.weddingDate}
          templateName={siteData.templateName}
        />
        <MessagesSection />
        <FooterSection 
          coupleNames={siteData.coupleNames}
          weddingDate={siteData.weddingDate}
        />
      </div>
    </ErrorBoundary>
  );
};

export default SiteRenderer;
