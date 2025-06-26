
import { TemplateProps, BaseTemplate, TemplateConfig } from "../BaseTemplate";
import BohoFestivalNavigation from "./components/BohoFestivalNavigation";
import BohoFestivalHero from "./components/BohoFestivalHero";
import BohoCountdownSection from "./components/BohoCountdownSection";
import BohoCoupleSection from "./components/BohoCoupleSection";
import BohoStorySection from "./components/BohoStorySection";
import BohoGallerySection from "./components/BohoGallerySection";
import BohoEventDetailsSection from "./components/BohoEventDetailsSection";
import BohoDressCodeSection from "./components/BohoDressCodeSection";
import BohoGiftListSection from "./components/BohoGiftListSection";
import BohoRSVPSection from "./components/BohoRSVPSection";
import BohoMessagesSection from "./components/BohoMessagesSection";
import BohoFooterSection from "./components/BohoFooterSection";

const bohoFestivalConfig: TemplateConfig = {
  id: 'boho-festival',
  name: 'Boho Festival',
  components: {
    Navigation: BohoFestivalNavigation,
    Hero: BohoFestivalHero,
    Countdown: BohoCountdownSection,
    Couple: BohoCoupleSection,
    Story: BohoStorySection,
    Gallery: BohoGallerySection,
    EventDetails: BohoEventDetailsSection,
    Bridesmaids: BohoDressCodeSection,
    GiftList: BohoGiftListSection,
    RSVP: BohoRSVPSection,
    Messages: BohoMessagesSection,
    Footer: BohoFooterSection,
  },
  styles: {
    colors: {
      primary: '#CD853F', // Terracota
      secondary: '#F4A460', // Areia
      accent: '#87CEEB', // Azul céu
      background: 'linear-gradient(135deg, #FFF8DC 0%, #F0E68C 50%, #DEB887 100%)'
    },
    fonts: {
      heading: 'Dancing Script',
      body: 'Nunito',
      accent: 'Pacifico'
    },
    spacing: 'normal',
    animations: 'smooth'
  }
};

const BohoFestivalTemplate = (props: TemplateProps) => {
  return <BaseTemplate {...props} templateConfig={bohoFestivalConfig} />;
};

export default BohoFestivalTemplate;
