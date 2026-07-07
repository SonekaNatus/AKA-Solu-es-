import React from "react";
import "./Authority.css";

const STATS = [
  { value: "7+", label: "Anos de experiencia" },
  { value: "1.200+", label: "Empresas atendidas" },
  { value: "5.000+", label: "Paginas entregues" },
  { value: "40.000+", label: "Criativos produzidos" },
];

export const Authority: React.FC = () => {
  return (
    <section className="authority-section">
      <div className="container-wide authority-grid">
        {STATS.map((item) => (
          <article key={item.label} className="card authority-card">
            <strong className="authority-value">{item.value}</strong>
            <span className="authority-label">{item.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Authority;
