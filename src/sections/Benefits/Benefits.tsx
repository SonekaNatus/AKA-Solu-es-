import React from "react";
import { TrendingUp, Megaphone, BarChart3 } from "lucide-react";
import "./Benefits.css";

interface BenefitCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const Benefits: React.FC = () => {
  const benefitsData: BenefitCard[] = [
    {
      icon: <TrendingUp size={28} />,
      title: "Mais conversão",
      description:
        "Pare de perder clientes por falta de presença digital. Sua página foi pensada para transformar visitantes em contatos e vendas.",
    },
    {
      icon: <Megaphone size={28} />,
      title: "Criativos profissionais",
      description:
        "Anúncios prontos para Meta e Google que chamam atenção, geram cliques e reduzem o custo por lead.",
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Gestão completa",
      description:
        "Campanhas monitoradas e otimizadas para escalar resultados com previsibilidade — mais vendas e mais agendamentos.",
    },
  ];

  return (
    <section id="beneficios" className="section benefits-section">
      <div className="container-wide">
        <div className="section-header-center">
          <span className="section-subtitle-badge">Entregáveis</span>
          <h2 className="section-title text-dark-primary">
            O que você recebe no <span className="text-gradient-purple">combo completo</span>
          </h2>
          <p className="section-description">
            Seu concorrente já aparece no Google. Pare de depender só de indicação. Receba uma operação completa focada em resultado.
          </p>
        </div>

        <div className="benefits-grid">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="card benefit-card">
              <div className="benefit-icon-wrapper">{benefit.icon}</div>
              <h3 className="benefit-card-title">{benefit.title}</h3>
              <p className="benefit-card-description">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="benefits-trust card">
          <div className="trust-item">
            <strong>+50</strong>
            <span>projetos entregues</span>
          </div>
          <div className="trust-item">
            <strong>5 a 7 dias</strong>
            <span>tempo médio de entrega</span>
          </div>
          <div className="trust-item">
            <strong>30 dias</strong>
            <span>suporte pós-entrega</span>
          </div>
          <div className="trust-item">
            <strong>Garantia</strong>
            <span>de ajustes após publicação</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Benefits;
