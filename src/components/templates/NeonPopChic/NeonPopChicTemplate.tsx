
import { TemplateProps, BaseTemplate, TemplateConfig } from "../BaseTemplate";
import NeonPopChicNavigation from "./components/NeonPopChicNavigation";
import NeonPopChicHero from "./components/NeonPopChicHero";
import NeonCountdownSection from "./components/NeonCountdownSection";
import NeonCoupleSection from "./components/NeonCoupleSection";
import NeonTimelineSection from "./components/NeonTimelineSection";
import NeonGallerySection from "./components/NeonGallerySection";
import NeonEventDetailsSection from "./components/NeonEventDetailsSection";
import NeonTriviaSection from "./components/NeonTriviaSection";
import NeonGiftListSection from "./components/NeonGiftListSection";
import NeonRSVPSection from "./components/NeonRSVPSection";
import NeonMessagesSection from "./components/NeonMessagesSection";
import NeonFooterSection from "./components/NeonFooterSection";

const neonPopChicConfig: TemplateConfig = {
  id: 'neon-pop-chic',
  name: 'Neon Pop Chic',
  components: {
    Navigation: NeonPopChicNavigation,
    Hero: NeonPopChicHero,
    Countdown: NeonCountdownSection,
    Couple: NeonCoupleSection,
    Story: NeonTimelineSection,
    Gallery: NeonGallerySection,
    EventDetails: NeonEventDetailsSection,
    Bridesmaids: NeonTriviaSection,
    GiftList: NeonGiftListSection,
    RSVP: NeonRSVPSection,
    Messages: NeonMessagesSection,
    Footer: NeonFooterSection,
  },
  styles: {
    colors: {
      primary: '#FF1493', // Rosa neon
      secondary: '#000000', // Preto
      accent: '#8A2BE2', // Roxo
      background: 'linear-gradient(135deg, #000000 0%, #1a0033 50%, #000000 100%)'
    },
    fonts: {
      heading: 'Orbitron',
      body: 'Rajdhani',
      accent: 'Audiowide'
    },
    spacing: 'tight',
    animations: 'dynamic'
  }
};

const NeonPopChicTemplate = (props: TemplateProps) => {
  return <BaseTemplate {...props} templateConfig={neonPopChicConfig} />;
};

export default NeonPopChicTemplate;
