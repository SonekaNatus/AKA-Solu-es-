import React from "react";
import { MessageSquare, Eye, Code, Globe } from "lucide-react";
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
      title: "Briefing & Planejamento",
      description: "Entendemos seu produto, público-alvo e concorrentes para criar a estratégia ideal de copywriting e estrutura de conversão.",
    },
    {
      number: "02",
      icon: <Eye size={24} />,
      title: "Design Visual Exclusivo",
      description: "Criamos a interface sob medida para sua aprovação, focando na identidade visual da sua marca e em uma experiência do usuário premium.",
    },
    {
      number: "03",
      icon: <Code size={24} />,
      title: "Desenvolvimento React",
      description: "Escrevemos o código em React com alta performance, garantindo que sua página carregue de forma instantânea e sem travamentos.",
    },
    {
      number: "04",
      icon: <Globe size={24} />,
      title: "Integrações & Lançamento",
      description: "Conectamos formulários de email, instalamos pixels de rastreamento e colocamos sua landing page no ar pronta para gerar vendas.",
    },
  ];

  return (
    <section id="metodo" className="section process-section">
      
      <div className="container-wide">
        <div className="section-header-center">
          <span className="section-subtitle-badge">Nossa Metodologia</span>
          <h2 className="section-title text-dark-primary">
            Como Criamos Sua <span className="text-gradient-purple">Página de Sucesso</span>
          </h2>
          <p className="section-description">
            Um processo direto e transparente dividido em quatro etapas simples para levar seu negócio ao próximo nível.
          </p>
        </div>

        <div className="process-timeline">
          {/* Linha de conexão */}
          <div className="timeline-line"></div>

          <div className="process-grid">
            {steps.map((step, index) => (
              <div key={index} className="process-card">
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
