import React from "react";
import { Star, Quote } from "lucide-react";
import "./Testimonials.css";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  city: string;
  niche: string;
  result: string;
  content: string;
  rating: number;
  initials: string;
}

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Roberto Santos",
      role: "Infoprodutor",
      company: "Finanças do Amanhã",
      city: "São Paulo, SP",
      niche: "Educação Financeira",
      result: "Conversão subiu de 2,8% para 7,4%",
      content:
        "A landing page mudou nosso jogo nas campanhas. Em poucos dias já vimos mais vendas com o mesmo investimento em anúncios.",
      rating: 5,
      initials: "RS",
    },
    {
      id: 2,
      name: "Camila Braga",
      role: "Diretora Clínica",
      company: "Sorriso Clean Odonto",
      city: "Curitiba, PR",
      niche: "Odontologia",
      result: "+40% em agendamentos via WhatsApp",
      content:
        "Antes dependíamos muito de indicação. Hoje recebemos agendamentos todos os dias vindos da página e dos anúncios.",
      rating: 5,
      initials: "CB",
    },
    {
      id: 3,
      name: "Lucas Farias",
      role: "Fundador",
      company: "TaskUp SaaS",
      city: "Florianópolis, SC",
      niche: "Software B2B",
      result: "Leads mensais mais que dobraram",
      content:
        "A equipe entregou página, criativos e tráfego alinhados. O resultado foi mais leads qualificados e previsibilidade nas campanhas.",
      rating: 5,
      initials: "LF",
    },
  ];

  return (
    <section id="depoimentos" className="section testimonials-section">
      <div className="container-wide">
        <div className="section-header-center">
          <span className="section-subtitle-badge">Depoimentos</span>
          <h2 className="section-title text-dark-primary">
            Resultados reais de <span className="text-gradient-purple">clientes reais</span>
          </h2>
          <p className="section-description">
            Empresários de diferentes nichos que aumentaram leads, vendas e agendamentos com nossa estratégia completa.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((test) => (
            <div key={test.id} className="card testimonial-card">
              <div className="testimonial-header">
                <div className="stars-row">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} size={16} className="star-icon" fill="currentColor" />
                  ))}
                </div>
                <Quote size={28} className="quote-icon" />
              </div>

              <p className="testimonial-content">"{test.content}"</p>

              <div className="testimonial-result">{test.result}</div>

              <div className="testimonial-footer-info">
                <div className="avatar-initials">{test.initials}</div>
                <div className="user-details">
                  <h4 className="user-name">{test.name}</h4>
                  <p className="user-role-company">
                    {test.role} • <span className="user-company">{test.company}</span>
                  </p>
                  <p className="user-meta">
                    {test.city} • {test.niche}
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
