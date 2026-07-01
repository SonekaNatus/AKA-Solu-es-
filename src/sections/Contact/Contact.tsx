import React, { useState } from "react";
import { Mail, Send, CheckCircle, AlertTriangle, Clock } from "lucide-react";
import { Button } from "../../components/UI/Button";
import "./Contact.css";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Landing Page Essencial",
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
    
    // Validação simples
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setStatus("sending");

    // Simulando o envio de e-mail assíncrono (ex: para Formspree, EmailJS ou backend)
    setTimeout(() => {
      try {
        // Simulação de sucesso
        console.log("Dados do formulário enviados:", formData);
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "Landing Page Essencial",
          message: "",
        });
      } catch (err) {
        setStatus("error");
        setErrorMessage("Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.");
      }
    }, 1800);
  };

  // Gerador de link mailto direto para conveniência
  const mailtoLink = `mailto:contato@akasolucoes.com.br?subject=${encodeURIComponent(
    `Orçamento: ${formData.subject || "Landing Page"}`
  )}&body=${encodeURIComponent(
    `Olá AKA Soluções,\n\nMeu nome é ${formData.name}.\n\nDetalhes do Projeto:\n${formData.message}\n\nContato direto: ${formData.email}`
  )}`;

  return (
    <section id="contato" className="contact-section">
      <div className="glow-bg contact-glow" style={{ bottom: "5%", right: "15%", width: "400px", height: "400px", background: "var(--primary)", opacity: 0.08 }}></div>

      <div className="container-wide">
        <div className="section-header-center">
          <span className="section-subtitle-badge">Iniciar Projeto</span>
          <h2 className="section-title text-dark-primary">
            Solicite um <span className="text-gradient-purple">Orçamento Grátis</span>
          </h2>
          <p className="section-description">
            Preencha o formulário abaixo ou envie um e-mail diretamente. Retornaremos com sua proposta em até 24 horas úteis.
          </p>
        </div>

        <div className="contact-grid">
          {/* Informações laterais de contato */}
          <div className="contact-info-panel">
            <h3 className="info-panel-title">Contato Oficial</h3>
            <p className="info-panel-desc">
              Estamos prontos para analisar o seu projeto e planejar a melhor estratégia de vendas para o seu negócio.
            </p>

            <div className="contact-info-list">
              <a href="mailto:contato@akasolucoes.com.br" className="info-card">
                <div className="info-card-icon">
                  <Mail size={24} />
                </div>
                <div className="info-card-content">
                  <span className="info-card-label">E-mail Comercial</span>
                  <span className="info-card-value">contato@akasolucoes.com.br</span>
                </div>
              </a>

              <div className="info-card">
                <div className="info-card-icon">
                  <Clock size={24} />
                </div>
                <div className="info-card-content">
                  <span className="info-card-label">Tempo de Resposta</span>
                  <span className="info-card-value">Em até 24h úteis</span>
                </div>
              </div>
            </div>

            <div className="mailto-helper-box">
              <h4 className="helper-title">Prefere enviar direto pelo seu e-mail?</h4>
              <p className="helper-desc">
                Clique no botão abaixo para abrir seu aplicativo de e-mail (Outlook, Gmail, etc.) com os dados pré-preenchidos.
              </p>
              <Button href={mailtoLink} variant="outline" className="mailto-btn">
                Enviar E-mail Direto
              </Button>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="contact-form-panel">
            {status === "success" ? (
              <div className="form-status-box success">
                <CheckCircle size={48} className="status-icon-success" />
                <h3 className="status-title">Mensagem Enviada!</h3>
                <p className="status-desc">
                  Recebemos seu e-mail de orçamento. Nossa equipe de especialistas vai analisar seus dados e entrará em contato em até 24 horas úteis. Obrigado!
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
                  <label htmlFor="subject">Plano de Interesse / Objetivo</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={status === "sending"}
                  >
                    <option value="Landing Page Essencial">Landing Page Essencial (R$ 997)</option>
                    <option value="Landing Page Premium">Landing Page Premium (R$ 1.597)</option>
                    <option value="Landing Page Personalizada">Landing Page Personalizada (Sob Demanda)</option>
                    <option value="Outro Serviço / Parcerias">Outro Serviço / Dúvidas</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Fale um pouco sobre o seu projeto *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Nos diga o que você vende, qual o seu objetivo com a página de vendas e se já tem um domínio..."
                    rows={6}
                    required
                    disabled={status === "sending"}
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="submit-btn"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <>
                      <div className="form-spinner"></div>
                      <span>Enviando orçamento...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Solicitar Orçamento por E-mail</span>
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
