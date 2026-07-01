import React from "react";
import { Star, Quote } from "lucide-react";
import "./Testimonials.css";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  initials: string;
}

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Roberto Santos",
      role: "Infoprodutor & CMO",
      company: "Finanças do Amanhã",
      content: "A landing page desenvolvida pela AKA Soluções superou todas as nossas expectativas. Nossa taxa de conversão nas campanhas de tráfego pago pulou de 2.8% para 7.4% logo na primeira semana de lançamento. O design exclusivo fez toda a diferença!",
      rating: 5,
      initials: "RS",
    },
    {
      id: 2,
      name: "Camila Braga",
      role: "Diretora Clínica",
      company: "Sorriso Clean Odonto",
      content: "Precisávamos de uma página profissional focada em conversão para captar pacientes no Google Ads. Com a landing page no ar, o número de agendamentos diretos no WhatsApp aumentou em 40%. O suporte pós-entrega é excelente!",
      rating: 5,
      initials: "CB",
    },
    {
      id: 3,
      name: "Lucas Farias",
      role: "Fundador",
      company: "TaskUp SaaS",
      content: "Equipe extremamente capacitada. O desenvolvimento em React com código super limpo permitiu que o nosso time integrasse a página ao nosso sistema sem nenhuma complicação. O carregamento é instantâneo!",
      rating: 5,
      initials: "LF",
    },
  ];

  return (
    <section id="depoimentos" className="testimonials-section">
      <div className="glow-bg testimonials-glow" style={{ top: "30%", left: "15%", width: "400px", height: "400px", background: "var(--primary)", opacity: 0.05 }}></div>

      <div className="container-wide">
        <div className="section-header-center">
          <span className="section-subtitle-badge">Clientes Satisfeitos</span>
          <h2 className="section-title text-dark-primary">
            Quem Confia na <span className="text-gradient-purple">AKA Soluções</span>
          </h2>
          <p className="section-description">
            Veja o impacto real que nossas landing pages geram no faturamento e captação de clientes de nossos parceiros.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((test) => (
            <div key={test.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="stars-row">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} size={16} className="star-icon" fill="currentColor" />
                  ))}
                </div>
                <Quote size={28} className="quote-icon" />
              </div>
              
              <p className="testimonial-content">"{test.content}"</p>

              <div className="testimonial-footer-info">
                <div className="avatar-initials">{test.initials}</div>
                <div className="user-details">
                  <h4 className="user-name">{test.name}</h4>
                  <p className="user-role-company">
                    {test.role} • <span className="user-company">{test.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
