import React from "react";
import { Check } from "lucide-react";
import { Button } from "../../components/UI/Button";
import "./Pricing.css";

interface PlanFeature {
  name: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  installments: string;
  description: string;
  features: PlanFeature[];
  buttonText: string;
  buttonVariant: "primary" | "secondary" | "outline" | "text" | "light";
  popular: boolean;
}

export const Pricing: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      name: "Essencial",
      price: "R$ 997",
      installments: "ou 12x de R$ 99,70",
      description: "Ideal para validação rápida de produtos e serviços locais.",
      buttonText: "Iniciar Plano Essencial",
      buttonVariant: "outline",
      popular: false,
      features: [
        { name: "Estrutura com até 5 seções", included: true },
        { name: "Design focado em dispositivos móveis", included: true },
        { name: "Botão de WhatsApp integrado", included: true },
        { name: "Formulário de e-mail de contato", included: true },
        { name: "Otimização básica de carregamento", included: true },
        { name: "15 dias de suporte pós-entrega", included: true },
        { name: "Código fonte React/TypeScript", included: true },
        { name: "Copywriting de conversão avançado", included: false },
        { name: "Instalação de Pixels (FB / Google)", included: false },
        { name: "Animações e efeitos interativos", included: false },
      ],
    },
    {
      name: "Premium",
      price: "R$ 1.597",
      installments: "ou 12x de R$ 159,70",
      description: "A solução completa para infoprodutos, lançamentos e campanhas de anúncios em escala.",
      buttonText: "Iniciar Plano Premium",
      buttonVariant: "primary",
      popular: true,
      features: [
        { name: "Estrutura com até 8 seções", included: true },
        { name: "Design exclusivo e autoral premium", included: true },
        { name: "Botão de WhatsApp integrado", included: true },
        { name: "Formulário de e-mail de contato", included: true },
        { name: "Otimização extrema de performance (90+)", included: true },
        { name: "30 dias de suporte pós-entrega", included: true },
        { name: "Código fonte React/TypeScript", included: true },
        { name: "Copywriting de conversão avançado", included: true },
        { name: "Instalação de Pixels (FB / Google)", included: true },
        { name: "Animações e efeitos interativos", included: true },
      ],
    },
    {
      name: "Personalizado",
      price: "Sob Consulta",
      installments: "Projetos sob demanda",
      description: "Para empresas que precisam de integrações robustas, CRM ou múltiplos fluxos.",
      buttonText: "Solicitar Orçamento",
      buttonVariant: "outline",
      popular: false,
      features: [
        { name: "Seções e páginas ilimitadas", included: true },
        { name: "Design UI/UX sob medida com protótipo", included: true },
        { name: "Botão de WhatsApp integrado", included: true },
        { name: "Formulário de e-mail e CRM integrados", included: true },
        { name: "Otimização máxima de performance", included: true },
        { name: "60 dias de suporte prioritário", included: true },
        { name: "Código fonte React/TypeScript", included: true },
        { name: "Copywriting e funil de vendas completo", included: true },
        { name: "Integrações customizadas de API", included: true },
        { name: "Desenvolvimento de marca/identidade", included: true },
      ],
    },
  ];

  return (
    <section id="planos" className="section pricing-section">
      
      <div className="container-wide">
        <div className="section-header-center">
          <span className="section-subtitle-badge">Nossos Valores</span>
          <h2 className="section-title text-dark-primary">
            Planos Sob Medida para <span className="text-gradient-purple">Sua Empresa</span>
          </h2>
          <p className="section-description">
            Escolha o modelo ideal para iniciar. Sem letras miúdas, taxas de manutenção mensais abusivas ou fidelidade.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? "popular" : ""}`}>
              {plan.popular && <span className="popular-badge">Mais Escolhido</span>}
              
              <div className="pricing-plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-desc">{plan.description}</p>
                <div className="plan-price-block">
                  <span className="plan-price">{plan.price}</span>
                  <span className="plan-installments">{plan.installments}</span>
                </div>
              </div>

              <div className="pricing-features-list">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className={`plan-feature-item ${feature.included ? "" : "disabled"}`}>
                    <Check size={16} className="feature-check" />
                    <span>{feature.name}</span>
                  </div>
                ))}
              </div>

              <div className="pricing-plan-action">
                <Button 
                  href="#contato" 
                  variant={plan.popular ? "primary" : "outline"}
                  className="plan-btn"
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Pricing;
