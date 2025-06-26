
import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    console.error('🚨 ErrorBoundary capturou um erro:', error);
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('🚨 Detalhes do erro capturado:', error, errorInfo);
    
    // Aqui podemos registrar o erro no Supabase ou outro sistema de analytics
    // supabase.from('error_logs').insert({
    //   error_message: error.message,
    //   error_stack: error.stack,
    //   component_stack: errorInfo.componentStack,
    //   timestamp: new Date().toISOString()
    // });
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-pink-50">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <AlertTriangle className="w-16 h-16 text-amber-500 mx-auto mb-6" />
              
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                Ops! Algo deu errado
              </h1>
              
              <p className="text-gray-600 mb-6">
                Parece que algo deu errado na geração do seu site. Não se preocupe, vamos resolver isso!
              </p>

              <div className="space-y-3">
                <button
                  onClick={this.handleRetry}
                  className="w-full flex items-center justify-center px-6 py-3 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-colors"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Tentar Novamente
                </button>
                
                <a
                  href="/"
                  className="w-full flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Voltar ao Início
                </a>
              </div>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mt-6 text-left">
                  <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                    Detalhes do erro (dev)
                  </summary>
                  <pre className="mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto">
                    {this.state.error.stack}
                  </pre>
                </details>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
