# AKA Soluções - Landing Pages de Alta Conversão
Este é o repositório oficial da landing page corporativa e de vendas da **AKA Soluções**. Um site profissional, de alto impacto visual e totalmente responsivo, projetado em React e TypeScript para promover e vender landing pages premium.
---
## 🎨 Design & Cores
O site foi construído sob um design system moderno utilizando as cores da marca:
- **Roxo Principal:** `#7c3aed` (Violeta vibrante para destaques, CTAs e foco visual)
- **Roxo Escuro/Profundo:** `#080214` (Fundo elegante que confere profundidade estética)
- **Branco/Lavanda:** `#ffffff` e `#f5f3ff` (Para áreas de contraste de textos e legibilidade)
- **Tipografia:** Uso das fontes *Plus Jakarta Sans* (para títulos dinâmicos) e *Inter* (para textos fluidos de leitura).
---
## 🛠️ Tecnologias Utilizadas
O projeto utiliza tecnologias modernas de desenvolvimento frontend:
- **React 19** - Biblioteca padrão de interfaces
- **TypeScript** - Tipagem estática para robustez do código
- **Vite** - Build tool e servidor de desenvolvimento ultra veloz
- **CSS Vanilla (Modular)** - Design customizado, rápido e leve (sem dependências pesadas de frameworks de CSS)
- **Lucide React** - Pacote de ícones vetorizados profissionais
---
## 📂 Estrutura de Diretórios
O código-fonte está separado e organizado de forma modular dentro da pasta `src/`:
```text
src/
├── assets/                 # Imagens, logotipos e vetores
├── components/             # Componentes reutilizáveis compartilhados
│   ├── Header/             # Navegação fixa inteligente com blur
│   ├── Footer/             # Rodapé informativo com contatos
│   └── UI/                 # Componentes genéricos de Interface (ex: Button)
├── sections/               # Seções autônomas da Landing Page
│   ├── Hero/               # Banner principal com CTAs e Mockup interativo
│   ├── Benefits/           # Diferenciais competitivos em cards
│   ├── Portfolio/          # Galeria de landing pages entregues (com filtros)
│   ├── Process/            # Linha do tempo do processo de desenvolvimento
│   ├── Pricing/            # Tabela de planos e valores detalhados
│   ├── Testimonials/       # Depoimentos de clientes satisfeitos
│   ├── FAQ/                # Sanamento de dúvidas comuns via acordeão
│   └── Contact/            # Formulário e informações de contato via e-mail
├── App.tsx                 # Montagem sequencial das seções da Landing Page
├── index.css               # Variáveis CSS globais, reset e animações
└── main.tsx                # Ponto de entrada de montagem da DOM
```
---
## 🚀 Como Executar o Projeto Localmente
Siga os passos abaixo para baixar as dependências e colocar o site para rodar na sua máquina:
### 1. Pré-requisitos
Certifique-se de ter o **Node.js** (versão 18 ou superior) instalado em seu computador.
### 2. Instalar Dependências
Abra o terminal na raiz do projeto e execute:
```bash
npm install
```
### 3. Iniciar o Servidor de Desenvolvimento
Inicie o servidor de testes local executando:
```bash
npm run dev
```
Acesse o endereço exibido no terminal (geralmente **http://localhost:5173**) em seu navegador.
### 4. Build de Produção
Para compilar e otimizar os arquivos para publicação em sua hospedagem, execute:
```bash
npm run build
```
O build será gerado na pasta `/dist`, contendo os arquivos estáticos de altíssima performance.
---
## 📌 Como Adicionar Novas Landing Pages Criadas?
A seção de Portfólio foi desenvolvida para ser facilmente editável sem precisar alterar estruturas complexas de HTML/React.
1. Abra o arquivo `src/sections/Portfolio/Portfolio.tsx`.
2. Logo no início do arquivo, localize o array constante `PORTFOLIO_ITEMS`.
3. Insira um novo objeto no final do array contendo as informações da landing page que deseja cadastrar:
```typescript
{
  id: 7, // Próximo ID numérico sequencial
  title: "Nome do Cliente ou Projeto",
  category: "vendas", // Categorias aceitas: 'vendas', 'leads', 'saas', 'institucional'
  categoryLabel: "Página de Vendas", // Rótulo visível na listagem
  description: "Descreva brevemente o nicho do site ou diferencial criado.",
  gradient: "linear-gradient(135deg, #7c3aed 0%, #db2777 100%)", // Gradiente de cores de fundo
  imagePath: "/assets/projeto.jpg", // Opcional: imagem real caso possua
  link: "https://link-do-site-real.com.br", // Link de visualização da LP
}
```
4. Salve o arquivo. Os filtros e a renderização do novo card de projeto no portfólio serão atualizados automaticamente!
---
## ✉️ Contato e Suporte
Para dúvidas, solicitações ou suporte com o código:
- **E-mail de Contato:** [contato@akasolucoes.com.br](mailto:contato@akasolucoes.com.br)
- **Horário de Atendimento:** Segunda a Sexta, das 9h às 18h