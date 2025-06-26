
import React from "react";
import { TemplateProps } from "../BaseTemplate";
import ToscanaHeroSection from "./components/ToscanaHeroSection";
import ToscanaHistoriaSection from "./components/ToscanaHistoriaSection";
import ToscanaPadrinhosSection from "./components/ToscanaPadrinhosSection";
import ToscanaCronogramaSection from "./components/ToscanaCronogramaSection";
import ToscanaRSVPSection from "./components/ToscanaRSVPSection";
import ToscanaGaleriaSection from "./components/ToscanaGaleriaSection";
import ToscanaFooterSection from "./components/ToscanaFooterSection";

const ToscanaEleganteTemplate = ({ siteData, siteId = "preview" }: TemplateProps) => {
  return (
    <div className="min-h-screen template-toscana-elegante">
      {/* Template Styles */}
      <style>{`
        .template-toscana-elegante {
          font-family: 'Playfair Display', serif;
          color: #000000;
          background: #FFFFFF;
        }
        
        .template-toscana-elegante h1, 
        .template-toscana-elegante h2, 
        .template-toscana-elegante h3 {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
        }
        
        .template-toscana-elegante p,
        .template-toscana-elegante span {
          font-family: 'Inter', sans-serif;
          line-height: 1.6;
        }
        
        .toscana-accent {
          color: #8B8B8B;
        }
        
        .toscana-divider {
          width: 100px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #000000, transparent);
          margin: 2rem auto;
        }
        
        .toscana-card {
          background: #F5F5F5;
          border: 1px solid #E5E5E5;
          transition: all 0.3s ease;
        }
        
        .toscana-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }
      `}</style>

      <ToscanaHeroSection
        coupleNames={siteData.coupleNames}
        weddingDate={siteData.weddingDate}
        welcomeMessage={siteData.welcomeMessage}
      />

      <ToscanaHistoriaSection coupleNames={siteData.coupleNames} />

      <ToscanaPadrinhosSection />

      <ToscanaGaleriaSection siteId={siteId} />

      <ToscanaCronogramaSection weddingDate={siteData.weddingDate} />

      <ToscanaRSVPSection siteId={siteId} weddingDate={siteData.weddingDate} />

      <ToscanaFooterSection 
        coupleNames={siteData.coupleNames} 
        weddingDate={new Date(siteData.weddingDate).toLocaleDateString('pt-BR')} 
      />
    </div>
  );
};

export default ToscanaEleganteTemplate;
