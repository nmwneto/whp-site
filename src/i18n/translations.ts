export type Locale = 'pt' | 'en';

export const translations: Record<Locale, Translations> = {
  pt: {
    // Navbar
    nav: {
      home: 'Home',
      services: 'Serviços',
      projects: 'Projetos',
      about: 'Sobre',
      contact: 'Contato',
      startProject: 'Iniciar projeto',
      serviceLinks: [
        'Identidade de Marca',
        'Web Design & Dev',
        'SEO & Conteúdo',
        'Social Media & Performance',
        'Projetos Personalizados',
      ],
    },

    // Hero
    hero: {
      badge: 'Disponível para novos projetos',
      heading: 'Cresça sua marca ou produtos com estratégia, design e tecnologia.',
      subtitle: 'Auxiliamos empresas a alavancar seus negócios utilizando metodologias criativas.',
      cta: 'Iniciar projeto',
      ctaSecondary: 'Saiba mais',
      orbitLabels: [
        'Identidade de Marca', 'Web Design & Dev', 'SEO & Conteúdo', 'Social Media & Performance',
        'Estratégia', 'Growth', 'Performance', 'Design',
      ],
    },

    // Stats
    stats: {
      heading: 'Somos o parceiro estratégico ideal para gerar resultados e o crescimento exponencial do seu negócio.',
      tags: ['Criatividade', 'Inovação', 'Estratégia', 'Tecnologia'],
      labels: ['Projetos realizados', 'Anos de experiência de mercado', 'Países atendidos'],
    },

    // Services
    services: {
      label: 'O que fazemos',
      heading: 'Serviços',
      subtitle: 'Soluções completas para marcas que querem se destacar no digital.',
      items: [
        { title: 'Identidade de Marca', desc: 'Logotipos, paletas, tipografia e guidelines que traduzem a essência da sua marca em cada ponto de contato.' },
        { title: 'Web Design & Dev', desc: 'Sites de alta performance com design único, responsivos, otimizados e construídos com tecnologia de ponta.' },
        { title: 'SEO & Conteúdo', desc: 'Estratégias de otimização para motores de busca que colocam a sua marca nas primeiras posições do Google.' },
        { title: 'Social Media & Performance', desc: 'Gestão de redes sociais com conteúdo estratégico, design consistente e análise de métricas para crescimento real.' },
        { title: 'Projetos Personalizados', desc: 'Soluções sob medida que combinam diferentes especialidades para atender demandas únicas e complexas do seu negócio.' },
      ],
    },

    // CTA Banner
    ctaBanner: {
      heading: 'Pronto para transformar sua marca?',
      subtitle: 'Vamos conversar sobre o seu projeto e criar algo extraordinário juntos.',
      cta: 'Iniciar projeto',
      ctaSecondary: 'Fale no WhatsApp',
    },

    // Portfolio
    portfolio: {
      label: 'Portfólio',
      heading: 'Projetos que transformaram marcas',
      subtitle: 'Conheça alguns dos trabalhos que entregamos para nossos clientes.',
      tags: {
        brandIdentity: 'Identidade de Marca',
        webDesign: 'Web Design',
      },
    },

    // Team
    team: {
      label: 'Quem faz acontecer',
      heading: 'Sobre o time',
      subtitle: 'Uma equipa multidisciplinar unida por um objetivo: transformar marcas em referência através de design e tecnologia.',
      roles: [
        'Designer Multidisciplinar',
        'Designer de Produto',
        'Especialista em SEO',
        'Engenheiro de IA',
        'Engenheiro de Negócios',
        'Engenheiro de Dados',
      ],
      bios: [
        'Lidera a visão criativa e estratégica de cada projeto, unindo branding, UI/UX e direção de arte.',
        'Especialista em experiência do usuário e design de produto com foco em usabilidade e conversão.',
        'Conecta marcas ao público certo com estratégias de conteúdo e otimização orientadas a dados.',
        'Desenvolve soluções inteligentes com inteligência artificial aplicada a automação, dados e performance.',
        'Estrutura modelos de negócio e estratégias comerciais que conectam a visão criativa aos resultados de mercado.',
        'Transforma dados em insights acionáveis com pipelines robustos, analytics e inteligência orientada a resultados.',
      ],
    },

    // Testimonials
    testimonials: {
      label: 'Depoimentos',
      heading: 'O que nossos clientes dizem',
      subtitle: 'Resultados reais de marcas que confiaram no nosso trabalho.',
      items: [
        { quote: 'A WHP transformou completamente a presença digital da nossa empresa. O resultado superou todas as expectativas — nosso tráfego orgânico triplicou em 4 meses.', role: 'CEO' },
        { quote: 'Profissionalismo e criatividade em cada detalhe. A identidade visual que criaram para nós transmite exatamente o que somos. Recomendo de olhos fechados.', role: 'Diretora de Marketing' },
        { quote: 'O site que a WHP desenvolveu não é apenas bonito — ele converte. Nossas vendas online aumentaram 60% no primeiro trimestre após o lançamento.', role: 'Fundador' },
      ],
    },

    // Footer
    footer: {
      brand: 'Estratégia, design e tecnologia para marcas que querem crescer e se destacar no mercado digital.',
      navTitle: 'Navegação',
      servicesTitle: 'Serviços',
      contactTitle: 'Contato',
      servicesList: ['Identidade de Marca', 'Web Design & Dev', 'SEO & Performance', 'Social Media'],
      location: 'Brasil & Internacional',
      copyright: 'WHP — We Have a Plan. Todos os direitos reservados.',
      privacy: 'Política de Privacidade',
      terms: 'Termos de Uso',
    },

    // About page
    aboutPage: {
      label: 'Sobre nós',
      heading: 'We Have a Plan',
      intro: 'Somos uma agência de design e tecnologia que transforma marcas em referências digitais. Combinamos estratégia, criatividade e execução técnica para entregar resultados reais.',
      missionLabel: 'Nossa missão',
      missionTitle: 'Impulsionar negócios através de design e tecnologia',
      missionText: 'Acreditamos que toda marca tem potencial para se tornar referência. Nossa missão é desbloquear esse potencial com estratégias criativas, design de excelência e soluções tecnológicas que geram crescimento sustentável.',
      visionLabel: 'Nossa visão',
      visionTitle: 'Ser a parceira estratégica de marcas ambiciosas',
      visionText: 'Queremos ser reconhecidos como a agência que empresas procuram quando precisam de mais do que bonito — precisam de resultados. Do branding ao código, entregamos soluções completas que fazem marcas crescerem de verdade.',
      valuesLabel: 'Valores',
      valuesTitle: 'O que nos guia',
      values: [
        { title: 'Estratégia primeiro', desc: 'Cada decisão de design e tecnologia é fundamentada em dados, objetivos de negócio e entendimento profundo do público-alvo.' },
        { title: 'Design com propósito', desc: 'Não criamos apenas coisas bonitas — criamos experiências visuais que comunicam, engajam e convertem.' },
        { title: 'Tecnologia de ponta', desc: 'Utilizamos as melhores ferramentas e frameworks do mercado para entregar produtos rápidos, escaláveis e seguros.' },
        { title: 'Resultados mensuráveis', desc: 'Tudo o que fazemos é orientado a métricas. Relatórios claros, KPIs definidos e otimização contínua.' },
      ],
      timelineLabel: 'Trajetória',
      timelineTitle: 'Nossa história',
      milestones: [
        { year: '2018', text: 'Fundação da WHP com foco em estratégia, design e tecnologia para marcas.' },
        { year: '2019', text: 'Internacionalização dos trabalhos, atendendo clientes fora do Brasil.' },
        { year: '2022', text: 'Conquista de clientes de grande porte, consolidando a atuação no mercado.' },
        { year: '2026', text: 'Rebrand completo da marca — nova identidade visual, posicionamento e site.' },
      ],
      teamLabel: 'Quem faz acontecer',
      teamTitle: 'Nosso time',
      teamSubtitle: 'Uma equipe multidisciplinar unida por um objetivo: transformar marcas em referência.',
      ctaTitle: 'Vamos trabalhar juntos?',
      ctaText: 'Conheça nossos serviços ou entre em contato para discutir o seu projeto.',
      ctaPrimary: 'Fale conosco',
      ctaSecondary: 'Ver serviços',
    },

    // Contact page
    contactPage: {
      label: 'Contato',
      heading: 'Vamos conversar?',
      subtitle: 'Conte-nos sobre o seu projeto. Respondemos em até 24 horas com uma proposta personalizada.',
      channels: [
        { title: 'E-mail', value: 'contato@whp.com', desc: 'Para propostas, orçamentos e parcerias comerciais.' },
        { title: 'WhatsApp', value: 'Fale agora', desc: 'Atendimento rápido para tirar dúvidas e alinhar projetos.' },
        { title: 'Instagram', value: '@whp.agency', desc: 'Acompanhe nosso trabalho e bastidores dos projetos.' },
        { title: 'LinkedIn', value: 'WHP Agency', desc: 'Conecte-se conosco para networking e oportunidades B2B.' },
      ],
      formTitle: 'Envie sua mensagem',
      formSubtitle: 'Preencha o formulário abaixo e entraremos em contato o mais breve possível.',
      placeholderName: 'Seu nome',
      placeholderEmail: 'Seu e-mail',
      placeholderService: 'Selecione o serviço',
      serviceOptions: ['Identidade de Marca', 'Web Design & Dev', 'SEO & Conteúdo', 'Social Media & Performance', 'Outro'],
      placeholderMessage: 'Conte-nos sobre o seu projeto...',
      submit: 'Enviar mensagem',
      successTitle: 'Mensagem enviada!',
      successText: 'Retornaremos em até 24 horas.',
      whatsappTitle: 'Prefere conversar diretamente?',
      whatsappText: 'Agende uma call de 15 minutos sem compromisso pelo WhatsApp. Respondemos rapidamente.',
      whatsappBtn: 'Abrir WhatsApp',
      locationLabel: 'Localização',
      locationValue: 'Brasil & Internacional',
      hoursLabel: 'Horário',
      hoursValue: 'Seg — Sex, 09:00 — 18:00',
      responseLabel: 'Tempo de resposta',
      responseValue: 'Até 24 horas úteis',
    },
  },

  en: {
    // Navbar
    nav: {
      home: 'Home',
      services: 'Services',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
      startProject: 'Start a project',
      serviceLinks: [
        'Brand Identity',
        'Web Design & Dev',
        'SEO & Content',
        'Social Media & Performance',
        'Custom Projects',
      ],
    },

    // Hero
    hero: {
      badge: 'Available for new projects',
      heading: 'Grow your brand or products with strategy, design and technology.',
      subtitle: 'We help companies leverage their businesses using creative methodologies.',
      cta: 'Start a project',
      ctaSecondary: 'Learn more',
      orbitLabels: [
        'Brand Identity', 'Web Design & Dev', 'SEO & Content', 'Social Media & Performance',
        'Strategy', 'Growth', 'Performance', 'Design',
      ],
    },

    // Stats
    stats: {
      heading: 'We are the ideal strategic partner to drive results and exponential growth for your business.',
      tags: ['Creativity', 'Innovation', 'Strategy', 'Technology'],
      labels: ['Projects delivered', 'Years of market experience', 'Countries served'],
    },

    // Services
    services: {
      label: 'What we do',
      heading: 'Services',
      subtitle: 'Complete solutions for brands that want to stand out in the digital world.',
      items: [
        { title: 'Brand Identity', desc: 'Logos, palettes, typography and guidelines that translate your brand\'s essence into every touchpoint.' },
        { title: 'Web Design & Dev', desc: 'High-performance websites with unique design, responsive, optimized and built with cutting-edge technology.' },
        { title: 'SEO & Content', desc: 'Search engine optimization strategies that put your brand at the top of Google results.' },
        { title: 'Social Media & Performance', desc: 'Social media management with strategic content, consistent design and metrics analysis for real growth.' },
        { title: 'Custom Projects', desc: 'Tailored solutions that combine different specialties to meet unique and complex business demands.' },
      ],
    },

    // CTA Banner
    ctaBanner: {
      heading: 'Ready to transform your brand?',
      subtitle: 'Let\'s talk about your project and create something extraordinary together.',
      cta: 'Start a project',
      ctaSecondary: 'Chat on WhatsApp',
    },

    // Portfolio
    portfolio: {
      label: 'Portfolio',
      heading: 'Projects that transformed brands',
      subtitle: 'Discover some of the work we\'ve delivered for our clients.',
      tags: {
        brandIdentity: 'Brand Identity',
        webDesign: 'Web Design',
      },
    },

    // Team
    team: {
      label: 'Who makes it happen',
      heading: 'About the team',
      subtitle: 'A multidisciplinary team united by one goal: turning brands into references through design and technology.',
      roles: [
        'Multidisciplinary Designer',
        'Product Designer',
        'SEO Specialist',
        'AI Engineer',
        'Business Engineer',
        'Data Engineer',
      ],
      bios: [
        'Leads the creative and strategic vision of each project, combining branding, UI/UX and art direction.',
        'Specialist in user experience and product design focused on usability and conversion.',
        'Connects brands to the right audience with data-driven content strategies and optimization.',
        'Develops intelligent solutions with AI applied to automation, data and performance.',
        'Structures business models and commercial strategies that connect creative vision to market results.',
        'Transforms data into actionable insights with robust pipelines, analytics and results-driven intelligence.',
      ],
    },

    // Testimonials
    testimonials: {
      label: 'Testimonials',
      heading: 'What our clients say',
      subtitle: 'Real results from brands that trusted our work.',
      items: [
        { quote: 'WHP completely transformed our company\'s digital presence. The result exceeded all expectations — our organic traffic tripled in 4 months.', role: 'CEO' },
        { quote: 'Professionalism and creativity in every detail. The visual identity they created for us conveys exactly who we are. I recommend without hesitation.', role: 'Marketing Director' },
        { quote: 'The website WHP developed is not just beautiful — it converts. Our online sales increased 60% in the first quarter after launch.', role: 'Founder' },
      ],
    },

    // Footer
    footer: {
      brand: 'Strategy, design and technology for brands that want to grow and stand out in the digital market.',
      navTitle: 'Navigation',
      servicesTitle: 'Services',
      contactTitle: 'Contact',
      servicesList: ['Brand Identity', 'Web Design & Dev', 'SEO & Performance', 'Social Media'],
      location: 'Brazil & International',
      copyright: 'WHP — We Have a Plan. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
    },

    // About page
    aboutPage: {
      label: 'About us',
      heading: 'We Have a Plan',
      intro: 'We are a design and technology agency that transforms brands into digital references. We combine strategy, creativity and technical execution to deliver real results.',
      missionLabel: 'Our mission',
      missionTitle: 'Empowering businesses through design and technology',
      missionText: 'We believe every brand has the potential to become a reference. Our mission is to unlock that potential with creative strategies, design excellence and technological solutions that drive sustainable growth.',
      visionLabel: 'Our vision',
      visionTitle: 'Being the strategic partner of ambitious brands',
      visionText: 'We want to be recognized as the agency companies seek when they need more than pretty — they need results. From branding to code, we deliver complete solutions that make brands truly grow.',
      valuesLabel: 'Values',
      valuesTitle: 'What guides us',
      values: [
        { title: 'Strategy first', desc: 'Every design and technology decision is grounded in data, business objectives and deep understanding of the target audience.' },
        { title: 'Design with purpose', desc: 'We don\'t just create beautiful things — we create visual experiences that communicate, engage and convert.' },
        { title: 'Cutting-edge technology', desc: 'We use the best tools and frameworks on the market to deliver fast, scalable and secure products.' },
        { title: 'Measurable results', desc: 'Everything we do is metrics-driven. Clear reports, defined KPIs and continuous optimization.' },
      ],
      timelineLabel: 'Journey',
      timelineTitle: 'Our story',
      milestones: [
        { year: '2018', text: 'WHP founded with a focus on strategy, design and technology for brands.' },
        { year: '2019', text: 'International expansion, serving clients outside Brazil.' },
        { year: '2022', text: 'Landing major clients, consolidating market presence.' },
        { year: '2026', text: 'Complete rebrand — new visual identity, positioning and website.' },
      ],
      teamLabel: 'Who makes it happen',
      teamTitle: 'Our team',
      teamSubtitle: 'A multidisciplinary team united by one goal: turning brands into references.',
      ctaTitle: 'Shall we work together?',
      ctaText: 'Explore our services or get in touch to discuss your project.',
      ctaPrimary: 'Talk to us',
      ctaSecondary: 'View services',
    },

    // Contact page
    contactPage: {
      label: 'Contact',
      heading: 'Let\'s talk?',
      subtitle: 'Tell us about your project. We respond within 24 hours with a personalized proposal.',
      channels: [
        { title: 'E-mail', value: 'contato@whp.com', desc: 'For proposals, quotes and business partnerships.' },
        { title: 'WhatsApp', value: 'Chat now', desc: 'Quick support for questions and project alignment.' },
        { title: 'Instagram', value: '@whp.agency', desc: 'Follow our work and behind-the-scenes of projects.' },
        { title: 'LinkedIn', value: 'WHP Agency', desc: 'Connect with us for networking and B2B opportunities.' },
      ],
      formTitle: 'Send your message',
      formSubtitle: 'Fill out the form below and we\'ll get back to you as soon as possible.',
      placeholderName: 'Your name',
      placeholderEmail: 'Your e-mail',
      placeholderService: 'Select service',
      serviceOptions: ['Brand Identity', 'Web Design & Dev', 'SEO & Content', 'Social Media & Performance', 'Other'],
      placeholderMessage: 'Tell us about your project...',
      submit: 'Send message',
      successTitle: 'Message sent!',
      successText: 'We\'ll get back to you within 24 hours.',
      whatsappTitle: 'Prefer a direct conversation?',
      whatsappText: 'Schedule a 15-minute no-commitment call via WhatsApp. We respond quickly.',
      whatsappBtn: 'Open WhatsApp',
      locationLabel: 'Location',
      locationValue: 'Brazil & International',
      hoursLabel: 'Hours',
      hoursValue: 'Mon — Fri, 09:00 — 18:00',
      responseLabel: 'Response time',
      responseValue: 'Within 24 business hours',
    },
  },
};

export interface Translations {
  nav: {
    home: string;
    services: string;
    projects: string;
    about: string;
    contact: string;
    startProject: string;
    serviceLinks: string[];
  };
  hero: {
    badge: string;
    heading: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
    orbitLabels: string[];
  };
  stats: {
    heading: string;
    tags: string[];
    labels: string[];
  };
  services: {
    label: string;
    heading: string;
    subtitle: string;
    items: { title: string; desc: string }[];
  };
  ctaBanner: {
    heading: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
  };
  portfolio: {
    label: string;
    heading: string;
    subtitle: string;
    tags: { brandIdentity: string; webDesign: string };
  };
  team: {
    label: string;
    heading: string;
    subtitle: string;
    roles: string[];
    bios: string[];
  };
  testimonials: {
    label: string;
    heading: string;
    subtitle: string;
    items: { quote: string; role: string }[];
  };
  footer: {
    brand: string;
    navTitle: string;
    servicesTitle: string;
    contactTitle: string;
    servicesList: string[];
    location: string;
    copyright: string;
    privacy: string;
    terms: string;
  };
  aboutPage: {
    label: string;
    heading: string;
    intro: string;
    missionLabel: string;
    missionTitle: string;
    missionText: string;
    visionLabel: string;
    visionTitle: string;
    visionText: string;
    valuesLabel: string;
    valuesTitle: string;
    values: { title: string; desc: string }[];
    timelineLabel: string;
    timelineTitle: string;
    milestones: { year: string; text: string }[];
    teamLabel: string;
    teamTitle: string;
    teamSubtitle: string;
    ctaTitle: string;
    ctaText: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  contactPage: {
    label: string;
    heading: string;
    subtitle: string;
    channels: { title: string; value: string; desc: string }[];
    formTitle: string;
    formSubtitle: string;
    placeholderName: string;
    placeholderEmail: string;
    placeholderService: string;
    serviceOptions: string[];
    placeholderMessage: string;
    submit: string;
    successTitle: string;
    successText: string;
    whatsappTitle: string;
    whatsappText: string;
    whatsappBtn: string;
    locationLabel: string;
    locationValue: string;
    hoursLabel: string;
    hoursValue: string;
    responseLabel: string;
    responseValue: string;
  };
}
