
import React from 'react';
import { PreviewData } from '@/types/quiz';

export interface TemplateProps {
  siteData: PreviewData;
  siteId?: string;
}

export interface TemplateConfig {
  id: string;
  name: string;
  components: Record<string, React.ComponentType<any>>;
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
      accent: string;
    };
    spacing: string;
    animations: string;
  };
}

interface BaseTemplateProps extends TemplateProps {
  templateConfig: TemplateConfig;
}

export const BaseTemplate: React.FC<BaseTemplateProps> = ({ 
  siteData, 
  siteId, 
  templateConfig 
}) => {
  const {
    Navigation,
    Hero,
    Countdown,
    Couple,
    Story,
    Gallery,
    EventDetails,
    Bridesmaids,
    GiftList,
    RSVP,
    Messages,
    Footer,
  } = templateConfig.components;

  return (
    <div className={`template-${templateConfig.id}`}>
      <Navigation siteData={siteData} />
      <Hero siteData={siteData} />
      <Countdown siteData={siteData} />
      <Couple siteData={siteData} />
      <Story siteData={siteData} />
      <Gallery siteData={siteData} />
      <EventDetails siteData={siteData} />
      <Bridesmaids siteData={siteData} />
      <GiftList siteData={siteData} />
      <RSVP siteData={siteData} />
      <Messages siteData={siteData} />
      <Footer siteData={siteData} />
    </div>
  );
};
