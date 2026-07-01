import { Header } from "./components/Header/Header";
import { Hero } from "./sections/Hero/Hero";
import { Benefits } from "./sections/Benefits/Benefits";
import { Portfolio } from "./sections/Portfolio/Portfolio";
import { Process } from "./sections/Process/Process";
import { Pricing } from "./sections/Pricing/Pricing";
import { Testimonials } from "./sections/Testimonials/Testimonials";
import { FAQ } from "./sections/FAQ/FAQ";
import { Contact } from "./sections/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="app-wrapper">
      {/* Cabeçalho de Navegação Fixo */}
      <Header />

      {/* Conteúdo Principal */}
      <main>
        {/* Seção de Entrada / Hero */}
        <Hero />

        {/* Diferenciais / Benefícios */}
        <Benefits />

        {/* Área de Portfólio de Landing Pages Já Feitas */}
        <Portfolio />

        {/* Metodologia de Criação / Passo a Passo */}
        <Process />

        {/* Seção de Valores / Planos */}
        <Pricing />

        {/* Depoimentos de Clientes Reais */}
        <Testimonials />

        {/* Dúvidas Frequentes / FAQ */}
        <FAQ />

        {/* Formulário de Contato focado em E-mail */}
        <Contact />
      </main>

      {/* Rodapé do Site */}
      <Footer />
    </div>
  );
}

export default App;