
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
      
      {/* Hero Section com mensagem IA destacada e personalização dinâmica */}
      <HeroSection
        coupleNames={data.coupleNames}
        weddingDate={data.weddingDate}
        welcomeMessage={data.welcomeMessage}
        templateName={data.templateName}
        quizAnswers={data.quizAnswers}
      />
      
      {/* Nossa História */}
      <OurStorySection
        coupleNames={data.coupleNames}
        templateName={data.templateName}
        quizAnswers={data.quizAnswers}
      />
      
      {/* Detalhes do Evento */}
      <EventDetailsSection
        weddingDate={data.weddingDate}
        templateName={data.templateName}
        quizAnswers={data.quizAnswers}
      />
      
      {/* Galeria */}
      <GallerySection 
        templateName={data.templateName}
        quizAnswers={data.quizAnswers}
      />
      
      {/* RSVP */}
      <RSVPSection
        weddingDate={data.weddingDate}
        templateName={data.templateName}
        quizAnswers={data.quizAnswers}
      />
      
      {/* Footer */}
      <FooterSection
        coupleNames={data.coupleNames}
        templateName={data.templateName}
        quizAnswers={data.quizAnswers}
      />
    </div>
  );
};

export default PreviewSite;
