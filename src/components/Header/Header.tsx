import React, { useState, useEffect } from "react";
import { Menu, X, Rocket } from "lucide-react";
import { Button } from "../UI/Button";
import "./Header.css";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container-wide header-container">
        <a href="#inicio" className="logo" onClick={closeMenu}>
          <Rocket className="logo-icon" size={28} />
          <span className="logo-text">
            AKA <span className="logo-highlight">Soluções</span>
          </span>
        </a>

        {/* Menu Desktop */}
        <nav className="nav-desktop">
          <ul className="nav-list">
            <li><a href="#inicio" className="nav-link">Início</a></li>
            <li><a href="#beneficios" className="nav-link">Benefícios</a></li>
            <li><a href="#portfolio" className="nav-link">Portfólio</a></li>
            <li><a href="#processo" className="nav-link">Como Funciona</a></li>
            <li><a href="#planos" className="nav-link">Planos</a></li>
            <li><a href="#faq" className="nav-link">Dúvidas</a></li>
          </ul>
        </nav>

        <div className="header-cta-desktop">
          <Button href="#contato" variant="outline">Fale Conosco</Button>
        </div>

        {/* Botão Menu Mobile */}
        <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Alternar menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu Mobile Lateral */}
        <div className={`nav-mobile-overlay ${isOpen ? "active" : ""}`} onClick={closeMenu}></div>
        <nav className={`nav-mobile ${isOpen ? "active" : ""}`}>
          <div className="nav-mobile-header">
            <a href="#inicio" className="logo" onClick={closeMenu}>
              <Rocket className="logo-icon" size={24} />
              <span className="logo-text">AKA <span className="logo-highlight">Soluções</span></span>
            </a>
            <button className="mobile-menu-close" onClick={closeMenu} aria-label="Fechar menu">
              <X size={24} />
            </button>
          </div>
          <ul className="nav-mobile-list">
            <li><a href="#inicio" className="nav-link" onClick={closeMenu}>Início</a></li>
            <li><a href="#beneficios" className="nav-link" onClick={closeMenu}>Benefícios</a></li>
            <li><a href="#portfolio" className="nav-link" onClick={closeMenu}>Portfólio</a></li>
            <li><a href="#processo" className="nav-link" onClick={closeMenu}>Como Funciona</a></li>
            <li><a href="#planos" className="nav-link" onClick={closeMenu}>Planos</a></li>
            <li><a href="#faq" className="nav-link" onClick={closeMenu}>Dúvidas</a></li>
            <li className="nav-mobile-cta">
              <Button href="#contato" variant="primary" onClick={closeMenu}>Fale Conosco</Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
