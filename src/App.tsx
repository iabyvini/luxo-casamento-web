
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { VisualTokensProvider } from "@/contexts/VisualTokensContext";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Quiz from "./pages/Quiz";
import Preview from "./pages/Preview";
import Auth from "./pages/Auth";
import Editor from "./pages/Editor";
import Dashboard from "./pages/Dashboard";
import PublicSite from "./pages/PublicSite";
import NotFound from "./pages/NotFound";
import EmailConfirmed from "./pages/EmailConfirmed";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <VisualTokensProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/email-confirmed" element={<EmailConfirmed />} />
              <Route path="/site/:slug" element={<PublicSite />} />
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/quiz" element={
                <ProtectedRoute>
                  <Quiz />
                </ProtectedRoute>
              } />
              <Route path="/preview" element={
                <ProtectedRoute>
                  <Preview />
                </ProtectedRoute>
              } />
              <Route path="/editor/:siteId?" element={
                <ProtectedRoute>
                  <Editor />
                </ProtectedRoute>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </VisualTokensProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
