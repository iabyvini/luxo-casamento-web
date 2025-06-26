
import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardStats from '@/components/dashboard/DashboardStats';
import EmptyState from '@/components/dashboard/EmptyState';
import SiteCard from '@/components/dashboard/SiteCard';

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
      <DashboardHeader
        userEmail={user?.email}
        onCreateSite={handleCreateSite}
        onSignOut={signOut}
      />

      <main className="container mx-auto px-4 py-8">
        <DashboardStats stats={stats} />

        {sites.length === 0 ? (
          <EmptyState onCreateSite={handleCreateSite} />
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sites.map((site) => (
              <SiteCard
                key={site.id}
                site={site}
                onViewSite={handleViewSite}
                onCopyUrl={handleCopyUrl}
                onEditSite={handleEditSite}
                onPublishToggle={handlePublishToggle}
                onDuplicateSite={handleDuplicateSite}
                onDeleteSite={handleDeleteSite}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
