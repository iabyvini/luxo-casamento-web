
import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, ExternalLink, Edit, Copy, Trash2, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface WeddingSite {
  id: string;
  slug: string;
  couple_names: string;
  wedding_date: string;
  template_name: string;
  is_published: boolean;
  views_count: number;
  created_at: string;
}

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const [sites, setSites] = useState<WeddingSite[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    fetchSites();
  }, []);

  const fetchSites = async () => {
    try {
      const { data, error } = await supabase
        .from('wedding_sites')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSites(data || []);
    } catch (error: any) {
      toast({
        title: "Erro ao carregar sites",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCreateSite = () => {
    navigate('/quiz');
  };

  const handleViewSite = (slug: string) => {
    window.open(`/${slug}`, '_blank');
  };

  const handleEditSite = (siteId: string) => {
    navigate(`/editor/${siteId}`);
  };

  const handleDuplicateSite = async (site: WeddingSite) => {
    try {
      const newSlug = `${site.slug}-copia-${Date.now()}`;
      const { error } = await supabase
        .from('wedding_sites')
        .insert({
          user_id: user?.id,
          slug: newSlug,
          couple_names: `${site.couple_names} (Cópia)`,
          wedding_date: site.wedding_date,
          template_name: site.template_name,
          quiz_answers: {},
          is_published: false,
        });

      if (error) throw error;
      
      toast({
        title: "Site duplicado!",
        description: "Uma cópia do seu site foi criada.",
      });
      
      fetchSites();
    } catch (error: any) {
      toast({
        title: "Erro ao duplicar site",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleDeleteSite = async (siteId: string) => {
    if (!confirm('Tem certeza que deseja excluir este site? Esta ação não pode ser desfeita.')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('wedding_sites')
        .delete()
        .eq('id', siteId);

      if (error) throw error;
      
      toast({
        title: "Site excluído",
        description: "O site foi removido com sucesso.",
      });
      
      fetchSites();
    } catch (error: any) {
      toast({
        title: "Erro ao excluir site",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Meus Sites de Casamento</h1>
            <p className="text-gray-600">Bem-vindo, {user?.email}</p>
          </div>
          <div className="flex items-center gap-4">
            <Button onClick={handleCreateSite} className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Criar Novo Site
            </Button>
            <Button variant="outline" onClick={signOut}>
              Sair
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {sites.length === 0 ? (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Nenhum site criado ainda
              </h2>
              <p className="text-gray-600 mb-6">
                Crie seu primeiro site de casamento personalizado em poucos minutos!
              </p>
              <Button onClick={handleCreateSite} size="lg" className="flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Criar Meu Primeiro Site
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sites.map((site) => (
              <Card key={site.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{site.couple_names}</CardTitle>
                      <CardDescription>
                        {format(new Date(site.wedding_date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                      </CardDescription>
                    </div>
                    <Badge variant={site.is_published ? "default" : "secondary"}>
                      {site.is_published ? "Publicado" : "Rascunho"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-sm text-gray-600">
                      <p>Template: {site.template_name}</p>
                      <p>URL: /{site.slug}</p>
                      <p className="flex items-center gap-1">
                        <BarChart3 className="h-3 w-3" />
                        {site.views_count} visualizações
                      </p>
                    </div>
                    
                    <div className="flex gap-2 flex-wrap">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleViewSite(site.slug)}
                        className="flex items-center gap-1"
                      >
                        <ExternalLink className="h-3 w-3" />
                        Ver
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEditSite(site.id)}
                        className="flex items-center gap-1"
                      >
                        <Edit className="h-3 w-3" />
                        Editar
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDuplicateSite(site)}
                        className="flex items-center gap-1"
                      >
                        <Copy className="h-3 w-3" />
                        Duplicar
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDeleteSite(site.id)}
                        className="flex items-center gap-1 text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-3 w-3" />
                        Excluir
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
