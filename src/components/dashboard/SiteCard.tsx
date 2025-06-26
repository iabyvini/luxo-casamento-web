
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Edit, Copy, Trash2, BarChart3 } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

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

interface SiteCardProps {
  site: WeddingSite;
  onViewSite: (slug: string) => void;
  onCopyUrl: (slug: string) => void;
  onEditSite: (siteId: string) => void;
  onPublishToggle: (siteId: string, currentStatus: boolean) => void;
  onDuplicateSite: (site: WeddingSite) => void;
  onDeleteSite: (siteId: string) => void;
}

const SiteCard = ({ 
  site, 
  onViewSite, 
  onCopyUrl, 
  onEditSite, 
  onPublishToggle, 
  onDuplicateSite, 
  onDeleteSite 
}: SiteCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
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
              onClick={() => onViewSite(site.slug)}
              className="flex items-center gap-1"
            >
              <ExternalLink className="h-3 w-3" />
              Ver Site
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => onCopyUrl(site.slug)}
              className="flex items-center gap-1"
            >
              <Copy className="h-3 w-3" />
              Copiar URL
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => onEditSite(site.id)}
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
              onClick={() => onPublishToggle(site.id, site.is_published)}
              className="flex-1"
            >
              {site.is_published ? "Despublicar" : "Publicar"}
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => onDuplicateSite(site)}
              className="flex items-center gap-1"
            >
              <Copy className="h-3 w-3" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => onDeleteSite(site.id)}
              className="flex items-center gap-1 text-red-600 hover:text-red-700"
            >
              <Trash2 className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SiteCard;
