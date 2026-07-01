import React, { useState } from "react";
import { ExternalLink, Layers } from "lucide-react";
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

  const filteredItems = activeFilter === "todos" 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);

  const categories = [
    { value: "todos", label: "Todos os Projetos" },
    { value: "vendas", label: "Páginas de Vendas" },
    { value: "leads", label: "Captura de Leads" },
    { value: "saas", label: "SaaS & Apps" },
  ];

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

        {/* Grid de Itens do Portfólio */}
        <div className="portfolio-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="card portfolio-card">
              <div 
                className="portfolio-preview-wrapper"
                style={{ background: item.imagePath ? "none" : item.color }}
              >
                {item.imagePath ? (
                  <img src={item.imagePath} alt={item.title} className="portfolio-image" />
                ) : (
                  <div className="portfolio-simulated-preview">
                    <Layers className="simulated-icon" size={40} />
                    <div className="simulated-browser-bar">
                      <span></span><span></span><span></span>
                    </div>
                  </div>
                )}
                
                <div className="portfolio-hover-overlay">
                  <a 
                    href={item.link} 
                    className="portfolio-view-link"
                    target={item.link.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                    <span>Visualizar Projeto</span>
                  </a>
                </div>
              </div>

              <div className="portfolio-info">
                <span className="portfolio-item-category">{item.categoryLabel}</span>
                <h3 className="portfolio-item-title">{item.title}</h3>
                <p className="portfolio-item-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
