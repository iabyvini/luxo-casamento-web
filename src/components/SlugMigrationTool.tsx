
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { migrateAllSiteSlugs, SiteMigrationResult } from "@/utils/slugMigration";

const SlugMigrationTool = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState<SiteMigrationResult[]>([]);
  const { toast } = useToast();

  const runMigration = async () => {
    setIsRunning(true);
    try {
      const migrationResults = await migrateAllSiteSlugs();
      setResults(migrationResults);
      
      const successCount = migrationResults.filter(r => r.success).length;
      const totalCount = migrationResults.length;
      
      toast({
        title: "Migração concluída",
        description: `${successCount}/${totalCount} sites atualizados com sucesso`,
      });
    } catch (error: any) {
      toast({
        title: "Erro na migração",
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
          Correção de Slugs
        </CardTitle>
        <CardDescription>
          Esta ferramenta corrige os slugs dos sites que foram gerados com problemas de acentuação.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button
          onClick={runMigration}
          disabled={isRunning}
          className="w-full"
        >
          {isRunning ? (
            <>
              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
              Executando migração...
            </>
          ) : (
            "Executar correção de slugs"
          )}
        </Button>

        {results.length > 0 && (
          <div className="space-y-2">
            <h3 className="font-medium">Resultados da migração:</h3>
            {results.map((result) => (
              <div
                key={result.siteId}
                className="flex items-center justify-between p-2 border rounded"
              >
                <div className="flex items-center gap-2">
                  {result.success ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                  )}
                  <span className="text-sm">
                    {result.oldSlug} → {result.newSlug}
                  </span>
                </div>
                <Badge variant={result.success ? "default" : "destructive"}>
                  {result.success ? "Sucesso" : "Erro"}
                </Badge>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SlugMigrationTool;
