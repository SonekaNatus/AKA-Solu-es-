import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import "./FAQ.css";

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "Quanto tempo demora para ficar pronto?",
      answer:
        "O prazo médio é de 5 a 7 dias úteis após o briefing. Projetos com integrações extras podem levar um pouco mais, sempre alinhado antes de iniciar.",
    },
    {
      question: "Preciso ter domínio para começar?",
      answer:
        "Não necessariamente. Podemos iniciar o projeto e te orientar na compra do domínio e hospedagem com o melhor custo-benefício.",
    },
    {
      question: "Vocês hospedam o site?",
      answer:
        "A hospedagem fica no seu nome para você ter controle total. Nós configuramos tudo e publicamos a página para você.",
    },
    {
      question: "Posso editar depois?",
      answer:
        "Sim. Você recebe suporte pós-entrega para ajustes e pode contratar manutenção para futuras atualizações.",
    },
    {
      question: "Como funciona o pagamento?",
      answer:
        "Trabalhamos com pagamento único por projeto, sem mensalidade obrigatória para a AKA. As condições são apresentadas na proposta.",
    },
    {
      question: "Vocês fazem tráfego pago também?",
      answer:
        "Sim. Podemos entregar landing page, criativos e gestão de campanhas em Meta Ads e Google Ads no mesmo pacote.",
    },
    {
      question: "Existem custos mensais escondidos?",
      answer:
        "Não. O desenvolvimento é pagamento único. Os únicos custos recorrentes são domínio e hospedagem, pagos direto à plataforma escolhida.",
    },
    {
      question: "Terei suporte após a entrega?",
      answer:
        "Sim. Todos os planos incluem período de suporte para ajustes e correções após a publicação.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq-section">
      <div className="container-wide">
        <div className="section-header-center">
          <span className="section-subtitle-badge">Tire suas dúvidas</span>
          <h2 className="section-title text-dark-primary">
            Perguntas <span className="text-gradient-purple">Frequentes</span>
          </h2>
          <p className="section-description">
            Respostas diretas sobre prazo, pagamento, hospedagem e tráfego pago.
          </p>
        </div>

        <div className="faq-list">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`card faq-item ${isOpen ? "open" : ""}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="faq-question-row">
                  <h3 className="faq-question">{item.question}</h3>
                  <div className="faq-toggle-icon">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </div>
                <div className="faq-answer-wrapper" style={{ maxHeight: isOpen ? "300px" : "0px" }}>
                  <p className="faq-answer">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default FAQ;
