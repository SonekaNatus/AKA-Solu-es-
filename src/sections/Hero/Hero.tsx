import React from "react";
import { ArrowRight, ChevronRight, Zap, Trophy, ShieldCheck } from "lucide-react";
import { Button } from "../../components/UI/Button";
import "./Hero.css";

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="hero-section">
      <div className="container-wide hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <Zap size={14} className="hero-badge-icon" />
            <span>Foco total em vendas e conversão</span>
          </div>
          
          <h1 className="hero-title text-gradient">
            Landing Pages Premium que <br />
            <span className="text-gradient-purple">Vendem por Você</span> 24h
          </h1>
          
          <p className="hero-subtitle">
            Desenvolvemos páginas de vendas de altíssima conversão, com velocidade extrema, design exclusivo e estrutura sob medida para o seu negócio faturar mais.
          </p>

          <div className="hero-actions">
            <Button href="#contato" variant="primary">
              Começar Meu Projeto <ArrowRight size={18} />
            </Button>
            <Button href="#portfolio" variant="outline">
              Ver Landing Pages <ChevronRight size={18} />
            </Button>
          </div>

          <div className="hero-features">
            <div className="hero-feat-item">
              <Zap className="feat-icon" size={20} />
              <span>Velocidade Máxima (Pagespeed 90+)</span>
            </div>
            <div className="hero-feat-item">
              <Trophy className="feat-icon" size={20} />
              <span>Design 100% Exclusivo</span>
            </div>
            <div className="hero-feat-item">
              <ShieldCheck className="feat-icon" size={20} />
              <span>Copywriting Persuasivo</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          {/* Mockup de Navegador Interativo feito em CSS */}
          <div className="browser-mockup animate-float">
            <div className="browser-header">
              <div className="browser-address">akasolucoes.com.br/sua-landing-page</div>
            </div>
            <div className="browser-content">
              {/* Representação visual interna de uma landing page */}
              <div className="mock-hero">
                <div className="mock-logo"></div>
                <div className="mock-title"></div>
                <div className="mock-text"></div>
                <div className="mock-button"></div>
              </div>
              <div className="mock-grid">
                <div className="mock-card">
                  <div className="mock-card-icon"></div>
                  <div className="mock-card-title"></div>
                  <div className="mock-card-text"></div>
                </div>
                <div className="mock-card">
                  <div className="mock-card-icon"></div>
                  <div className="mock-card-title"></div>
                  <div className="mock-card-text"></div>
                </div>
                <div className="mock-card">
                  <div className="mock-card-icon"></div>
                  <div className="mock-card-title"></div>
                  <div className="mock-card-text"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
