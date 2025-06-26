
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Save, Eye } from "lucide-react";
import SlugEditor from "@/components/SlugEditor";

interface SiteData {
  id: string;
  couple_names: string;
  wedding_date: string;
  template_name: string;
  is_published: boolean;
  slug: string;
  views_count?: number;
}

interface EditorSidebarProps {
  siteData: SiteData;
  onSlugChange: (newSlug: string) => void;
  onPreview: () => void;
  saving: boolean;
}

const EditorSidebar = ({ siteData, onSlugChange, onPreview, saving }: EditorSidebarProps) => {
  return (
    <div className="space-y-6">
      {/* URL Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Configurações da URL</CardTitle>
        </CardHeader>
        <CardContent>
          <SlugEditor
            coupleNames={siteData.couple_names}
            weddingDate={siteData.wedding_date}
            currentSlug={siteData.slug}
            onSlugChange={onSlugChange}
            disabled={saving}
          />
        </CardContent>
      </Card>

      {/* Site Status */}
      <Card>
        <CardHeader>
          <CardTitle>Status do Site</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Status</span>
            <Badge variant={siteData.is_published ? "default" : "secondary"}>
              {siteData.is_published ? 'Publicado' : 'Rascunho'}
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Visualizações</span>
            <span className="text-sm text-gray-600">
              {siteData.views_count || 0}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Template</span>
            <span className="text-sm text-gray-600">
              {siteData.template_name}
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Ações Rápidas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button variant="outline" className="w-full" onClick={onPreview}>
            <Eye className="h-4 w-4 mr-2" />
            Visualizar Site
          </Button>
          <Button variant="outline" className="w-full">
            <Save className="h-4 w-4 mr-2" />
            Exportar Configurações
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditorSidebar;
