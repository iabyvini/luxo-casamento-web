
import { useEffect } from "react";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useModernVisualTokens } from "@/contexts/ModernVisualTokensContext";
import ModernNavigation from "@/components/wedding-site/ModernNavigation";
import ModernHeroSection from "@/components/wedding-site/ModernHeroSection";
import CountdownSection from "@/components/wedding-site/CountdownSection";
import OurStorySection from "@/components/wedding-site/OurStorySection";
import GallerySection from "@/components/wedding-site/GallerySection";
import EventDetailsSection from "@/components/wedding-site/EventDetailsSection";
import BridesmaidsSection from "@/components/wedding-site/BridesmaidsSection";
import GiftListSection from "@/components/wedding-site/GiftListSection";
import RSVPSection from "@/components/wedding-site/RSVPSection";
import MessagesSection from "@/components/wedding-site/MessagesSection";
import FooterSection from "@/components/wedding-site/FooterSection";

interface SiteData {
  id: string;
  couple_names: string;
  wedding_date: string;
  template_name: string;
  ai_welcome_message: string;
  custom_content: any;
  quiz_answers: any;
  is_published: boolean;
  slug: string;
  views_count?: number;
}

interface ModernSiteRendererProps {
  siteData: SiteData;
}

const ModernSiteRenderer = ({ siteData }: ModernSiteRendererProps) => {
  const { setSiteId } = useModernVisualTokens();

  useEffect(() => {
    if (siteData?.id) {
      console.log('🏗️ Inicializando contexto moderno com siteId:', siteData.id);
      setSiteId(siteData.id);
    }
  }, [siteData?.id, setSiteId]);

  if (!siteData) return null;

  const formattedDate = format(new Date(siteData.wedding_date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR });

  return (
    <div className="min-h-screen bg-white">
      <ModernNavigation coupleNames={siteData.couple_names} />

      <ModernHeroSection
        coupleNames={siteData.couple_names}
        weddingDate={siteData.wedding_date}
        welcomeMessage={siteData.ai_welcome_message}
        templateName={siteData.template_name}
        quizAnswers={siteData.quiz_answers}
      />

      <CountdownSection weddingDate={siteData.wedding_date} />

      <OurStorySection
        coupleNames={siteData.couple_names}
        templateName={siteData.template_name}
        customContent={siteData.custom_content}
      />

      <GallerySection
        siteId={siteData.id}
        templateName={siteData.template_name}
        quizAnswers={siteData.quiz_answers}
      />

      <EventDetailsSection
        weddingDate={siteData.wedding_date}
        templateName={siteData.template_name}
        quizAnswers={siteData.quiz_answers}
      />

      <BridesmaidsSection />

      <GiftListSection siteId={siteData.id} />

      <RSVPSection
        siteId={siteData.id}
        weddingDate={siteData.wedding_date}
        templateName={siteData.template_name}
      />

      <MessagesSection siteId={siteData.id} />

      <FooterSection
        coupleNames={siteData.couple_names}
        weddingDate={formattedDate}
      />
    </div>
  );
};

export default ModernSiteRenderer;
