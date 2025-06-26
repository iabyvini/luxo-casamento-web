
import { TemplateProps, BaseTemplate, TemplateConfig } from "../BaseTemplate";
import EditorialModernNavigation from "./components/EditorialModernNavigation";
import EditorialModernHero from "./components/EditorialModernHero";
import EditorialCountdownSection from "./components/EditorialCountdownSection";
import EditorialCoupleSection from "./components/EditorialCoupleSection";
import EditorialManifestoSection from "./components/EditorialManifestoSection";
import EditorialGallerySection from "./components/EditorialGallerySection";
import EditorialEventDetailsSection from "./components/EditorialEventDetailsSection";
import EditorialPlaylistSection from "./components/EditorialPlaylistSection";
import EditorialGiftListSection from "./components/EditorialGiftListSection";
import EditorialRSVPSection from "./components/EditorialRSVPSection";
import EditorialMessagesSection from "./components/EditorialMessagesSection";
import EditorialFooterSection from "./components/EditorialFooterSection";

const editorialModernConfig: TemplateConfig = {
  id: 'editorial-modern',
  name: 'Editorial Moderno',
  components: {
    Navigation: EditorialModernNavigation,
    Hero: EditorialModernHero,
    Countdown: EditorialCountdownSection,
    Couple: EditorialCoupleSection,
    Story: EditorialManifestoSection,
    Gallery: EditorialGallerySection,
    EventDetails: EditorialEventDetailsSection,
    Bridesmaids: EditorialPlaylistSection,
    GiftList: EditorialGiftListSection,
    RSVP: EditorialRSVPSection,
    Messages: EditorialMessagesSection,
    Footer: EditorialFooterSection,
  },
  styles: {
    colors: {
      primary: '#000000', // Preto
      secondary: '#FFFFFF', // Branco
      accent: '#D4C5B9', // Nude
      background: 'linear-gradient(180deg, #FFFFFF 0%, #F8F6F3 100%)'
    },
    fonts: {
      heading: 'Inter',
      body: 'Inter',
      accent: 'Cormorant Garamond'
    },
    spacing: 'loose',
    animations: 'minimal'
  }
};

const EditorialModernTemplate = (props: TemplateProps) => {
  return <BaseTemplate {...props} templateConfig={editorialModernConfig} />;
};

export default EditorialModernTemplate;
