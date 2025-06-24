
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { fixSpecificSlugs } from "@/utils/slugFixing";

const SlugFixTool = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState<string[]>([]);
  const { toast } = useToast();

  const runFix = async () => {
    setIsRunning(true);
    setResults([]);
    
    try {
      console.log('🔧 Iniciando correção de slugs específicos...');
      await fixSpecificSlugs();
      
      setResults([
        'gabriela-e-felipe-2026-4963 → gabriela-e-felipe-2026',
        'flora-e-vincius-2026-8293 → flora-e-vinicius-2026',
        'ana-e-joo-2026-8304 → ana-e-joao-2026'
      ]);
      
      toast({
        title: "Correção concluída",
        description: "Slugs corrigidos com sucesso!",
      });
    } catch (error: any) {
      console.error('❌ Erro na correção:', error);
      toast({
        title: "Erro na correção",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <RefreshCw className="h-5 w-5" />
          Correção de Slugs Específicos
        </CardTitle>
        <CardDescription>
          Corrige os slugs dos 3 sites identificados com problemas de acentuação.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button
          onClick={runFix}
          disabled={isRunning}
          className="w-full"
        >
          {isRunning ? (
            <>
              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
              Corrigindo slugs...
            </>
          ) : (
            "Corrigir Slugs dos Sites"
          )}
        </Button>

        {results.length > 0 && (
          <div className="space-y-2">
            <h3 className="font-medium">Correções realizadas:</h3>
            {results.map((result, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 border rounded"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">{result}</span>
                </div>
                <Badge variant="default">Corrigido</Badge>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SlugFixTool;
