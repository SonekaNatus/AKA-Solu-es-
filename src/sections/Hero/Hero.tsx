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
            <span>Proposta personalizada em ate 2 horas</span>
          </div>
          
          <h1 className="hero-title text-gradient">
            Landing Page + Criativos + Trafego:{" "}
            <span className="text-gradient-purple">tudo para vender mais</span>
          </h1>
          
          <p className="hero-subtitle">
            Entregamos o pacote completo para sua empresa escalar vendas sem depender de varios fornecedores. Tudo pronto para rodar, com foco real em conversao.
          </p>

          <div className="hero-actions">
            <Button href="#contato" variant="primary">
              Quero o Combo Completo <ArrowRight size={18} />
            </Button>
            <Button href="#portfolio" variant="outline">
              Ver Projetos Reais <ChevronRight size={18} />
            </Button>
          </div>

          <p className="hero-microcopy">Sem compromisso - diagnostico estrategico gratuito</p>

          <div className="hero-features">
            <div className="hero-feat-item">
              <Zap className="feat-icon" size={20} />
              <span>Pagina persuasiva com copy de conversao</span>
            </div>
            <div className="hero-feat-item">
              <Trophy className="feat-icon" size={20} />
              <span>7 criativos prontos para anuncio</span>
            </div>
            <div className="hero-feat-item">
              <ShieldCheck className="feat-icon" size={20} />
              <span>Gestao de trafego em Meta e Google Ads</span>
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
