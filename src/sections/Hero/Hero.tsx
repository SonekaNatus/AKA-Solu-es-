import React from "react";
import { ArrowRight, Star, Users, Briefcase, TrendingUp } from "lucide-react";
import { Button } from "../../components/UI/Button";
import "./Hero.css";

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="hero-section">
      <div className="container-wide hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <Star size={14} className="hero-badge-icon" fill="currentColor" />
            <span>Proposta personalizada em até 2 horas</span>
          </div>

          <h1 className="hero-title text-gradient">
            Transformamos cliques em clientes com{" "}
            <span className="text-gradient-purple">Landing Page + Criativos + Tráfego Pago</span>
          </h1>

          <p className="hero-subtitle">
            Você recebe tudo pronto para rodar: página persuasiva, criativos profissionais e gestão de anúncios.
            Sem depender de 3 fornecedores diferentes. Foco total em gerar leads, vendas e agendamentos.
          </p>

          <div className="hero-actions">
            <Button href="#contato" variant="primary">
              Quero vender mais <ArrowRight size={18} />
            </Button>
            <Button href="https://wa.me/5511999999999" variant="outline" target="_blank">
              Conversar no WhatsApp
            </Button>
          </div>

          <p className="hero-microcopy">Sem compromisso • Diagnóstico estratégico gratuito</p>

          <div className="hero-social-proof">
            <div className="hero-proof-item">
              <Briefcase size={18} />
              <span><strong>+50</strong> landing pages</span>
            </div>
            <div className="hero-proof-item">
              <Users size={18} />
              <span><strong>+20</strong> empresas atendidas</span>
            </div>
            <div className="hero-proof-item">
              <Star size={18} fill="currentColor" />
              <span><strong>5.0</strong> avaliação média</span>
            </div>
            <div className="hero-proof-item">
              <TrendingUp size={18} />
              <span><strong>+220%</strong> média de leads</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="browser-mockup animate-float">
            <div className="browser-header">
              <div className="browser-address">akasolucoes.com.br/sua-landing-page</div>
            </div>
            <div className="browser-content">
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
