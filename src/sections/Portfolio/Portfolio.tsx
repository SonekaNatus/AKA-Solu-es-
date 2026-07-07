import React, { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Layers } from "lucide-react";
import "./Portfolio.css";

interface PortfolioItem {
  id: number;
  title: string;
  category: "vendas" | "leads" | "saas" | "institucional";
  categoryLabel: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  metricBefore: string;
  metricAfter: string;
  color: string;
  imagePath?: string;
  link: string;
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: "Clínica Odontológica OdontoPremium",
    category: "leads",
    categoryLabel: "Captura de Leads",
    description: "Landing page de agendamento para público de alta renda.",
    problem: "Poucos agendamentos vindos do Google e dependência de indicações.",
    solution: "Página focada em conversão com formulário e WhatsApp integrados.",
    result: "Aumento consistente de agendamentos qualificados.",
    metricBefore: "15 contatos/mês",
    metricAfter: "48 contatos/mês",
    color: "#4f46e5",
    link: "#contato",
  },
  {
    id: 2,
    title: "Método Emagreça com Saúde",
    category: "vendas",
    categoryLabel: "Página de Vendas",
    description: "LP de infoproduto com copy persuasivo e checkout integrado.",
    problem: "Tráfego pago caro e baixa taxa de conversão na página antiga.",
    solution: "Nova estrutura de vendas com quebra de objeções e CTA estratégico.",
    result: "Mais vendas com o mesmo investimento em anúncios.",
    metricBefore: "2,8% conversão",
    metricAfter: "7,4% conversão",
    color: "#7c3aed",
    link: "#contato",
  },
  {
    id: 3,
    title: "SaaS Workspace",
    category: "saas",
    categoryLabel: "SaaS / Aplicativo",
    description: "Apresentação de software com foco em teste gratuito.",
    problem: "Visitantes não entendiam o valor do produto em poucos segundos.",
    solution: "Landing com proposta clara, benefícios e prova social.",
    result: "Mais cadastros para teste gratuito.",
    metricBefore: "90 leads/mês",
    metricAfter: "210 leads/mês",
    color: "#06b6d4",
    link: "#contato",
  },
  {
    id: 4,
    title: "Advocacia Silva",
    category: "leads",
    categoryLabel: "Captura de Leads",
    description: "Captação jurídica com foco em WhatsApp.",
    problem: "Site institucional não convertia visitantes em consultas.",
    solution: "LP objetiva com CTA direto para atendimento imediato.",
    result: "Mais consultas agendadas por semana.",
    metricBefore: "8 consultas/mês",
    metricAfter: "27 consultas/mês",
    color: "#1e1b4b",
    link: "#contato",
  },
  {
    id: 5,
    title: "Investidor de Sucesso",
    category: "vendas",
    categoryLabel: "Página de Vendas",
    description: "Página de vendas para curso online com autoridade.",
    problem: "Baixa confiança e abandono antes da compra.",
    solution: "Estrutura com depoimentos, garantia e oferta clara.",
    result: "Aumento de vendas no lançamento.",
    metricBefore: "R$ 18k/mês",
    metricAfter: "R$ 41k/mês",
    color: "#b91c1c",
    link: "#contato",
  },
  {
    id: 6,
    title: "FitLife App",
    category: "saas",
    categoryLabel: "SaaS / Aplicativo",
    description: "Landing para download de app fitness.",
    problem: "Poucos downloads vindos de campanhas pagas.",
    solution: "Página mobile-first com foco em instalação rápida.",
    result: "Mais downloads e menor custo por instalação.",
    metricBefore: "R$ 6,20/instalação",
    metricAfter: "R$ 2,90/instalação",
    color: "#10b981",
    link: "#contato",
  },
];

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("todos");
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);

  const filteredItems =
    activeFilter === "todos"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  const categories = [
    { value: "todos", label: "Todos os Projetos" },
    { value: "vendas", label: "Páginas de Vendas" },
    { value: "leads", label: "Captura de Leads" },
    { value: "saas", label: "SaaS & Apps" },
  ];

  useEffect(() => {
    setActiveSlide(0);
  }, [activeFilter]);

  const hasMultipleSlides = filteredItems.length > 1;
  const currentItem = filteredItems[activeSlide];

  useEffect(() => {
    if (!hasMultipleSlides || isAutoPlayPaused) return;

    const intervalId = window.setInterval(() => {
      setActiveSlide((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, [filteredItems.length, hasMultipleSlides, isAutoPlayPaused]);

  const goToPrev = () => {
    setActiveSlide((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveSlide((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  const slideStyle = useMemo(
    () => ({ background: currentItem?.imagePath ? "none" : currentItem?.color || "#111827" }),
    [currentItem]
  );

  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container-wide">
        <div className="section-header-center">
          <span className="section-subtitle-badge">Estudos de Caso</span>
          <h2 className="section-title text-dark-primary">
            Projetos que <span className="text-gradient-purple">geram resultado</span>
          </h2>
          <p className="section-description">
            Veja o problema, a solução aplicada e o resultado alcançado em cada projeto.
          </p>
        </div>

        <div className="portfolio-filters">
          {categories.map((cat) => (
            <button
              key={cat.value}
              className={`filter-btn ${activeFilter === cat.value ? "active" : ""}`}
              onClick={() => setActiveFilter(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div
          className="portfolio-showcase card"
          onMouseEnter={() => setIsAutoPlayPaused(true)}
          onMouseLeave={() => setIsAutoPlayPaused(false)}
        >
          {hasMultipleSlides && (
            <>
              <button type="button" className="portfolio-nav-btn portfolio-nav-prev" onClick={goToPrev} aria-label="Projeto anterior">
                <ChevronLeft size={18} />
              </button>
              <button type="button" className="portfolio-nav-btn portfolio-nav-next" onClick={goToNext} aria-label="Próximo projeto">
                <ChevronRight size={18} />
              </button>
            </>
          )}

          {currentItem && (
            <div className="portfolio-stage" style={slideStyle}>
              {currentItem.imagePath ? (
                <img src={currentItem.imagePath} alt={currentItem.title} className="portfolio-image" />
              ) : (
                <div className="portfolio-simulated-preview portfolio-simulated-full">
                  <Layers className="simulated-icon" size={64} />
                  <div className="simulated-browser-bar">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              )}

              <div className="portfolio-stage-overlay">
                <span className="portfolio-item-category">{currentItem.categoryLabel}</span>
                <h3 className="portfolio-stage-title">{currentItem.title}</h3>

                <div className="portfolio-case-grid">
                  <div className="portfolio-case-item">
                    <span className="portfolio-case-label">Problema</span>
                    <p>{currentItem.problem}</p>
                  </div>
                  <div className="portfolio-case-item">
                    <span className="portfolio-case-label">Solução</span>
                    <p>{currentItem.solution}</p>
                  </div>
                  <div className="portfolio-case-item">
                    <span className="portfolio-case-label">Resultado</span>
                    <p>{currentItem.result}</p>
                  </div>
                </div>

                <div className="portfolio-metrics">
                  <div className="portfolio-metric">
                    <span>Antes</span>
                    <strong>{currentItem.metricBefore}</strong>
                  </div>
                  <div className="portfolio-metric-arrow">→</div>
                  <div className="portfolio-metric portfolio-metric-after">
                    <span>Depois</span>
                    <strong>{currentItem.metricAfter}</strong>
                  </div>
                </div>

                <a
                  href={currentItem.link}
                  className="portfolio-view-link"
                  target={currentItem.link.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={20} />
                  <span>Ver Site</span>
                </a>
              </div>
            </div>
          )}
        </div>

        {hasMultipleSlides && (
          <div className="portfolio-thumbs">
            {filteredItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`portfolio-thumb ${index === activeSlide ? "active" : ""}`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Abrir projeto ${index + 1}`}
              >
                <div className="portfolio-thumb-preview" style={{ background: item.imagePath ? "none" : item.color }}>
                  {item.imagePath ? (
                    <img src={item.imagePath} alt={item.title} className="portfolio-thumb-image" />
                  ) : (
                    <Layers size={18} />
                  )}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default Portfolio;
