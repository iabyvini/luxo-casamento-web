
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { VisualTokensProvider } from "@/contexts/VisualTokensContext";
import { ModernVisualTokensProvider } from "@/contexts/ModernVisualTokensContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Quiz from "./pages/Quiz";
import TemplateSelection from "./pages/TemplateSelection";
import TemplateGalleryPage from "./pages/TemplateGallery";
import Preview from "./pages/Preview";
import TemplatePreview from "./pages/TemplatePreview";
import Dashboard from "./pages/Dashboard";
import Editor from "./pages/Editor";
import PublicSite from "./pages/PublicSite";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  console.log('🚀 App inicializado com proteção de erro');
  
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AuthProvider>
              <VisualTokensProvider>
                <ModernVisualTokensProvider>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/templates" element={<TemplateGalleryPage />} />
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/template-selection" element={<TemplateSelection />} />
                    <Route path="/preview" element={<Preview />} />
                    <Route path="/template-preview/:templateId" element={<TemplatePreview />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/editor/:siteId" element={<Editor />} />
                    <Route path="/site/:slug" element={<PublicSite />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </ModernVisualTokensProvider>
              </VisualTokensProvider>
            </AuthProvider>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
