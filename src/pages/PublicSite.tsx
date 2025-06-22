
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { VisualTokensProvider } from "@/contexts/VisualTokensContext";
import WeddingSiteNavigation from "@/components/wedding-site/WeddingSiteNavigation";
import HeroSection from "@/components/wedding-site/HeroSection";
import CountdownSection from "@/components/wedding-site/CountdownSection";
import CoupleSection from "@/components/wedding-site/CoupleSection";
import OurStorySection from "@/components/wedding-site/OurStorySection";
import GallerySection from "@/components/wedding-site/GallerySection";
import EventDetailsSection from "@/components/wedding-site/EventDetailsSection";
import GiftListSection from "@/components/wedding-site/GiftListSection";
import RSVPSection from "@/components/wedding-site/RSVPSection";
import MessagesSection from "@/components/wedding-site/MessagesSection";
import FooterSection from "@/components/wedding-site/FooterSection";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

const PublicSite = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [siteData, setSiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setError("Site não encontrado");
      setLoading(false);
      return;
    }

    const fetchSiteData = async () => {
      try {
        setLoading(true);
        
        // Increment view count
        const { error: incrementError } = await supabase.rpc('increment_view_count', { 
          site_slug: slug 
        });
        
        if (incrementError) {
          console.error('Error incrementing views:', incrementError);
        }

        // Fetch site data
        const { data, error } = await supabase
          .from('wedding_sites')
          .select('*')
          .eq('slug', slug)
          .eq('is_published', true)
          .single();

        if (error) {
          throw error;
        }

        if (!data) {
          setError("Site não encontrado ou não publicado");
          return;
        }

        setSiteData(data);
      } catch (error: any) {
        console.error('Error fetching site:', error);
        setError("Erro ao carregar o site");
      } finally {
        setLoading(false);
      }
    };

    fetchSiteData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="container mx-auto p-4">
          <Skeleton className="w-[280px] h-[32px] rounded-md mb-4" />
          <Skeleton className="w-[200px] h-[24px] rounded-md mb-2" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] mb-8">
            <div className="order-2 lg:order-1 flex justify-center">
              <Skeleton className="w-80 h-96 md:w-96 md:h-[480px] rounded-2xl" />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <Skeleton className="w-[350px] h-[60px] rounded-md" />
              <Skeleton className="w-[250px] h-[30px] rounded-md" />
              <Skeleton className="w-[300px] h-[120px] rounded-md" />
            </div>
          </div>
          
          <div className="space-y-8">
            <Skeleton className="w-full h-[200px] rounded-md" />
            <Skeleton className="w-full h-[300px] rounded-md" />
            <Skeleton className="w-full h-[400px] rounded-md" />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 flex items-center justify-center">
        <div className="container mx-auto p-4 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-red-500 mb-4">{error}</h1>
            <p className="text-gray-600 mb-6">
              {error === "Site não encontrado" ? 
                "Este site de casamento não foi encontrado ou ainda não foi publicado." :
                "Ocorreu um erro ao carregar o site. Por favor, tente novamente."
              }
            </p>
            <Button onClick={() => navigate('/')} className="bg-rose-500 hover:bg-rose-600">
              Voltar ao Início
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (!siteData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 flex items-center justify-center">
        <div className="container mx-auto p-4 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-gray-500 mb-4">Site não encontrado</h1>
            <p className="text-gray-600 mb-6">
              Este site de casamento não está disponível no momento.
            </p>
            <Button onClick={() => navigate('/')} className="bg-rose-500 hover:bg-rose-600">
              Voltar ao Início
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Prepare data for components
  const previewData = {
    coupleNames: siteData.couple_names,
    weddingDate: siteData.wedding_date,
    templateName: siteData.template_name,
    welcomeMessage: siteData.ai_welcome_message || "Seja bem-vindo(a) à celebração do nosso amor!",
    quizAnswers: siteData.quiz_answers
  };

  const customContent = siteData.custom_content || {};

  return (
    <VisualTokensProvider>
      <div className="min-h-screen bg-white">
        <WeddingSiteNavigation coupleNames={previewData.coupleNames} />
        
        <HeroSection
          coupleNames={previewData.coupleNames}
          weddingDate={previewData.weddingDate}
          welcomeMessage={customContent.hero?.message || previewData.welcomeMessage}
          templateName={previewData.templateName}
          quizAnswers={previewData.quizAnswers}
        />
        
        <CountdownSection weddingDate={previewData.weddingDate} />
        
        <CoupleSection coupleNames={previewData.coupleNames} />
        
        <OurStorySection 
          coupleNames={previewData.coupleNames}
          templateName={previewData.templateName}
          quizAnswers={previewData.quizAnswers}
          customContent={customContent.our_story}
        />
        
        <GallerySection 
          templateName={previewData.templateName}
          quizAnswers={previewData.quizAnswers}
        />
        
        <EventDetailsSection 
          weddingDate={previewData.weddingDate}
          templateName={previewData.templateName}
          quizAnswers={previewData.quizAnswers}
          customContent={customContent.event_details}
        />
        
        <GiftListSection customContent={customContent.gift_list} />
        
        <RSVPSection 
          weddingDate={previewData.weddingDate}
          templateName={previewData.templateName}
          siteId={siteData.id}
          customContent={customContent.rsvp}
        />
        
        <MessagesSection siteId={siteData.id} customContent={customContent.messages} />
        
        <FooterSection
          coupleNames={previewData.coupleNames}
          weddingDate={previewData.weddingDate}
        />
      </div>
    </VisualTokensProvider>
  );
};

export default PublicSite;
