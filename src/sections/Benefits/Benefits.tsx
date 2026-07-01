import React from "react";
import { Zap, Layout, Target, Search, Smartphone, Share2 } from "lucide-react";
import "./Benefits.css";

interface BenefitCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const Benefits: React.FC = () => {
  const benefitsData: BenefitCard[] = [
    {
      icon: <Zap size={28} />,
      title: "Velocidade Ultra Rápida",
      description: "Carregamento em menos de 1 segundo. Evite perder clientes pela demora no carregamento da página.",
    },
    {
      icon: <Layout size={28} />,
      title: "Design Exclusivo e Autoral",
      description: "Esqueça templates prontos e batidos. Criamos uma identidade visual única e focada na sua marca.",
    },
    {
      icon: <Target size={28} />,
      title: "Arquitetura de Conversão",
      description: "Copywriting persuasivo e posicionamento estratégico de CTAs para maximizar as suas vendas.",
    },
    {
      icon: <Search size={28} />,
      title: "SEO Otimizado de Fábrica",
      description: "Código semântico de alta performance que ajuda seu site a alcançar as primeiras posições do Google.",
    },
    {
      icon: <Smartphone size={28} />,
      title: "100% Responsivo",
      description: "Uma experiência de navegação impecável e fluida adaptada para smartphones, tablets e computadores.",
    },
    {
      icon: <Share2 size={28} />,
      title: "Fácil Integração",
      description: "Instalação descomplicada de Pixels (Facebook, Google), Analytics, CRMs e formulários de e-mail.",
    },
  ];

  return (
    <section id="beneficios" className="benefits-section">
      <div className="container-wide">
        <div className="section-header-center">
          <span className="section-subtitle-badge">Por que nos escolher</span>
          <h2 className="section-title text-dark-primary">
            Diferenciais que Alavancam <br />
            <span className="text-gradient-purple">Seu Faturamento</span>
          </h2>
          <p className="section-description">
            Criamos muito mais do que sites bonitos. Entregamos verdadeiras máquinas de geração de leads e vendas.
          </p>
        </div>

        <div className="benefits-grid">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon-wrapper">
                {benefit.icon}
              </div>
              <h3 className="benefit-card-title">{benefit.title}</h3>
              <p className="benefit-card-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Benefits;
