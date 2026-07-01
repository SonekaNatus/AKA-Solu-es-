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
      question: "Qual o prazo de entrega da minha landing page?",
      answer: "O prazo padrão para entrega do layout e do código publicado varia entre 5 a 7 dias úteis após o envio das informações básicas (briefing). Projetos do plano Personalizado que possuem integrações complexas de sistemas de terceiros ou APIs específicas podem levar um tempo ligeiramente superior, previamente alinhado no orçamento.",
    },
    {
      question: "Existem custos mensais ou taxas escondidas?",
      answer: "Não! O desenvolvimento da landing page é cobrado por meio de um pagamento único. Você não paga nenhuma mensalidade para a AKA Soluções. Os únicos custos recorrentes serão os de hospedagem e domínio do seu site, pagos diretamente à plataforma de hospedagem escolhida. Nós te ajudamos a configurar tudo sem custo adicional.",
    },
    {
      question: "Vocês realizam integrações com outras ferramentas?",
      answer: "Sim, fazemos a integração total com ferramentas de automação e rastreamento: Pixels de anúncios (Facebook Ads, Google Ads, TikTok Ads), Google Analytics, Google Tag Manager, formulários de e-mail marketing (ActiveCampaign, MailerLite, RD Station) e botões de redirecionamento para WhatsApp.",
    },
    {
      question: "Como funciona a hospedagem e o registro de domínio?",
      answer: "O domínio (ex: suamarca.com.br) e a hospedagem são de propriedade do cliente para garantir autonomia total. Recomendamos e orientamos na contratação das melhores e mais rápidas opções do mercado (com custos baixos, em torno de R$ 12 a R$ 20 mensais). Nós cuidamos do apontamento DNS e publicação final.",
    },
    {
      question: "Terei suporte técnico pós-entrega?",
      answer: "Com certeza. Cada plano conta com um período de garantia e suporte gratuito (de 15 a 60 dias) para correção de eventuais bugs ou pequenos ajustes textuais. Após esse período, oferecemos planos de manutenção avulsa ou pacotes mensais caso o cliente precise de atualizações recorrentes.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq-section">
      <div className="glow-bg faq-glow" style={{ top: "50%", left: "5%", width: "400px", height: "400px", background: "var(--primary)", opacity: 0.05 }}></div>
      
      <div className="container-wide">
        <div className="section-header-center">
          <span className="section-subtitle-badge">Tire suas dúvidas</span>
          <h2 className="section-title text-dark-primary">
            Perguntas <span className="text-gradient-purple">Frequentes</span>
          </h2>
          <p className="section-description">
            Encontre respostas rápidas para as principais dúvidas sobre o processo de criação, prazos e funcionamento do site.
          </p>
        </div>

        <div className="faq-list">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? "open" : ""}`}
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
