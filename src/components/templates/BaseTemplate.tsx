
import { ReactNode } from "react";
import { PreviewData } from "@/types/quiz";

export interface TemplateProps {
  siteData: PreviewData;
  siteId?: string;
}

export interface TemplateComponents {
  Navigation: React.ComponentType<any>;
  Hero: React.ComponentType<any>;
  Countdown: React.ComponentType<any>;
  Couple: React.ComponentType<any>;
  Story: React.ComponentType<any>;
  Gallery: React.ComponentType<any>;
  EventDetails: React.ComponentType<any>;
  Bridesmaids: React.ComponentType<any>;
  GiftList: React.ComponentType<any>;
  RSVP: React.ComponentType<any>;
  Messages: React.ComponentType<any>;
  Footer: React.ComponentType<any>;
}

export interface TemplateConfig {
  id: string;
  name: string;
  components: TemplateComponents;
  styles: {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
    };
    fonts: {
      heading: string;
      body: string;
      accent?: string;
    };
    spacing: 'tight' | 'normal' | 'loose';
    animations: 'minimal' | 'smooth' | 'dynamic';
  };
}

export const BaseTemplate = ({ 
  siteData, 
  siteId = "preview", 
  templateConfig 
}: TemplateProps & { templateConfig: TemplateConfig }) => {
  const { components: Components } = templateConfig;

  return (
    <div className={`min-h-screen template-${templateConfig.id}`}>
      <Components.Navigation coupleNames={siteData.coupleNames} />
      
      <Components.Hero
        coupleNames={siteData.coupleNames}
        weddingDate={siteData.weddingDate}
        welcomeMessage={siteData.welcomeMessage}
        templateName={siteData.templateName}
        quizAnswers={siteData.quizAnswers}
      />

      <Components.Countdown weddingDate={siteData.weddingDate} />

      <Components.Couple coupleNames={siteData.coupleNames} />

      <Components.Story 
        coupleNames={siteData.coupleNames}
        templateName={siteData.templateName}
      />

      <Components.Gallery
        siteId={siteId}
        templateName={siteData.templateName}
        quizAnswers={siteData.quizAnswers}
      />

      <Components.EventDetails
        weddingDate={siteData.weddingDate}
        templateName={siteData.templateName}
        quizAnswers={siteData.quizAnswers}
      />

      <Components.Bridesmaids />

      <Components.GiftList siteId={siteId} />

      <Components.RSVP
        siteId={siteId}
        weddingDate={siteData.weddingDate}
        templateName={siteData.templateName}
      />

      <Components.Messages siteId={siteId} />

      <Components.Footer
        coupleNames={siteData.coupleNames}
        weddingDate={new Date(siteData.weddingDate).toLocaleDateString('pt-BR')}
      />
    </div>
  );
};
