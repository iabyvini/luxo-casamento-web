
import { PreviewData } from "@/types/quiz";
import ErrorBoundary from "./ErrorBoundary";
import WeddingSiteNavigation from "./wedding-site/WeddingSiteNavigation";
import { 
  getHeroComponent,
  getNavigationComponent,
  getGalleryComponent,
  getStoryComponent,
  getRSVPComponent,
  getFooterComponent
} from "@/utils/templateComponentFactory";
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

  // Get template-specific components
  const HeroComponent = getHeroComponent(siteData.templateName);
  const NavigationComponent = getNavigationComponent(siteData.templateName);
  const GalleryComponent = getGalleryComponent(siteData.templateName);
  const StoryComponent = getStoryComponent(siteData.templateName);
  const RSVPComponent = getRSVPComponent(siteData.templateName);
  const FooterComponent = getFooterComponent(siteData.templateName);

  // Define sections that should be rendered based on template
  const sections = ['hero', 'story', 'gallery', 'event-details', 'rsvp', 'gifts'];

  return (
    <ErrorBoundary>
      <div className="wedding-site">
        {/* Navigation - Use template-specific or default */}
        {NavigationComponent ? (
          <NavigationComponent sections={sections} />
        ) : (
          <WeddingSiteNavigation coupleNames={siteData.coupleNames} />
        )}
        
        {/* Hero Section - Always use template-specific */}
        <HeroComponent 
          coupleNames={siteData.coupleNames}
          weddingDate={siteData.weddingDate}
          welcomeMessage={siteData.welcomeMessage}
          templateName={siteData.templateName}
          quizAnswers={siteData.quizAnswers}
        />
        
        <CountdownSection weddingDate={siteData.weddingDate} />
        <CoupleSection coupleNames={siteData.coupleNames} />
        
        {/* Our Story Section - Use template-specific or default */}
        {siteData.customContent?.ourStory ? (
          StoryComponent ? (
            <StoryComponent ourStory={siteData.customContent.ourStory} />
          ) : (
            <OurStorySection 
              coupleNames={siteData.coupleNames}
              templateName={siteData.templateName}
            />
          )
        ) : (
          <OurStorySection 
            coupleNames={siteData.coupleNames}
            templateName={siteData.templateName}
          />
        )}
        
        {/* Gallery Section - Use template-specific or default */}
        {siteData.customContent?.galleryPhotos && siteData.customContent.galleryPhotos.length > 0 ? (
          GalleryComponent ? (
            <GalleryComponent photos={siteData.customContent.galleryPhotos} />
          ) : (
            <GallerySection 
              siteId={siteId}
              templateName={siteData.templateName}
              quizAnswers={siteData.quizAnswers}
            />
          )
        ) : (
          <GallerySection 
            siteId={siteId}
            templateName={siteData.templateName}
            quizAnswers={siteData.quizAnswers}
          />
        )}
        
        <EventDetailsSection 
          weddingDate={siteData.weddingDate}
          templateName={siteData.templateName}
          quizAnswers={siteData.quizAnswers}
        />
        <BridesmaidsSection />
        <GiftListSection siteId={siteId} />
        
        {/* RSVP Section - Use template-specific or default */}
        {RSVPComponent ? (
          <RSVPComponent siteId={siteId} />
        ) : (
          <RSVPSection 
            weddingDate={siteData.weddingDate}
            templateName={siteData.templateName}
          />
        )}
        
        <MessagesSection />
        
        {/* Footer Section - Use template-specific or default */}
        {FooterComponent ? (
          <FooterComponent 
            coupleNames={siteData.coupleNames}
            weddingDate={siteData.weddingDate}
            eventDetails={siteData.customContent?.eventDetails}
          />
        ) : (
          <FooterSection 
            coupleNames={siteData.coupleNames}
            weddingDate={siteData.weddingDate}
          />
        )}
      </div>
    </ErrorBoundary>
  );
};

export default SiteRenderer;
