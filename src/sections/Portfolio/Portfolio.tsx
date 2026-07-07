import React, { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Layers } from "lucide-react";
import "./Portfolio.css";

// ==========================================================================
// CADASTRE SUAS LANDING PAGES AQUI
// Basta adicionar um novo objeto à lista abaixo para que ele apareça no site!
// ==========================================================================
interface PortfolioItem {
  id: number;
  title: string;
  category: "vendas" | "leads" | "saas" | "institucional";
  categoryLabel: string;
  description: string;
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
    description: "Landing Page de agendamento focada no público de alta renda, com design minimalista e formulário integrado.",
    color: "#4f46e5",
    link: "#contato",
  },
  {
    id: 2,
    title: "Método Emagreça com Saúde (Infoproduto)",
    category: "vendas",
    categoryLabel: "Página de Vendas",
    description: "LP de alta conversão estruturada com copywriting persuasivo, quebra de objeções e checkout integrado.",
    color: "#7c3aed",
    link: "#contato",
  },
  {
    id: 3,
    title: "SaaS Workspace - Plataforma de Produtividade",
    category: "saas",
    categoryLabel: "SaaS / Aplicativo",
    description: "Apresentação moderna de software corporativo com ilustrações interativas, planos e testes gratuitos.",
    color: "#06b6d4",
    link: "#contato",
  },
  {
    id: 4,
    title: "Assessoria Jurídica Advocacia Silva",
    category: "leads",
    categoryLabel: "Captura de Leads",
    description: "Estética sobriedade com foco em conversão rápida via WhatsApp para captação de clientes jurídicos.",
    color: "#1e1b4b",
    link: "#contato",
  },
  {
    id: 5,
    title: "Curso Online Investidor de Sucesso",
    category: "vendas",
    categoryLabel: "Página de Vendas",
    description: "Design moderno com foco em autoridade, depoimentos em carrossel e call to action para compra imediata.",
    color: "#b91c1c",
    link: "#contato",
  },
  {
    id: 6,
    title: "Aplicativo FitLife - Health & Fitness",
    category: "saas",
    categoryLabel: "SaaS / Aplicativo",
    description: "Landing page para download de app fitness com integração para App Store e Google Play.",
    color: "#10b981",
    link: "#contato",
  },
];

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("todos");
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);

  const filteredItems = activeFilter === "todos" 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);

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
          <span className="section-subtitle-badge">Nossos Cases</span>
          <h2 className="section-title text-dark-primary">
            Portfólio de <span className="text-gradient-purple">Sucesso</span>
          </h2>
          <p className="section-description">
            Explore alguns dos nossos projetos e veja o nível de qualidade e acabamento visual que aplicamos em cada página de vendas.
          </p>
        </div>

        {/* Filtros de Categorias */}
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
              <button
                type="button"
                className="portfolio-nav-btn portfolio-nav-prev"
                onClick={goToPrev}
                aria-label="Projeto anterior"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                className="portfolio-nav-btn portfolio-nav-next"
                onClick={goToNext}
                aria-label="Proximo projeto"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}

          {currentItem && (
            <>
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
                  <p className="portfolio-stage-desc">{currentItem.description}</p>
                  <a
                    href={currentItem.link}
                    className="portfolio-view-link"
                    target={currentItem.link.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                    <span>Visualizar Projeto</span>
                  </a>
                </div>
              </div>
            </>
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
                <div
                  className="portfolio-thumb-preview"
                  style={{ background: item.imagePath ? "none" : item.color }}
                >
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

        {hasMultipleSlides && (
          <div className="portfolio-carousel-dots">
            {filteredItems.map((item, index) => (
              <button
                key={`portfolio-dot-${item.id}`}
                type="button"
                className={`portfolio-dot ${index === activeSlide ? "active" : ""}`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Ir para projeto ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default Portfolio;
