
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, Camera, Heart, Users, MapPin, Gift, MessageSquare } from "lucide-react";

interface EditorTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const EditorTabs = ({ activeTab, onTabChange }: EditorTabsProps) => {
  return (
    <TabsList className="grid w-full grid-cols-7">
      <TabsTrigger value="general" className="flex items-center gap-1">
        <Settings className="h-3 w-3" />
        Geral
      </TabsTrigger>
      <TabsTrigger value="couple" className="flex items-center gap-1">
        <Camera className="h-3 w-3" />
        Casal
      </TabsTrigger>
      <TabsTrigger value="story" className="flex items-center gap-1">
        <Heart className="h-3 w-3" />
        História
      </TabsTrigger>
      <TabsTrigger value="gallery" className="flex items-center gap-1">
        <Users className="h-3 w-3" />
        Galeria
      </TabsTrigger>
      <TabsTrigger value="event" className="flex items-center gap-1">
        <MapPin className="h-3 w-3" />
        Evento
      </TabsTrigger>
      <TabsTrigger value="gifts" className="flex items-center gap-1">
        <Gift className="h-3 w-3" />
        Presentes
      </TabsTrigger>
      <TabsTrigger value="messages" className="flex items-center gap-1">
        <MessageSquare className="h-3 w-3" />
        Mensagens
      </TabsTrigger>
    </TabsList>
  );
};

export default EditorTabs;
