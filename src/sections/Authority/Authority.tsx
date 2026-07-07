import React from "react";
import "./Authority.css";

const STATS = [
  { value: "+50", label: "Landing pages entregues" },
  { value: "+20", label: "Empresas atendidas" },
  { value: "5.0", label: "Avaliação média" },
  { value: "2h", label: "Tempo de resposta" },
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
