
import { Gift, ExternalLink, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface GiftListSectionProps {
  customContent?: {
    enabled?: boolean;
    title?: string;
    message?: string;
    pix_key?: string;
    pix_name?: string;
    stores?: Array<{
      name: string;
      url: string;
      description: string;
    }>;
  };
}

const GiftListSection = ({ customContent }: GiftListSectionProps) => {
  const { toast } = useToast();

  // Se a seção está desabilitada, não renderizar
  if (customContent?.enabled === false) {
    return null;
  }

  const sectionTitle = customContent?.title || "Lista de Presentes";
  const sectionMessage = customContent?.message || "Sua presença já é o melhor presente, mas se quiserem nos presentear, ficamos muito gratos! Aqui estão algumas opções:";
  const pixKey = customContent?.pix_key;
  const pixName = customContent?.pix_name;
  const stores = customContent?.stores || [];

  // Lojas padrão se não houver lojas customizadas
  const defaultStores = [
    {
      name: "Magazine Luiza",
      description: "Lista principal com itens para casa",
      url: "#",
      icon: "🏠"
    },
    {
      name: "Americanas",
      description: "Eletrodomésticos e decoração",
      url: "#",
      icon: "⚡"
    }
  ];

  const displayStores = stores.length > 0 ? stores : defaultStores;

  const copyPixKey = () => {
    if (pixKey) {
      navigator.clipboard.writeText(pixKey);
      toast({
        title: "Chave PIX copiada!",
        description: "A chave PIX foi copiada para a área de transferência.",
      });
    }
  };

  return (
    <section id="gifts" className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Gift className="h-4 w-4" />
            <span>Lista de Presentes</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
            {sectionTitle}
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            {sectionMessage}
          </p>
        </div>

        {/* Stores */}
        {displayStores.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {displayStores.map((store, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">
                  {(store as any).icon || "🎁"}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {store.name}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {store.description}
                </p>
                
                {store.url && store.url !== "#" && (
                  <Button 
                    className="w-full bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors inline-flex items-center justify-center"
                    onClick={() => window.open(store.url, '_blank')}
                  >
                    <span>Ver Lista</span>
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                )}
              </div>
            ))}
          </div>
        )}

        {/* PIX Section */}
        {pixKey && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="text-4xl mb-4">🌙</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {pixName ? `PIX - ${pixName}` : "Chave PIX para Lua de Mel"}
                </h3>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-4 flex items-center justify-between">
                  <code className="text-gray-700 font-mono text-sm flex-1">
                    {pixKey}
                  </code>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={copyPixKey}
                    className="ml-2"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                
                <p className="text-gray-600 text-sm">
                  Com muito carinho, estamos juntando uma graninha para nossa lua de mel. 
                  Qualquer valor será recebido com muito amor! 💕
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GiftListSection;
