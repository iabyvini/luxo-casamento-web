
import { TemplateProps, BaseTemplate, TemplateConfig } from "../BaseTemplate";
import DefaultNavigation from "./components/DefaultNavigation";
import DefaultHero from "./components/DefaultHero";
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

const defaultTemplateConfig: TemplateConfig = {
  id: 'default-template',
  name: 'Template Padrão',
  category: 'classic',
  description: 'Template padrão elegante',
  tags: ['elegante', 'clássico'],
  colors: ['#8B4513', '#DDA0DD', '#F0E68C'],
  fonts: {
    heading: 'Playfair Display',
    body: 'Inter',
    accent: 'Dancing Script'
  },
  sections: ['Hero', 'Couple', 'Event Details'],
  mood: ['elegant', 'classic'],
  tokens: {
    primaryColor: '#8B4513',
    secondaryColor: '#DDA0DD',
    accentColor: '#F0E68C',
    backgroundColor: '#F8F9FA',
    background: '#F8F9FA',
    textColor: '#1a1a1a',
    fontFamily: 'Inter, sans-serif',
    headingFont: 'Playfair Display, serif',
    borderRadius: '8px'
  },
  components: {
    Navigation: DefaultNavigation,
    Hero: DefaultHero,
    Countdown: CountdownSection,
    Couple: CoupleSection,
    Story: OurStorySection,
    Gallery: GallerySection,
    EventDetails: EventDetailsSection,
    Bridesmaids: BridesmaidsSection,
    GiftList: GiftListSection,
    RSVP: RSVPSection,
    Messages: MessagesSection,
    Footer: FooterSection,
  },
  styles: {
    colors: {
      primary: '#8B4513',
      secondary: '#DDA0DD',
      accent: '#F0E68C',
      background: 'linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)'
    },
    fonts: {
      heading: 'Playfair Display',
      body: 'Inter',
      accent: 'Dancing Script'
    },
    spacing: 'normal',
    animations: 'smooth'
  }
};

const DefaultTemplate = (props: TemplateProps) => {
  console.log('🛡️ Usando template de fallback padrão');
  
  return (
    <BaseTemplate {...props} templateConfig={defaultTemplateConfig}>
      <DefaultNavigation coupleNames={props.siteData.coupleNames} />
      <DefaultHero 
        coupleNames={props.siteData.coupleNames}
        weddingDate={props.siteData.weddingDate}
        welcomeMessage={props.siteData.welcomeMessage}
        templateName={props.siteData.templateName}
        quizAnswers={props.siteData.quizAnswers}
      />
      <CountdownSection siteData={props.siteData} siteId={props.siteId} />
      <CoupleSection siteData={props.siteData} siteId={props.siteId} />
      <OurStorySection siteData={props.siteData} siteId={props.siteId} />
      <GallerySection siteData={props.siteData} siteId={props.siteId} />
      <EventDetailsSection siteData={props.siteData} siteId={props.siteId} />
      <BridesmaidsSection siteData={props.siteData} siteId={props.siteId} />
      <GiftListSection siteData={props.siteData} siteId={props.siteId} />
      <RSVPSection siteData={props.siteData} siteId={props.siteId} />
      <MessagesSection siteData={props.siteData} siteId={props.siteId} />
      <FooterSection siteData={props.siteData} siteId={props.siteId} />
    </BaseTemplate>
  );
};

export default DefaultTemplate;
