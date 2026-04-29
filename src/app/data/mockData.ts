export interface Professional {
  id: number;
  name: string;
  role: string;
  rating: number;
  reviews: number;
  distance: number;
  available: boolean;
  verified: boolean;
  avatar: string;
  coverPhoto: string;
  skills: string[];
  portfolio: string[];
  services: { name: string; price: string }[];
  bio: string;
}

export const professionals: Professional[] = [
  {
    id: 1,
    name: "Carlos Mendonça",
    role: "Pedreiro Especialista",
    rating: 4.9,
    reviews: 127,
    distance: 3.2,
    available: true,
    verified: true,
    avatar: "https://images.unsplash.com/photo-1758874574397-e56dfcfc116d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
    coverPhoto: "https://images.unsplash.com/photo-1764803637995-deef1cac4870?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    skills: ["Reboco", "Porcelanato", "Drywall", "Rejunte", "Alvenaria"],
    portfolio: [
      "https://images.unsplash.com/photo-1722764372202-b8ae35e7d424?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
      "https://images.unsplash.com/photo-1769104397835-2297e730f361?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
      "https://images.unsplash.com/photo-1758548157378-46bc8e6dc6c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
      "https://images.unsplash.com/photo-1765371514211-9b93c204bb81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    ],
    services: [
      { name: "Assentamento de Porcelanato (m²)", price: "R$ 80" },
      { name: "Reboco Externo (m²)", price: "R$ 45" },
      { name: "Instalação de Drywall (m²)", price: "R$ 60" },
      { name: "Rejunte Completo (m²)", price: "R$ 25" },
    ],
    bio: "Pedreiro com 15 anos de experiência em reformas residenciais e comerciais. Especializado em porcelanato, drywall e alvenaria estrutural.",
  },
  {
    id: 2,
    name: "Roberto Silva",
    role: "Eletricista Certificado",
    rating: 4.8,
    reviews: 89,
    distance: 1.5,
    available: true,
    verified: true,
    avatar: "https://images.unsplash.com/photo-1740754699699-c8b4b1635faf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
    coverPhoto: "https://images.unsplash.com/photo-1660330590022-9f4ff56b63f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    skills: ["Elétrica Residencial", "CREA", "Quadro de Distribuição", "Tomadas"],
    portfolio: [
      "https://images.unsplash.com/photo-1660330590022-9f4ff56b63f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
      "https://images.unsplash.com/photo-1765371514211-9b93c204bb81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
      "https://images.unsplash.com/photo-1764803637995-deef1cac4870?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
      "https://images.unsplash.com/photo-1769104397835-2297e730f361?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    ],
    services: [
      { name: "Instalação de Chuveiro", price: "R$ 150" },
      { name: "Troca de Quadro Elétrico", price: "R$ 350" },
      { name: "Instalação de Tomadas (un)", price: "R$ 80" },
      { name: "Diagnóstico Elétrico", price: "R$ 100" },
    ],
    bio: "Eletricista com registro CREA/CONFEA e 10 anos de experiência. Atendo residências e comércios com qualidade e segurança garantidas.",
  },
  {
    id: 3,
    name: "Ana Ferreira",
    role: "Pintora Profissional",
    rating: 4.7,
    reviews: 64,
    distance: 5.8,
    available: false,
    verified: true,
    avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
    coverPhoto: "https://images.unsplash.com/photo-1674649207083-281c2517ab49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    skills: ["Pintura Residencial", "Textura", "Grafiato", "Massa Corrida"],
    portfolio: [
      "https://images.unsplash.com/photo-1674649207083-281c2517ab49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
      "https://images.unsplash.com/photo-1722764372202-b8ae35e7d424?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
      "https://images.unsplash.com/photo-1758548157378-46bc8e6dc6c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
      "https://images.unsplash.com/photo-1765371514211-9b93c204bb81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    ],
    services: [
      { name: "Pintura Simples (m²)", price: "R$ 15" },
      { name: "Pintura com Textura (m²)", price: "R$ 35" },
      { name: "Aplicação de Grafiato (m²)", price: "R$ 40" },
      { name: "Massa Corrida (m²)", price: "R$ 20" },
    ],
    bio: "Pintora com 8 anos de experiência. Trabalho com tintas de alta qualidade e ofereço garantia de 2 anos nos serviços realizados.",
  },
  {
    id: 4,
    name: "Marcos Oliveira",
    role: "Encanador",
    rating: 4.6,
    reviews: 43,
    distance: 2.1,
    available: true,
    verified: false,
    avatar: "https://images.unsplash.com/photo-1768321916212-17ae334a3d63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
    coverPhoto: "https://images.unsplash.com/photo-1768321916212-17ae334a3d63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    skills: ["Hidráulica", "Vazamentos", "Desentupimento", "Aquecedor"],
    portfolio: [
      "https://images.unsplash.com/photo-1768321916212-17ae334a3d63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
      "https://images.unsplash.com/photo-1758548157378-46bc8e6dc6c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
      "https://images.unsplash.com/photo-1765371514211-9b93c204bb81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
      "https://images.unsplash.com/photo-1764803637995-deef1cac4870?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    ],
    services: [
      { name: "Desentupimento", price: "R$ 120" },
      { name: "Conserto de Vazamento", price: "R$ 90" },
      { name: "Instalação de Aquecedor", price: "R$ 200" },
      { name: "Troca de Torneira", price: "R$ 70" },
    ],
    bio: "Encanador com 12 anos de experiência. Atendimento emergencial 24h. Especializado em hidráulica residencial e comercial.",
  },
];

export const categories = [
  { id: 1, label: "Elétrica", icon: "⚡" },
  { id: 2, label: "Hidráulica", icon: "🔧" },
  { id: 3, label: "Pintura", icon: "🎨" },
  { id: 4, label: "Pedreiro", icon: "🧱" },
  { id: 5, label: "Marcenaria", icon: "🪚" },
  { id: 6, label: "Gesseiro", icon: "🏗️" },
  { id: 7, label: "Serralheiro", icon: "🔩" },
  { id: 8, label: "Paisagismo", icon: "🌿" },
];

export const mockMessages = [
  {
    id: 1,
    sender: "system",
    text: "Serviço: Assentamento de Porcelanato\nUrgência: Próxima Semana\nDescrição: Preciso reformar o banheiro, trocar o piso e colocar porcelanato novo na parede.",
    time: "09:30",
  },
  {
    id: 2,
    sender: "professional",
    text: "Olá! Vi seu pedido. Posso sim fazer esse serviço. Tem como você me mandar algumas fotos do local?",
    time: "09:35",
  },
  {
    id: 3,
    sender: "client",
    text: "Boa tarde! Sim, claro! Vou tirar algumas fotos agora e te mando.",
    time: "09:40",
  },
  {
    id: 4,
    sender: "professional",
    text: "Perfeito! Assim que ver as fotos já te passo um orçamento mais preciso. Estou disponível para ir ao local na quinta-feira.",
    time: "09:42",
  },
  {
    id: 5,
    sender: "client",
    text: "Quinta fica ótimo! Que horário seria melhor para você?",
    time: "09:45",
  },
];

export const contactsList = [
  {
    id: 1,
    name: "João Carlos",
    avatar: "https://images.unsplash.com/photo-1758874574397-e56dfcfc116d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=100",
    lastMessage: "Quinta fica ótimo! Que horário seria melhor?",
    time: "09:45",
    unread: 2,
  },
  {
    id: 2,
    name: "Maria Souza",
    avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=100",
    lastMessage: "Qual o valor para reformar a cozinha?",
    time: "Ontem",
    unread: 0,
  },
  {
    id: 3,
    name: "Pedro Lima",
    avatar: "https://images.unsplash.com/photo-1740754699699-c8b4b1635faf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=100",
    lastMessage: "Obrigado! Serviço ficou excelente.",
    time: "Seg",
    unread: 0,
  },
];
