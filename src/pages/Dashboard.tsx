import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, ExternalLink, Edit, Copy, Trash2, BarChart3, Eye, DollarSign } from 'lucide-react';
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
  custom_content?: any;
}

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const [sites, setSites] = useState<WeddingSite[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ totalViews: 0, totalSites: 0, publishedSites: 0 });
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
      
      // Calcular estatísticas
      const totalViews = data?.reduce((sum, site) => sum + (site.views_count || 0), 0) || 0;
      const publishedSites = data?.filter(site => site.is_published).length || 0;
      
      setStats({
        totalViews,
        totalSites: data?.length || 0,
        publishedSites
      });
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
    navigate('/templates');
  };

  const handleViewSite = (slug: string) => {
    // URL única real do site
    const siteUrl = `${window.location.origin}/site/${slug}`;
    window.open(siteUrl, '_blank');
  };

  const handleEditSite = (siteId: string) => {
    navigate(`/editor/${siteId}`);
  };

  const handlePublishToggle = async (siteId: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('wedding_sites')
        .update({ is_published: !currentStatus })
        .eq('id', siteId);

      if (error) throw error;
      
      toast({
        title: !currentStatus ? "Site publicado!" : "Site despublicado",
        description: !currentStatus ? "Seu site está agora acessível publicamente" : "Seu site foi removido do ar",
      });
      
      fetchSites();
    } catch (error: any) {
      toast({
        title: "Erro ao alterar status",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleCopyUrl = (slug: string) => {
    const siteUrl = `${window.location.origin}/site/${slug}`;
    navigator.clipboard.writeText(siteUrl);
    toast({
      title: "URL copiada!",
      description: "Link do seu site foi copiado para a área de transferência",
    });
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
          custom_content: site.custom_content || {},
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
          <div className="grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
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
            <h1 className="text-2xl font-bold text-gray-900">Dashboard - Casamento Luxo</h1>
            <p className="text-gray-600">Bem-vindo, {user?.email}</p>
          </div>
          <div className="flex items-center gap-4">
            <Button onClick={handleCreateSite} className="flex items-center gap-2 bg-rose-500 hover:bg-rose-600">
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
        {/* Estatísticas */}
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Sites</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalSites}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sites Publicados</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.publishedSites}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Visualizações</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalViews}</div>
            </CardContent>
          </Card>
        </div>

        {sites.length === 0 ? (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Nenhum site criado ainda
              </h2>
              <p className="text-gray-600 mb-6">
                Escolha entre 50 templates únicos e crie seu site de casamento personalizado!
              </p>
              <Button onClick={handleCreateSite} size="lg" className="flex items-center gap-2 bg-rose-500 hover:bg-rose-600">
                <Plus className="h-5 w-5" />
                Explorar Templates
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
                      <p className="text-xs text-blue-600 break-all">
                        URL: casamentoluxo.com/site/{site.slug}
                      </p>
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
                        Ver Site
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleCopyUrl(site.slug)}
                        className="flex items-center gap-1"
                      >
                        <Copy className="h-3 w-3" />
                        Copiar URL
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
                    </div>

                    <div className="flex gap-2 flex-wrap pt-2 border-t">
                      <Button
                        size="sm"
                        variant={site.is_published ? "destructive" : "default"}
                        onClick={() => handlePublishToggle(site.id, site.is_published)}
                        className="flex-1"
                      >
                        {site.is_published ? "Despublicar" : "Publicar"}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDuplicateSite(site)}
                        className="flex items-center gap-1"
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDeleteSite(site.id)}
                        className="flex items-center gap-1 text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-3 w-3" />
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
