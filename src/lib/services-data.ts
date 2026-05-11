export const services = [
  {
    slug: "redes-sociais",
    icon: "Share2",
    name: "Gestão de Redes Sociais",
    short: "Instagram, Facebook, TikTok — conteúdo profissional e relatórios mensais.",
    price: "5.000 – 15.000 MT/mês",
    long:
      "Estratégia de conteúdo, design de posts, calendário editorial, gestão da comunidade e relatórios mensais com métricas concretas.",
  },
  {
    slug: "trafego-pago",
    icon: "Megaphone",
    name: "Tráfego Pago",
    short: "Campanhas no Facebook Ads e Google Ads que trazem clientes reais.",
    price: "6.000 – 25.000 MT/mês",
    long:
      "Configuração de pixels, segmentação avançada, criativos persuasivos e optimização contínua para reduzir o custo por cliente.",
  },
  {
    slug: "websites",
    icon: "Globe",
    name: "Criação de Websites",
    short: "Sites profissionais, rápidos e optimizados para o Google.",
    price: "15.000 – 90.000 MT",
    long:
      "Sites institucionais, lojas online e landing pages — design moderno, responsivo, SEO técnico e integração com WhatsApp.",
  },
  {
    slug: "seo",
    icon: "Search",
    name: "SEO",
    short: "Apareça no topo do Google quando os seus clientes pesquisam.",
    price: "6.000 – 25.000 MT/mês",
    long:
      "Auditoria técnica, pesquisa de palavras-chave, criação de conteúdo, link building e relatórios de posicionamento.",
  },
  {
    slug: "google-meu-negocio",
    icon: "MapPin",
    name: "Google Meu Negócio",
    short: "Apareça no Google Maps em 5 dias.",
    price: "3.000 – 6.000 MT",
    long:
      "Verificação, optimização da ficha, fotografias profissionais e gestão de avaliações para ganhar visibilidade local.",
  },
  {
    slug: "ia-automacao",
    icon: "Bot",
    name: "IA & Automação",
    short: "Chatbots WhatsApp 24h e automação de marketing.",
    price: "8.000 – 22.000 MT setup",
    long:
      "Chatbots inteligentes que respondem clientes 24/7, fluxos automatizados e integração com CRM.",
  },
  {
    slug: "sistemas",
    icon: "QrCode",
    name: "Sistemas",
    short: "Cardápio digital, sistemas escolares, gestão de stock e muito mais.",
    price: "8.000 – 40.000 MT setup",
    long:
      "Desenvolvemos qualquer tipo de sistema à medida: cardápios digitais com QR Code, sistemas de gestão escolar, reservas online, controlo de stock, POS e outros. Se o seu negócio precisa de um sistema, nós fazemos.",
  },
  {
    slug: "seguranca",
    icon: "ShieldCheck",
    name: "Segurança Cibernética",
    short: "Proteja os dados do seu negócio.",
    price: "10.000 – 40.000 MT",
    long:
      "Auditoria de segurança, configuração de backups, protecção contra phishing e formação da equipa.",
  },
  {
    slug: "consultoria",
    icon: "Lightbulb",
    name: "Consultoria Digital",
    short: "Estratégia digital personalizada para o seu negócio.",
    price: "5.000 – 35.000 MT",
    long:
      "Diagnóstico completo, definição de KPIs, roadmap de transformação digital e acompanhamento mensal.",
  },
] as const;

export type Service = (typeof services)[number];
