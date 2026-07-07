import React from "react";
import { MessageCircle } from "lucide-react";
import "./WhatsAppFloat.css";

const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da AKA Soluções e quero receber minha proposta para vender mais com Landing Page + Criativos + Tráfego.";

export const WhatsAppFloat: React.FC = () => {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={href}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircle size={22} />
      <span>Conversar no WhatsApp</span>
    </a>
  );
};

export default WhatsAppFloat;
