
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, CheckCircle, XCircle, Download } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface RSVPResponse {
  id: string;
  guest_name: string;
  will_attend: boolean;
  companion_count: number;
  message?: string;
  confirmed_at: string;
}

interface RSVPDashboardProps {
  siteId: string;
}

const RSVPDashboard = ({ siteId }: RSVPDashboardProps) => {
  const { toast } = useToast();
  const [responses, setResponses] = useState<RSVPResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (siteId) {
      fetchResponses();
    }
  }, [siteId]);

  const fetchResponses = async () => {
    try {
      const { data, error } = await supabase
        .from('rsvp_responses')
        .select('*')
        .eq('site_id', siteId)
        .order('confirmed_at', { ascending: false });

      if (error) throw error;
      setResponses(data || []);
    } catch (error: any) {
      toast({
        title: "Erro ao carregar confirmações",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const exportData = () => {
    const csvContent = [
      ['Nome do Convite', 'Comparecerá', 'Número de Convidados', 'Observação', 'Data de Confirmação'],
      ...responses.map(response => [
        response.guest_name,
        response.will_attend ? 'Sim' : 'Não',
        response.companion_count.toString(),
        response.message || '',
        new Date(response.confirmed_at).toLocaleString('pt-BR')
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'confirmacoes-rsvp.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const attendingResponses = responses.filter(r => r.will_attend);
  const notAttendingResponses = responses.filter(r => !r.will_attend);
  const totalGuests = attendingResponses.reduce((sum, r) => sum + r.companion_count + 1, 0);

  if (loading) {
    return <div className="text-center py-8">Carregando confirmações...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Dashboard de Confirmações</h3>
        <Button onClick={exportData} variant="outline" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Exportar CSV
        </Button>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="flex items-center p-6">
            <Users className="h-8 w-8 text-blue-600 mr-3" />
            <div>
              <p className="text-2xl font-bold">{responses.length}</p>
              <p className="text-gray-600 text-sm">Total de Respostas</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="flex items-center p-6">
            <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
            <div>
              <p className="text-2xl font-bold">{attendingResponses.length}</p>
              <p className="text-gray-600 text-sm">Confirmaram</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="flex items-center p-6">
            <XCircle className="h-8 w-8 text-red-600 mr-3" />
            <div>
              <p className="text-2xl font-bold">{notAttendingResponses.length}</p>
              <p className="text-gray-600 text-sm">Não Comparecerão</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="flex items-center p-6">
            <Users className="h-8 w-8 text-purple-600 mr-3" />
            <div>
              <p className="text-2xl font-bold">{totalGuests}</p>
              <p className="text-gray-600 text-sm">Total de Convidados</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lista de Confirmações */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Confirmações</CardTitle>
        </CardHeader>
        <CardContent>
          {responses.length === 0 ? (
            <p className="text-center text-gray-500 py-8">
              Nenhuma confirmação recebida ainda.
            </p>
          ) : (
            <div className="space-y-4">
              {responses.map((response) => (
                <div key={response.id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{response.guest_name}</h4>
                    <div className="flex items-center space-x-2">
                      <Badge variant={response.will_attend ? "default" : "destructive"}>
                        {response.will_attend ? "Comparecerá" : "Não comparecerá"}
                      </Badge>
                      <span className="text-sm text-gray-500">
                        {response.companion_count + 1} pessoa(s)
                      </span>
                    </div>
                  </div>
                  
                  {response.message && (
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Observação:</strong> {response.message}
                    </p>
                  )}
                  
                  <p className="text-xs text-gray-500">
                    Confirmado em: {new Date(response.confirmed_at).toLocaleString('pt-BR')}
                  </p>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default RSVPDashboard;
