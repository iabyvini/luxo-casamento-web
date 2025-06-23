
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import WeddingSiteNavigation from "@/components/wedding-site/WeddingSiteNavigation";
import HeroSection from "@/components/wedding-site/HeroSection";
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

interface ClassicSiteRendererProps {
  siteData: SiteData;
}

const ClassicSiteRenderer = ({ siteData }: ClassicSiteRendererProps) => {
  console.log('🎨 ClassicSiteRenderer iniciado com siteData:', {
    id: siteData?.id,
    couple_names: siteData?.couple_names,
    template_name: siteData?.template_name
  });

  if (!siteData) {
    console.log('❌ ClassicSiteRenderer: siteData não fornecido');
    return null;
  }

  let formattedDate = '';
  try {
    formattedDate = format(new Date(siteData.wedding_date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
  } catch (error) {
    console.error('❌ Erro ao formatar data:', error);
    formattedDate = siteData.wedding_date;
  }

  console.log('✅ ClassicSiteRenderer: Renderizando componentes');

  return (
    <div className="min-h-screen bg-white">
      <WeddingSiteNavigation coupleNames={siteData.couple_names} />

      <HeroSection
        coupleNames={siteData.couple_names}
        weddingDate={siteData.wedding_date}
        welcomeMessage={siteData.ai_welcome_message || "Bem-vindos ao nosso site de casamento!"}
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

export default ClassicSiteRenderer;
