
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
  return <BaseTemplate {...props} templateConfig={defaultTemplateConfig} />;
};

export default DefaultTemplate;
