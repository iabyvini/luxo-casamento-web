
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Heart, Palette, Sparkles, CheckCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { QuizAnswers } from "@/types/quiz";
import { TEMPLATE_PROFILES, findBestTemplateProfile, calculateMoodScore, TemplateProfile } from "@/utils/templateProfiles";

const TemplateSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const { toast } = useToast();
  
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [recommendedTemplates, setRecommendedTemplates] = useState<{ template: TemplateProfile; score: number; reason: string }[]>([]);

  // Recuperar dados do quiz do estado da navegação
  const quizAnswers: QuizAnswers | null = location.state?.quizAnswers || null;

  useEffect(() => {
    if (!quizAnswers) {
      toast({
        title: "Erro",
        description: "Dados do quiz não encontrados. Redirecionando...",
        variant: "destructive"
      });
      navigate('/quiz');
      return;
    }

    generateRecommendations();
  }, [quizAnswers]);

  const generateRecommendations = () => {
    if (!quizAnswers) return;

    console.log('🎯 Gerando recomendações baseadas em:', quizAnswers);

    const moodScores = calculateMoodScore(quizAnswers);
    console.log('📊 Mood scores calculados:', moodScores);

    // Calcular score para todos os templates
    const scoredTemplates = TEMPLATE_PROFILES.map(profile => {
      let score = 0;
      let reasons: string[] = [];
      
      // Similaridade de mood
      Object.keys(moodScores).forEach(mood => {
        const userScore = moodScores[mood];
        const profileScore = profile.mood[mood as keyof typeof profile.mood];
        const similarity = 10 - Math.abs(userScore - profileScore);
        score += Math.max(0, similarity);
      });

      // Bônus por estilo
      if (profile.archetype.includes(quizAnswers.estilo)) {
        score += 25;
        reasons.push(`Perfeito para estilo ${quizAnswers.estilo}`);
      }

      // Bônus por local
      if (profile.archetype.includes(quizAnswers.local)) {
        score += 20;
        reasons.push(`Ideal para ${quizAnswers.local}`);
      }

      // Bônus por emoção
      if (quizAnswers.emotion && profile.emotions.toneAdjectives.some(adj => 
        adj.toLowerCase().includes(quizAnswers.emotion!.toLowerCase())
      )) {
        score += 15;
        reasons.push(`Transmite ${quizAnswers.emotion}`);
      }

      // Bônus por paleta de cores
      if (quizAnswers.color_palette && Array.isArray(quizAnswers.color_palette)) {
        const colorMatches = quizAnswers.color_palette.some(color => 
          profile.visual.primaryColor.includes(color.toLowerCase()) ||
          profile.visual.secondaryColor.includes(color.toLowerCase())
        );
        if (colorMatches) {
          score += 10;
          reasons.push('Cores compatíveis');
        }
      }

      const mainReason = reasons.length > 0 ? reasons[0] : 'Estilo compatível';

      return { template: profile, score, reason: mainReason };
    });

    // Ordenar por score e pegar os 4 melhores
    const top4 = scoredTemplates
      .sort((a, b) => b.score - a.score)
      .slice(0, 4);

    console.log('🏆 Top 4 templates recomendados:', top4);
    setRecommendedTemplates(top4);
  };

  const handleSelectTemplate = async (templateProfile: TemplateProfile) => {
    if (!user || !quizAnswers) {
      toast({
        title: "Erro",
        description: "Usuário ou dados do quiz não encontrados",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    setSelectedTemplate(templateProfile.id);

    try {
      const slug = generateSlug(quizAnswers.nomes, quizAnswers.data_casamento);
      const welcomeMessage = `Bem-vindos ao nosso site de casamento! Estamos muito felizes em compartilhar este momento especial com vocês. Confirme sua presença e deixe seu carinho para nós!`;

      console.log('🎨 Template selecionado:', templateProfile.name);
      console.log('📤 Criando site com template:', templateProfile);

      const { data, error } = await supabase
        .from('wedding_sites')
        .insert({
          user_id: user.id,
          slug,
          couple_names: quizAnswers.nomes,
          wedding_date: quizAnswers.data_casamento,
          template_name: templateProfile.name,
          quiz_answers: quizAnswers as any,
          ai_welcome_message: welcomeMessage,
          custom_content: {
            hero: {
              title: quizAnswers.nomes,
              subtitle: `${new Date(quizAnswers.data_casamento).toLocaleDateString('pt-BR')}`,
              message: welcomeMessage
            },
            template_profile: templateProfile
          },
          is_published: false
        })
        .select()
        .single();

      if (error) throw error;

      console.log('✅ Site criado com sucesso:', data);

      toast({
        title: "Site criado com sucesso!",
        description: `Template "${templateProfile.name}" aplicado ao seu site.`,
      });

      navigate(`/editor/${data.id}`);

    } catch (error: any) {
      console.error('❌ Erro ao criar site:', error);
      toast({
        title: "Erro ao criar site",
        description: error.message || "Não foi possível criar seu site. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      setSelectedTemplate(null);
    }
  };

  const generateSlug = (coupleNames: string, weddingDate: string) => {
    const names = coupleNames.toLowerCase()
      .replace(/[^a-z0-9\s&-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/&/g, 'e');
    
    const year = new Date(weddingDate).getFullYear();
    const timestamp = Date.now().toString().slice(-4);
    
    return `${names}-${year}-${timestamp}`;
  };

  const getRecommendationBadge = (index: number) => {
    switch (index) {
      case 0:
        return { text: "Perfeito para vocês", variant: "default" as const, icon: Sparkles };
      case 1:
        return { text: "Altamente compatível", variant: "secondary" as const, icon: Heart };
      case 2:
        return { text: "Boa opção", variant: "outline" as const, icon: CheckCircle };
      default:
        return { text: "Alternativa", variant: "outline" as const, icon: Palette };
    }
  };

  if (!quizAnswers) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brown-50 to-gold-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-brown-600 mb-4">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brown-50 to-gold-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/quiz')}
            className="text-brown-600 hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Quiz
          </Button>
          
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-brown-200 rounded-full px-4 py-2">
              <Sparkles className="h-4 w-4 text-accent" fill="currentColor" />
              <span className="text-sm font-medium text-brown-700">
                Templates Recomendados
              </span>
            </div>
          </div>
          
          <div className="w-24"></div> {/* Spacer for balance */}
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold gradient-text mb-4">
            Escolha o estilo ideal para o seu site
          </h1>
          <p className="text-xl text-brown-600 max-w-2xl mx-auto">
            Baseado nas suas respostas, selecionamos os templates que mais combinam com o estilo do casal {quizAnswers.nomes}
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {recommendedTemplates.map((item, index) => {
            const { template } = item;
            const badge = getRecommendationBadge(index);
            const BadgeIcon = badge.icon;
            
            return (
              <Card key={template.id} className="template-card group overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant={badge.variant} className="mb-2">
                      <BadgeIcon className="h-3 w-3 mr-1" />
                      {badge.text}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold text-brown-800">
                    {template.name}
                  </CardTitle>
                  <p className="text-brown-600 text-sm">
                    {item.reason}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Template Preview */}
                  <div 
                    className="h-48 rounded-lg border-2 border-brown-200 flex items-center justify-center relative overflow-hidden"
                    style={{ background: template.visual.backgroundGradient }}
                  >
                    <div className="text-center p-4">
                      <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: template.typography.headingFont }}>
                        {quizAnswers.nomes}
                      </h3>
                      <p className="text-white/90 text-sm mb-3">
                        {new Date(quizAnswers.data_casamento).toLocaleDateString('pt-BR')}
                      </p>
                      <div className="flex justify-center space-x-2">
                        {template.decorations.heroElements.slice(0, 3).map((element, idx) => (
                          <div key={idx} className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                            <Heart className="h-3 w-3 text-white" fill="currentColor" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Template Details */}
                  <div className="space-y-4">
                    {/* Color Palette */}
                    <div>
                      <h4 className="text-sm font-semibold text-brown-700 mb-2">Paleta de Cores:</h4>
                      <div className="flex space-x-2">
                        <div
                          className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                          style={{ backgroundColor: template.visual.primaryColor }}
                          title="Cor Principal"
                        />
                        <div
                          className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                          style={{ backgroundColor: template.visual.secondaryColor }}
                          title="Cor Secundária"
                        />
                        <div
                          className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                          style={{ backgroundColor: template.visual.accentColor }}
                          title="Cor de Destaque"
                        />
                      </div>
                    </div>

                    {/* Typography */}
                    <div>
                      <h4 className="text-sm font-semibold text-brown-700 mb-2">Tipografia:</h4>
                      <div className="text-sm text-brown-600">
                        <span style={{ fontFamily: template.typography.headingFont, fontWeight: template.typography.headingWeight }}>
                          {template.typography.headingFont}
                        </span> + {template.typography.bodyFont}
                      </div>
                    </div>

                    {/* Mood Tags */}
                    <div>
                      <h4 className="text-sm font-semibold text-brown-700 mb-2">Características:</h4>
                      <div className="flex flex-wrap gap-1">
                        {template.emotions.toneAdjectives.slice(0, 3).map((adj, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {adj}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Select Button */}
                  <Button
                    onClick={() => handleSelectTemplate(template)}
                    disabled={isLoading}
                    className="w-full bg-gradient-luxury hover:opacity-90 text-white"
                  >
                    {isLoading && selectedTemplate === template.id ? (
                      <>Criando Site...</>
                    ) : (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Selecionar este Template
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Footer Info */}
        <div className="text-center mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-brown-800 mb-2">
              Não se preocupe com a escolha
            </h3>
            <p className="text-brown-600 text-sm">
              Todos os templates podem ser personalizados depois. Você poderá ajustar cores, 
              textos, fotos e muito mais no editor do seu site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelection;
