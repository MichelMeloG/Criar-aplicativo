Compreendido! Se o objetivo é alimentar uma IA geradora de código visual (como Lovable, v0.dev ou Cursor), nós precisamos mudar a linguagem. Essas IAs pensam em "caixas", "linhas", "colunas", "espaçamentos" e "estados". 

Quanto mais detalhes técnicos de interface (UI) e experiência (UX) nós fornecermos, menos a IA vai "alucinar" e mais o design vai ficar com cara de aplicativo profissional de verdade.

Aqui está o PRD de Design **Nível Sênior**, extremamente detalhado, focado na arquitetura da interface, componentes e micro-interações. Pode copiar e colar tudo isso diretamente no prompt do Lovable.

---

# UI/UX Master Blueprint: App de Conexão para Construção Civil

## 1. Design System e Tokens Visuais
A interface deve seguir os princípios do Material Design 3 misturado com a estética clean de apps como iFood e Airbnb.
*   **Modo:** Desenvolver interface predominantemente "Light Mode" para transmitir clareza e limpeza.
*   **Tipografia:** `Inter` ou `Roboto`. Usar pesos variados: `Bold` (700) para Títulos, `Medium` (500) para subtítulos e botões, `Regular` (400) para corpo de texto.
*   **Paleta de Cores:**
    *   `Primary`: Azul Safira (`#0F52BA`) - Usado em botões principais, ícones ativos e links.
    *   `Secondary`: Laranja Segurança (`#FF7518`) - Usado para alertas, ícones de notificações e botões de orçamento.
    *   `Success`: Verde Esmeralda (`#10B981`) - Para status "Disponível" e mensagens de sucesso.
    *   `Background`: Off-white (`#F9FAFB`) - Cor de fundo do app.
    *   `Surface`: Branco (`#FFFFFF`) - Cor de fundo dos Cartões e Modais (com `box-shadow` leve: `0 4px 6px rgba(0,0,0,0.05)`).
    *   `Text`: Cinza Chumbo (`#1F2937`) para títulos, Cinza Médio (`#6B7280`) para descrições.
*   **Bordas (Border Radius):**
    *   Botões e Inputs: `8px` (Arredondamento sutil).
    *   Cartões, Modais e Imagens: `16px` (Arredondamento amigável).

---

## 2. Componentes Globais (Reutilizáveis)
*   **Selo de Confiança (Verified Badge):** Um ícone de "Shield" (escudo) azul com um check branco no meio, com 16x16px, posicionado sempre à direita do nome do profissional.
*   **Bottom Navigation (Mobile):** Fundo branco, fixo no rodapé, com sombra superior. Contém 4 itens (Ícone + Label pequena): Home, Buscar, Mensagens, Perfil. O item ativo recebe a cor `Primary`.
*   **Tags/Pills:** Pequenas caixas de texto com fundo cinza claro (`#F3F4F6`), texto cinza escuro, border-radius `100px` (totalmente redondas nas pontas). Ex: `[Porcelanato]`, `[Elétrica]`.

---

## 3. Fluxo 1: Onboarding e Autenticação
**Tela 1.1: Boas-vindas (Splash/Onboarding)**
*   **Layout:** Coluna única (Flex-col), centralizada, preenchendo 100% da tela (h-screen). Fundo `#F9FAFB`.
*   **Topo:** Logotipo do App em SVG (Tamanho grande).
*   **Centro:** Título H1: "Construa ou Reforme com Segurança". Subtítulo texto cinza: "Selecione o seu perfil para começar."
*   **Ação:** Dois grandes "Cards Botões" clicáveis.
    *   *Card 1:* Ícone de Ferramenta (esq), Título "Quero Contratar" (centro), seta chevron-right (dir). Fundo branco, borda fina cinza.
    *   *Card 2:* Ícone de Capacete, Título "Sou Profissional". Fundo branco, borda fina cinza.

**Tela 1.2: Login/Cadastro**
*   **Layout:** Fundo branco.
*   **Header:** Botão "Voltar" (seta esquerda) no canto superior esquerdo.
*   **Inputs:** Campo "E-mail" e "Senha" flutuantes (label sobe ao focar). Altura `48px`, borda cinza clara.
*   **Botão Principal:** Largura 100%, cor `Primary`, texto branco "Entrar".
*   **Divider:** Linha cinza horizontal com texto "OU" no meio.
*   **Social Login:** Botão "Continuar com Google" (Borda preta, texto preto, logo do Google à esquerda).

---

## 4. Fluxo 2: Jornada do Cliente (Contratante)
**Tela 2.1: Home (O "iFood" da Construção)**
*   **Header (Fixo no topo):** 
    *   Linha 1: Avatar do cliente (32x32px), "Olá, João", Ícone de Sino (com bolinha vermelha de notificação).
    *   Linha 2: "📍 Av. Paulista, São Paulo" (Texto clicável com ícone de mapa).
*   **Input de Busca:** Fica logo abaixo do Header. Fundo branco, ícone de lupa à esquerda, placeholder "Buscar encanador, pedreiro...". Borda radius `100px`.
*   **Segmented Control (Toggle):** Dois botões ocupando 50% da largura cada. `Serviços Rápidos` (Fundo Azul, Texto Branco) e `Grandes Obras` (Fundo transparente, Texto Cinza).
*   **Carrossel Horizontal de Categorias:** Container com rolagem `overflow-x-auto`. Ícones em círculos grandes (64x64px) com cor de fundo super clara, texto pequeno centralizado abaixo (ex: Pintura, Elétrica).
*   **Feed "Profissionais na sua Região" (Lista Vertical):**
    *   **Professional Card:** Fundo branco, Sombra leve, Padding `16px`, Margem bottom `16px`.
        *   *Row 1:* Avatar Circular (48x48px) | Coluna: Nome em negrito + Badge Escudo Azul | Nota (⭐ 4.9).
        *   *Row 2:* Tag de Status verde (Bolinha verde + "Disponível") | Distância (📍 a 3.2 km).
        *   *Row 3 (Mini-galeria):* Container flexível com 3 fotos quadradas (aspect-ratio 1:1) do portfólio, com border-radius `8px`. Imagens não devem vazar do card.

**Tela 2.2: Perfil do Autônomo (O "LinkedIn")**
*   **Header (Hero):** 
    *   Foto de capa cobrindo os primeiros `150px` do topo.
    *   Avatar (96x96px) sobreposto entre a capa e o fundo branco, com borda branca grossa (`4px`).
*   **Info Section:** Nome centralizado em H2 + Badge Escudo. Subtítulo: "Pedreiro Especialista".
*   **Container de Tags:** Lista horizontal em wrap com as tags (ex: `Reboco`, `Porcelanato`).
*   **Section "Antes e Depois":** 
    *   Título "Portfólio".
    *   Grid `grid-cols-2` com `gap-4`. Cada foto tem cantos arredondados (`16px`).
*   **Section "Preços Base":**
    *   Lista de itens. Cada item é uma linha com `Flex-between`: Texto à esquerda ("Instalação de Chuveiro") e Preço à direita em negrito ("R$ 150"). Separador de linha pontilhada fina.
*   **Bottom Bar Fixa:** Uma `div` fixa no rodapé da tela, fundo branco, padding `16px`, com sombra `box-shadow: 0 -4px 6px rgba(0,0,0,0.1)`. Contém um único botão 100% largura, cor `Secondary` (Laranja), texto: "Pedir Orçamento no Chat".

---

## 5. Fluxo 3: Comunicação e Fechamento
**Tela 3.1: Bottom Sheet de Qualificação (Pré-Chat)**
*(Aparece ao clicar em "Pedir Orçamento")*
*   **Container:** Sobe da parte inferior da tela, cobrindo 70% da altura. Fundo branco, cantos superiores arredondados (`24px`). Overlay preto translúcido no fundo.
*   **Handle:** Pequeno traço cinza horizontal no topo central para indicar que o usuário pode arrastar para baixo para fechar.
*   **Passo 1:** Dropdown nativo (Select): "Qual o serviço desejado?"
*   **Passo 2:** Chips de Seleção (Radio buttons customizados): 3 caixas clicáveis em linha: `Urgente`, `Próxima Semana`, `Apenas Cotação`. A ativa ganha borda e texto Azuis.
*   **Passo 3:** Textarea (Input longo de texto): "Descreva o problema". Altura `100px`.
*   **Botão:** Laranja 100% largura: "Iniciar Chat Seguro".

**Tela 3.2: Chat In-App (Sala de Conversa)**
*   **Header Fixo:** Botão voltar, Avatar pequeno do profissional, Nome, e Status "Online". Fundo branco, separador inferior fino.
*   **Área de Mensagens (Fundo `#F3F4F6`):**
    *   *Data:* Badge centralizada "Hoje".
    *   *Mensagem do Sistema:* Um Card branco centralizado com o resumo do formulário preenchido no Pré-Chat.
    *   *Balão Cliente (Direita):* Fundo Azul Primário, Texto branco. Canto inferior direito reto (`0px`), os outros `16px`.
    *   *Balão Profissional (Esquerda):* Fundo Branco, Texto Cinza chumbo. Canto inferior esquerdo reto (`0px`).
*   **Input Area (Fixa no rodapé):** Fundo branco. Botão "+" (Clip de anexo) redondo à esquerda. Campo de texto arredondado ocupando o resto do espaço. Botão "Enviar" (Ícone de avião de papel) azul no lado direito, dentro ou ao lado do input.

---

## 6. Fluxo 4: Profissional e Retenção
**Tela 4.1: Painel do Profissional (Dashboard)**
*   **Header:** "Resumo da sua conta".
*   **Premium Banner (Card de Destaque):** Fundo gradiente linear Azul-Escuro para Azul-Claro. Texto branco. "Quer aparecer 3x mais? Conheça o Plano Premium". Botão amarelo interno.
*   **KPI Cards (Grid 2 colunas):** Dois cartões brancos, borda fina.
    *   *Card 1:* Ícone de olho + Número grande (ex: "45") + Texto "Visitas ao perfil".
    *   *Card 2:* Ícone de chat + Número (ex: "12") + Texto "Contatos".
*   **Lista "Meus Contatos":** Design igual ao WhatsApp. Foto do cliente, Nome, Preview da última mensagem, e Data à direita.

---

**Comando Final para anexar ao Prompt no Lovable:**
*"I am building an app that connects clients to construction workers (like an iFood for plumbers/electricians). Use this PRD to generate a highly polished, responsive mobile web interface using React/Next.js and Tailwind CSS. Start by generating the Home Screen (Tela 2.1) and the Professional Profile (Tela 2.2). Ensure all Tailwind utility classes follow the exact border-radius, color tokens, and layout guidelines specified above. Make it look ready for production."*