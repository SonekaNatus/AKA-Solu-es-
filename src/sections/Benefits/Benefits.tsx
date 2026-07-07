import React from "react";
import { MonitorSmartphone, Megaphone, BarChart3 } from "lucide-react";
import "./Benefits.css";

interface BenefitCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const Benefits: React.FC = () => {
  const benefitsData: BenefitCard[] = [
    {
      icon: <MonitorSmartphone size={28} />,
      title: "Landing Page Persuasiva",
      description: "Pagina pronta para rodar com estrutura de conversao, design responsivo e copy voltada para gerar leads e vendas.",
    },
    {
      icon: <Megaphone size={28} />,
      title: "Criativos Para Anuncios",
      description: "Criativos estrategicos para Meta e Google, pensados para chamar atencao e reduzir custo por lead.",
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Gestao de Trafego Pago",
      description: "Campanhas em Meta Ads e Google Ads com otimizacao continua para escalar seu resultado de forma previsivel.",
    },
  ];

  return (
    <section id="beneficios" className="section benefits-section">
      <div className="container-wide">
        <div className="section-header-center">
          <span className="section-subtitle-badge">Entregaveis</span>
          <h2 className="section-title text-dark-primary">
            O que voce recebe no <span className="text-gradient-purple">combo completo</span>
          </h2>
          <p className="section-description">
            Uma operacao completa para sair da ideia e entrar em campanha com velocidade, consistencia e foco total em conversao.
          </p>
        </div>

        <div className="benefits-grid">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="card benefit-card">
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
