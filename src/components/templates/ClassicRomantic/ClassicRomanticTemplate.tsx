
import { TemplateProps, BaseTemplate, TemplateConfig } from "../BaseTemplate";
import ClassicRomanticNavigation from "./components/ClassicRomanticNavigation";
import ClassicRomanticHero from "./components/ClassicRomanticHero";
import ClassicCountdownSection from "./components/ClassicCountdownSection";
import ClassicCoupleSection from "./components/ClassicCoupleSection";
import ClassicStorySection from "./components/ClassicStorySection";
import ClassicGallerySection from "./components/ClassicGallerySection";
import ClassicEventDetailsSection from "./components/ClassicEventDetailsSection";
import ClassicBridesmaidsSection from "./components/ClassicBridesmaidsSection";
import ClassicGiftListSection from "./components/ClassicGiftListSection";
import ClassicRSVPSection from "./components/ClassicRSVPSection";
import ClassicMessagesSection from "./components/ClassicMessagesSection";
import ClassicFooterSection from "./components/ClassicFooterSection";

const classicRomanticConfig: TemplateConfig = {
  id: 'classic-romantic',
  name: 'Clássico Romântico',
  components: {
    Navigation: ClassicRomanticNavigation,
    Hero: ClassicRomanticHero,
    Countdown: ClassicCountdownSection,
    Couple: ClassicCoupleSection,
    Story: ClassicStorySection,
    Gallery: ClassicGallerySection,
    EventDetails: ClassicEventDetailsSection,
    Bridesmaids: ClassicBridesmaidsSection,
    GiftList: ClassicGiftListSection,
    RSVP: ClassicRSVPSection,
    Messages: ClassicMessagesSection,
    Footer: ClassicFooterSection,
  },
  styles: {
    colors: {
      primary: '#D4AF37', // Dourado
      secondary: '#F8E8E8', // Rosa claro
      accent: '#8B4513', // Marrom suave
      background: 'linear-gradient(135deg, #FFFFFF 0%, #F8E8E8 50%, #F0F0F0 100%)'
    },
    fonts: {
      heading: 'Playfair Display',
      body: 'Crimson Text',
      accent: 'Dancing Script'
    },
    spacing: 'normal',
    animations: 'smooth'
  }
};

const ClassicRomanticTemplate = (props: TemplateProps) => {
  return <BaseTemplate {...props} templateConfig={classicRomanticConfig} />;
};

export default ClassicRomanticTemplate;
