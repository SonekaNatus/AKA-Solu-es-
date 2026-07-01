import React from "react";
import {Mail } from "lucide-react";
import "./Footer.css";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container-wide footer-container">
        <div className="footer-brand">
          <a href="#inicio" className="logo-img-wrapper">
            <img src="/logo.png" alt="AKA Soluções Logo" className="logo-img-footer" />
          </a>
          <p className="footer-description">
            Criamos landing pages de alto impacto e performance para transformar visitantes em clientes fiéis.
          </p>
        </div>

        <div className="footer-links-group">
          <div className="footer-links-col">
            <h4 className="footer-title">Navegação</h4>
            <ul className="footer-list">
              <li><a href="#inicio">Início</a></li>
              <li><a href="#beneficios">Benefícios</a></li>
              <li><a href="#portfolio">Portfólio</a></li>
              <li><a href="#processo">Como Funciona</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-title">Serviços</h4>
            <ul className="footer-list">
              <li><a href="#planos">Nossos Planos</a></li>
              <li><a href="#faq">Perguntas Frequentes</a></li>
              <li><a href="#contato">Fazer Orçamento</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-title">Contato Oficial</h4>
            <ul className="footer-list contact-list">
              <li>
                <a href="mailto:contato@akasolucoes.com.br" className="footer-contact-item">
                  <Mail size={16} />
                  <span>contato@akasolucoes.com.br</span>
                </a>
              </li>
              <li className="footer-time">
                Segunda a Sexta, das 9h às 18h
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container-wide footer-bottom-container">
          <p className="copyright">
            &copy; {currentYear} AKA Soluções. Todos os direitos reservados.
          </p>
          <div className="footer-bottom-links">
            <a href="#faq">Termos de Uso</a>
            <span className="separator">•</span>
            <a href="#faq">Políticas de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
