
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart } from "lucide-react";
import { getTemplateById } from "@/data/templateLibrary";
import TemplateRenderer from "@/components/TemplateRenderer";
import SiteRenderer from "@/components/SiteRenderer";
import { PreviewData } from "@/types/quiz";

const TemplatePreview = () => {
  const navigate = useNavigate();
  const { templateId } = useParams<{ templateId: string }>();
  
  if (!templateId) {
    return <div>Template ID não encontrado</div>;
  }

  const template = getTemplateById(templateId);

  if (!template) {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center">
              <Button
                variant="ghost"
                onClick={() => navigate('/templates')}
                className="text-gray-600 hover:text-gray-800"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-24">
          <div className="text-center">
            <Heart className="w-24 h-24 text-rose-500 mx-auto mb-8" fill="currentColor" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Template não encontrado
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Este template ainda não está disponível. Nossos novos templates estão sendo preparados.
            </p>
            <Button
              onClick={() => navigate('/quiz')}
              size="lg"
              className="bg-gradient-luxury hover:opacity-90 text-white"
            >
              Criar Meu Site
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Dados de exemplo completos para preview
  const samplePreviewData: PreviewData = {
    coupleNames: "Isabella & Gabriel",
    weddingDate: "2024-12-20",
    welcomeMessage: "Com amor e alegria, convidamos vocês para celebrar conosco o início da nossa jornada como família. Este dia especial só ficará completo com a presença de pessoas queridas como vocês.",
    templateName: template.id,
    quizAnswers: {
      estilo: template.categories[0] || 'romantic',
      cores: template.categories.includes('tropical') ? 'vibrant' : 'soft',
      personalidade: 'elegant',
      local: 'garden',
      convidados: '100-150',
      tema: template.categories[0] || 'romantic',
      tom: 'formal',
      data_casamento: "2024-12-20",
      nomes: "Isabella & Gabriel"
    },
    customContent: {
      ourStory: "Nossa história começou em 2019, numa tarde de primavera no parque da cidade. Gabriel estava lendo um livro debaixo de uma árvore quando Isabella passou correndo e tropeçou bem na sua frente. Entre risos e pedidos de desculpa, nasceu nossa primeira conversa... e o resto é história! Desde então, vivemos aventuras incríveis juntos: viagens pelos fins de semana, noites de cinema em casa, jantares caseiros e sonhos compartilhados. Em 2023, durante uma viagem para as montanhas, Gabriel fez a proposta mais romântica que Isabella poderia imaginar, no topo de uma trilha ao pôr do sol.",
      giftList: [
        {
          id: "1",
          name: "Jogo de Panelas Antiaderente",
          description: "Conjunto completo para nossa nova cozinha",
          price: 350,
          image_url: "https://images.unsplash.com/photo-1556909501-f5664dc16d78?w=300&h=300&fit=crop",
          category: "Casa",
          is_purchased: false
        },
        {
          id: "2", 
          name: "Jogo de Lençóis King Size",
          description: "Lençóis de algodão 400 fios para nossa lua de mel",
          price: 280,
          image_url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=300&h=300&fit=crop",
          category: "Casa",
          is_purchased: true
        },
        {
          id: "3",
          name: "Cafeteira Express",
          description: "Para nossos cafés da manhã especiais",
          price: 450,
          image_url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop",
          category: "Eletrodomésticos",
          is_purchased: false
        }
      ],
      bridesmaids: [
        {
          name: "Ana Carolina",
          role: "Madrinha",
          photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
          description: "Melhor amiga desde a faculdade"
        },
        {
          name: "Mariana Santos",
          role: "Dama de Honra",
          photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
          description: "Prima querida e confidente"
        },
        {
          name: "Júlia Oliveira",
          role: "Dama de Honra",
          photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
          description: "Amiga de longa data"
        }
      ],
      groomsmen: [
        {
          name: "Pedro Henrique",
          role: "Padrinho",
          photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
          description: "Irmão e melhor amigo"
        },
        {
          name: "Lucas Silva",
          role: "Padrinho",
          photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
          description: "Amigo desde a infância"
        },
        {
          name: "Rafael Costa",
          role: "Padrinho",
          photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
          description: "Colega de trabalho e amigo"
        }
      ],
      galleryPhotos: [
        {
          id: "1",
          photo_url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
          caption: "Nosso primeiro encontro",
          category: "Início"
        },
        {
          id: "2",
          photo_url: "https://images.unsplash.com/photo-1511795267-9ba5e2b0b1a9?w=600&h=400&fit=crop",
          caption: "Viagem para as montanhas",
          category: "Viagens"
        },
        {
          id: "3",
          photo_url: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=600&h=400&fit=crop",
          caption: "Pedido de casamento",
          category: "Pedido"
        },
        {
          id: "4",
          photo_url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop",
          caption: "Ensaio pré-casamento",
          category: "Ensaio"
        },
        {
          id: "5",
          photo_url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop",
          caption: "Escolhendo os anéis",
          category: "Preparação"
        },
        {
          id: "6",
          photo_url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&h=400&fit=crop",
          caption: "Com as famílias",
          category: "Família"
        }
      ],
      eventDetails: {
        ceremony: {
          time: "16:00",
          location: "Igreja São Francisco",
          address: "Rua das Flores, 123 - Centro, São Paulo - SP"
        },
        reception: {
          time: "18:30",
          location: "Villa Sunset",
          address: "Av. dos Jardins, 456 - Jardins, São Paulo - SP"
        }
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header fixo */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate('/templates')}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
            
            <div className="text-center">
              <h1 className="font-semibold text-foreground">{template.name}</h1>
              <p className="text-sm text-muted-foreground">{template.description}</p>
            </div>
            
            <Button
              onClick={() => navigate('/quiz')}
              className="bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 text-primary-foreground"
            >
              Usar Template
            </Button>
          </div>
        </div>
      </div>

      {/* Preview do template */}
      <div className="pt-20">
        <TemplateRenderer template={template}>
          <SiteRenderer siteData={samplePreviewData} siteId="preview" />
        </TemplateRenderer>
      </div>
    </div>
  );
};

export default TemplatePreview;
