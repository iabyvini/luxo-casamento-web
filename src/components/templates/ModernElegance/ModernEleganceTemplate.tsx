
import { TemplateProps, BaseTemplate, TemplateConfig } from "../BaseTemplate";
import ModernEleganceHero from "./components/ModernEleganceHero";
import ModernEleganceNavigation from "./components/ModernEleganceNavigation";
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

const modernEleganceConfig: TemplateConfig = {
  id: 'modern-elegance',
  name: 'Modern Elegance',
  components: {
    Navigation: ModernEleganceNavigation,
    Hero: ModernEleganceHero,
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
      primary: '#1a1a1a',
      secondary: '#f8f6f2',
      accent: '#b8860b',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8f6f2 100%)'
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

const ModernEleganceTemplate = (props: TemplateProps) => {
  return <BaseTemplate {...props} templateConfig={modernEleganceConfig} />;
};

export default ModernEleganceTemplate;
