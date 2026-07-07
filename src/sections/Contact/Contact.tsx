import React, { useState } from "react";
import { Mail, Send, CheckCircle, AlertTriangle, Clock, MessageCircle } from "lucide-react";
import { Button } from "../../components/UI/Button";
import "./Contact.css";

const WHATSAPP_NUMBER = "5511999999999";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Landing Page",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setStatus("sending");

    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "Landing Page",
        message: "",
      });
    }, 1800);
  };

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Olá! Meu nome é ${formData.name || "[seu nome]"}. Quero receber minha proposta para: ${formData.subject}.`
  )}`;

  return (
    <section id="contato" className="section contact-section">
      <div className="container-wide">
        <div className="section-header-center">
          <span className="section-subtitle-badge">Iniciar Projeto</span>
          <h2 className="section-title text-dark-primary">
            Receba sua <span className="text-gradient-purple">proposta personalizada</span>
          </h2>
          <p className="section-description">
            Preencha o formulário ou fale direto no WhatsApp. Retornamos em até 2 horas úteis.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-panel">
            <h3 className="info-panel-title">Fale com a gente agora</h3>
            <p className="info-panel-desc">
              Sua empresa perde clientes sem presença digital profissional. Vamos montar sua estratégia para gerar mais vendas.
            </p>

            <div className="contact-info-list">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="card info-card info-card-whatsapp">
                <div className="info-card-icon">
                  <MessageCircle size={24} />
                </div>
                <div className="info-card-content">
                  <span className="info-card-label">WhatsApp (principal)</span>
                  <span className="info-card-value">Conversar agora</span>
                </div>
              </a>

              <a href="mailto:contato@akasolucoes.com.br" className="card info-card">
                <div className="info-card-icon">
                  <Mail size={24} />
                </div>
                <div className="info-card-content">
                  <span className="info-card-label">E-mail Comercial</span>
                  <span className="info-card-value">contato@akasolucoes.com.br</span>
                </div>
              </a>

              <div className="card info-card">
                <div className="info-card-icon">
                  <Clock size={24} />
                </div>
                <div className="info-card-content">
                  <span className="info-card-label">Tempo de Resposta</span>
                  <span className="info-card-value">Em até 2 horas úteis</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card contact-form-panel">
            {status === "success" ? (
              <div className="form-status-box success">
                <CheckCircle size={48} className="status-icon-success" />
                <h3 className="status-title">Mensagem Enviada!</h3>
                <p className="status-desc">
                  Recebemos seu pedido. Nossa equipe entrará em contato em até 2 horas úteis com sua proposta.
                </p>
                <Button onClick={() => setStatus("idle")} variant="light">
                  Enviar Nova Mensagem
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                {status === "error" && (
                  <div className="form-alert error">
                    <AlertTriangle size={18} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="name">Seu Nome *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex: João Silva"
                      required
                      disabled={status === "sending"}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Seu E-mail *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Ex: joao@empresa.com"
                      required
                      disabled={status === "sending"}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Plano de Interesse</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={status === "sending"}
                  >
                    <option value="Landing Page">Landing Page</option>
                    <option value="Landing + Criativos">Landing + Criativos</option>
                    <option value="Gestão de Tráfego">Gestão de Tráfego</option>
                    <option value="Quero uma recomendação">Quero uma recomendação</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Fale um pouco sobre o seu projeto *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="O que você vende, qual resultado quer alcançar e se já anuncia hoje..."
                    rows={6}
                    required
                    disabled={status === "sending"}
                  ></textarea>
                </div>

                <Button type="submit" variant="primary" className="submit-btn" disabled={status === "sending"}>
                  {status === "sending" ? (
                    <>
                      <div className="form-spinner"></div>
                      <span>Enviando proposta...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Quero receber minha proposta</span>
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
