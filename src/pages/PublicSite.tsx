import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { VisualTokensProvider } from "@/contexts/VisualTokensContext";
import WeddingSiteNavigation from "@/components/wedding-site/WeddingSiteNavigation";
import HeroSection from "@/components/wedding-site/HeroSection";
import CountdownSection from "@/components/wedding-site/CountdownSection";
import CoupleSection from "@/components/wedding-site/CoupleSection";
import OurStorySection from "@/components/wedding-site/OurStorySection";
import GallerySection from "@/components/wedding-site/GallerySection";
import EventDetailsSection from "@/components/wedding-site/EventDetailsSection";
import BridesmaidsSection from "@/components/wedding-site/BridesmaidsSection";
import GiftListSection from "@/components/wedding-site/GiftListSection";
import RSVPSection from "@/components/wedding-site/RSVPSection";
import MessagesSection from "@/components/wedding-site/MessagesSection";
import FooterSection from "@/components/wedding-site/FooterSection";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

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

const PublicSite = () => {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [siteData, setSiteData] = useState<SiteData | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (slug) {
      fetchSiteData();
    }
  }, [slug]);

  const fetchSiteData = async () => {
    try {
      const { data, error } = await supabase
        .from('wedding_sites')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          setNotFound(true);
        } else {
          throw error;
        }
        return;
      }

      setSiteData(data);
      
      // Increment view count
      try {
        await supabase.rpc('increment_view_count', {
          site_slug: slug
        });
      } catch (viewError) {
        console.error('Error incrementing view count:', viewError);
      }

    } catch (error: any) {
      console.error('Error loading site:', error);
      toast({
        title: "Erro ao carregar site",
        description: "Não foi possível carregar o site do casamento.",
        variant: "destructive",
      });
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-gold-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  if (notFound || !siteData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-gold-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Site não encontrado</h1>
          <p className="text-lg text-gray-600 mb-8">
            O site que você está procurando não existe ou não está publicado.
          </p>
          <a 
            href="/" 
            className="bg-rose-600 text-white px-6 py-3 rounded-full hover:bg-rose-700 transition-colors"
          >
            Voltar à Home
          </a>
        </div>
      </div>
    );
  }

  const formattedDate = format(new Date(siteData.wedding_date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR });

  return (
    <VisualTokensProvider>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <WeddingSiteNavigation 
          coupleNames={siteData.couple_names}
          templateName={siteData.template_name}
        />

        {/* Hero Section */}
        <HeroSection
          coupleNames={siteData.couple_names}
          weddingDate={siteData.wedding_date}
          aiWelcomeMessage={siteData.ai_welcome_message}
          templateName={siteData.template_name}
          quizAnswers={siteData.quiz_answers}
          customContent={siteData.custom_content?.hero}
        />

        {/* Countdown Section */}
        <CountdownSection
          weddingDate={siteData.wedding_date}
          templateName={siteData.template_name}
          customContent={siteData.custom_content?.countdown}
        />

        {/* Couple Section */}
        <CoupleSection
          coupleNames={siteData.couple_names}
          templateName={siteData.template_name}
          quizAnswers={siteData.quiz_answers}
          customContent={siteData.custom_content?.couple}
        />

        {/* Our Story Section */}
        <OurStorySection
          templateName={siteData.template_name}
          quizAnswers={siteData.quiz_answers}
          customContent={siteData.custom_content?.our_story}
        />

        {/* Gallery Section */}
        <GallerySection
          siteId={siteData.id}
          templateName={siteData.template_name}
          quizAnswers={siteData.quiz_answers}
          customContent={siteData.custom_content?.gallery}
        />

        {/* Event Details Section */}
        <EventDetailsSection
          weddingDate={siteData.wedding_date}
          templateName={siteData.template_name}
          quizAnswers={siteData.quiz_answers}
          customContent={siteData.custom_content?.event_details}
        />

        {/* Bridesmaids Section */}
        <BridesmaidsSection
          templateName={siteData.template_name}
          quizAnswers={siteData.quiz_answers}
          customContent={siteData.custom_content?.bridesmaids}
        />

        {/* Gift List Section */}
        <GiftListSection
          siteId={siteData.id}
          customContent={siteData.custom_content?.gift_list}
        />

        {/* RSVP Section */}
        <RSVPSection
          siteId={siteData.id}
          coupleNames={siteData.couple_names}
          customContent={siteData.custom_content?.rsvp}
        />

        {/* Messages Section */}
        <MessagesSection
          siteId={siteData.id}
          coupleNames={siteData.couple_names}
          customContent={siteData.custom_content?.messages}
        />

        {/* Footer Section */}
        <FooterSection
          coupleNames={siteData.couple_names}
          weddingDate={formattedDate}
          templateName={siteData.template_name}
        />
      </div>
    </VisualTokensProvider>
  );
};

export default PublicSite;
