
import { PreviewData } from "@/types/quiz";
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
  return (
    <div className="min-h-screen bg-white">
      {/* Navegação */}
      <WeddingSiteNavigation coupleNames={data.coupleNames} />
      
      {/* Hero Section com mensagem IA destacada */}
      <HeroSection
        coupleNames={data.coupleNames}
        weddingDate={data.weddingDate}
        welcomeMessage={data.welcomeMessage}
        templateName={data.templateName}
      />
      
      {/* Nossa História */}
      <OurStorySection
        coupleNames={data.coupleNames}
        templateName={data.templateName}
      />
      
      {/* Detalhes do Evento */}
      <EventDetailsSection
        weddingDate={data.weddingDate}
        templateName={data.templateName}
      />
      
      {/* Galeria */}
      <GallerySection templateName={data.templateName} />
      
      {/* RSVP */}
      <RSVPSection
        weddingDate={data.weddingDate}
        templateName={data.templateName}
      />
      
      {/* Footer */}
      <FooterSection
        coupleNames={data.coupleNames}
        templateName={data.templateName}
      />
    </div>
  );
};

export default PreviewSite;
