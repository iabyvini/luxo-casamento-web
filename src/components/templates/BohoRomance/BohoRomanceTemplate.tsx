
import { TemplateProps, BaseTemplate, TemplateConfig } from "../BaseTemplate";
import BohoRomanceHero from "./components/BohoRomanceHero";
import BohoRomanceNavigation from "./components/BohoRomanceNavigation";
import { CountdownSection } from "@/components/wedding-site/CountdownSection";
import { CoupleSection } from "@/components/wedding-site/CoupleSection";
import { OurStorySection } from "@/components/wedding-site/OurStorySection";
import { GallerySection } from "@/components/wedding-site/GallerySection";
import { EventDetailsSection } from "@/components/wedding-site/EventDetailsSection";
import { BridesmaidsSection } from "@/components/wedding-site/BridesmaidsSection";
import { GiftListSection } from "@/components/wedding-site/GiftListSection";
import { RSVPSection } from "@/components/wedding-site/RSVPSection";
import { MessagesSection } from "@/components/wedding-site/MessagesSection";
import { FooterSection } from "@/components/wedding-site/FooterSection";

const bohoRomanceConfig: TemplateConfig = {
  id: 'boho-romance',
  name: 'Boho Romance',
  components: {
    Navigation: BohoRomanceNavigation,
    Hero: BohoRomanceHero,
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
      background: 'linear-gradient(135deg, #F0E68C 0%, #DDA0DD 30%, #8B4513 100%)'
    },
    fonts: {
      heading: 'Dancing Script',
      body: 'Inter',
      accent: 'Caveat'
    },
    spacing: 'loose',
    animations: 'dynamic'
  }
};

const BohoRomanceTemplate = (props: TemplateProps) => {
  return <BaseTemplate {...props} templateConfig={bohoRomanceConfig} />;
};

export default BohoRomanceTemplate;
