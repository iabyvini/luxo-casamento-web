
import { useEffect } from "react";
import { PreviewData } from "@/types/quiz";
import { useVisualTokens } from "@/contexts/VisualTokensContext";
import { useModernVisualTokens } from "@/contexts/ModernVisualTokensContext";
import ModernHeroSection from "./wedding-site/ModernHeroSection";
import ModernNavigation from "./wedding-site/ModernNavigation";
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

interface PreviewSiteProps {
  data: PreviewData;
  siteId?: string;
}

const PreviewSite = ({ data, siteId = "preview" }: PreviewSiteProps) => {
  const { applyTokens } = useVisualTokens();
  const { applyModernTokens, setSiteId } = useModernVisualTokens();

  useEffect(() => {
    console.log('🔄 PreviewSite - Aplicando tokens para:', data.quizAnswers);
    
    // Definir o site ID para gerenciar fotos específicas
    setSiteId(siteId);
    
    if (data.quizAnswers) {
      // Aplicar os tokens modernos
      applyModernTokens(data.quizAnswers);
      
      // Manter compatibilidade com sistema antigo
      applyTokens(data.quizAnswers);
    }
  }, [data.quizAnswers, applyTokens, applyModernTokens, setSiteId, siteId]);

  return (
    <div className="min-h-screen bg-white modern-active">
      {/* Navigation */}
      <ModernNavigation coupleNames={data.coupleNames} />

      {/* Hero Section */}
      <ModernHeroSection
        coupleNames={data.coupleNames}
        weddingDate={data.weddingDate}
        welcomeMessage={data.welcomeMessage}
        templateName={data.templateName}
        quizAnswers={data.quizAnswers}
      />

      {/* Countdown */}
      <CountdownSection weddingDate={data.weddingDate} />

      {/* Couple Section */}
      <CoupleSection coupleNames={data.coupleNames} />

      {/* Our Story */}
      <OurStorySection 
        coupleNames={data.coupleNames}
        templateName={data.templateName}
      />

      {/* Gallery */}
      <GallerySection
        siteId={siteId}
        templateName={data.templateName}
        quizAnswers={data.quizAnswers}
      />

      {/* Event Details */}
      <EventDetailsSection
        weddingDate={data.weddingDate}
        templateName={data.templateName}
        quizAnswers={data.quizAnswers}
      />

      {/* Bridesmaids */}
      <BridesmaidsSection />

      {/* Gift List */}
      <GiftListSection siteId={siteId} />

      {/* RSVP */}
      <RSVPSection
        siteId={siteId}
        weddingDate={data.weddingDate}
        templateName={data.templateName}
      />

      {/* Messages */}
      <MessagesSection siteId={siteId} />

      {/* Footer */}
      <FooterSection
        coupleNames={data.coupleNames}
        weddingDate={new Date(data.weddingDate).toLocaleDateString('pt-BR')}
      />
    </div>
  );
};

export default PreviewSite;
