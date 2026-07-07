import React from "react";
import { MessageSquare, Lightbulb, PenTool, Eye, Rocket, TrendingUp } from "lucide-react";
import "./Process.css";

interface ProcessStep {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const Process: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      number: "01",
      icon: <MessageSquare size={24} />,
      title: "Conversamos",
      description: "Entendemos seu negócio, público e meta de vendas para montar a estratégia certa.",
    },
    {
      number: "02",
      icon: <Lightbulb size={24} />,
      title: "Criamos a estratégia",
      description: "Definimos oferta, copy, estrutura da página e plano de anúncios para conversão.",
    },
    {
      number: "03",
      icon: <PenTool size={24} />,
      title: "Desenvolvemos",
      description: "Criamos landing page e criativos com foco em resultado, não em tecnologia.",
    },
    {
      number: "04",
      icon: <Eye size={24} />,
      title: "Revisamos",
      description: "Você aprova cada etapa com ajustes rápidos até ficar do jeito ideal.",
    },
    {
      number: "05",
      icon: <Rocket size={24} />,
      title: "Publicamos",
      description: "Colocamos tudo no ar pronto para captar leads, vendas e agendamentos.",
    },
    {
      number: "06",
      icon: <TrendingUp size={24} />,
      title: "Escalamos com anúncios",
      description: "Otimizamos campanhas para aumentar retorno e reduzir custo por lead.",
    },
  ];

  return (
    <section id="processo" className="section process-section">
      <div className="container-wide">
        <div className="section-header-center">
          <span className="section-subtitle-badge">Como Funciona</span>
          <h2 className="section-title text-dark-primary">
            Do primeiro contato ao <span className="text-gradient-purple">resultado</span>
          </h2>
          <p className="section-description">
            Processo simples, transparente e focado em colocar sua operação para vender o quanto antes.
          </p>
        </div>

        <div className="process-timeline">
          <div className="process-grid">
            {steps.map((step, index) => (
              <div key={index} className="card process-card">
                <div className="process-header-card">
                  <span className="process-number">{step.number}</span>
                  <div className="process-icon">{step.icon}</div>
                </div>
                <h3 className="process-title-card">{step.title}</h3>
                <p className="process-desc-card">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Process;
