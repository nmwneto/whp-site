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

    // Service pages
    servicePages: {
      common: {
        backToHome: 'Voltar ao início',
        serviceLabel: 'Serviço',
        deliverablesLabel: 'Entregas',
        deliverablesTitle: 'O que você recebe',
        processLabel: 'Processo',
        processTitle: 'Como trabalhamos',
        startProject: 'Iniciar projeto',
      },
      brandIdentity: {
        title: 'Identidade de Marca',
        subtitle: 'Criamos identidades visuais memoráveis que traduzem a essência da sua marca em cada ponto de contato — do digital ao impresso.',
        aboutTitle: 'Por que investir em identidade visual?',
        aboutDesc: 'Uma identidade visual forte é o alicerce de qualquer marca de sucesso. Ela cria reconhecimento instantâneo, transmite profissionalismo e diferencia sua empresa da concorrência.',
        aboutBullets: ['Reconhecimento imediato no mercado', 'Consistência em todos os canais', 'Confiança e credibilidade para o cliente', 'Diferenciação da concorrência'],
        deliverables: [
          { title: 'Logotipo & Variações', desc: 'Criação do logo principal com versões horizontal, vertical, monocromática e ícone isolado para diferentes aplicações.' },
          { title: 'Paleta de Cores', desc: 'Definição de cores primárias, secundárias e de apoio com códigos HEX, RGB e CMYK para uso digital e impresso.' },
          { title: 'Tipografia', desc: 'Seleção de fontes para heading e body, com hierarquia tipográfica completa e regras de uso.' },
          { title: 'Brand Guidelines', desc: 'Manual de marca digital com todas as regras de aplicação, espaçamentos, usos incorretos e exemplos práticos.' },
          { title: 'Papelaria & Aplicações', desc: 'Cartão de visita, papel timbrado, assinatura de e-mail e templates para apresentações.' },
          { title: 'Social Media Kit', desc: 'Templates para posts, stories e capas de perfil adaptados à identidade visual da marca.' },
        ],
        process: [
          { title: 'Imersão', desc: 'Entendemos o negócio, público-alvo, concorrentes e os valores que a marca precisa comunicar.' },
          { title: 'Conceituação', desc: 'Desenvolvemos moodboards, referências visuais e direções criativas para aprovação.' },
          { title: 'Design', desc: 'Criamos o logo, paleta, tipografia e todos os elementos visuais da identidade.' },
          { title: 'Entrega', desc: 'Finalizamos com o brand guide completo e todos os arquivos em formatos digitais e impressos.' },
        ],
        ctaTitle: 'Pronto para criar sua identidade?',
        ctaSubtitle: 'Vamos conversar sobre a sua marca e criar algo único juntos.',
      },
      webDesign: {
        title: 'Web Design & Dev',
        subtitle: 'Projetamos e desenvolvemos sites de alta performance com design único, código limpo e tecnologia de ponta.',
        aboutTitle: 'Por que um site profissional importa?',
        aboutDesc: 'Seu site é o cartão de visitas digital da sua marca. Um site rápido, bonito e bem estruturado gera confiança, atrai clientes e converte visitantes em oportunidades reais de negócio.',
        aboutBullets: ['Carregamento ultrarrápido (< 2s)', 'Design que converte visitantes em clientes', 'SEO técnico desde o primeiro dia', 'Código escalável e de fácil manutenção'],
        deliverables: [
          { title: 'Design UI/UX', desc: 'Interfaces intuitivas e visualmente impactantes, projetadas com foco na experiência do usuário e conversão.' },
          { title: 'Desenvolvimento Front-end', desc: 'Código limpo e performático com React, Next.js e tecnologias modernas que garantem velocidade e qualidade.' },
          { title: 'Responsividade Total', desc: 'Sites que funcionam perfeitamente em todos os dispositivos — desktop, tablet e mobile.' },
          { title: 'CMS & Painel Admin', desc: 'Integração com sistemas de gerenciamento de conteúdo para que você edite seu site com autonomia.' },
          { title: 'Performance & SEO Técnico', desc: 'Otimização de velocidade, Core Web Vitals, meta tags e estrutura semântica para ranquear no Google.' },
          { title: 'Deploy & Hospedagem', desc: 'Publicação em infraestrutura moderna com CDN global, SSL, CI/CD e monitoramento contínuo.' },
        ],
        process: [
          { title: 'Discovery', desc: 'Entendemos os objetivos do projeto, público-alvo e requisitos técnicos e visuais.' },
          { title: 'Design', desc: 'Criamos wireframes e layouts de alta fidelidade no Figma com foco em UX e conversão.' },
          { title: 'Desenvolvimento', desc: 'Codificamos com tecnologias modernas, garantindo performance, acessibilidade e SEO.' },
          { title: 'Testes & Launch', desc: 'QA rigoroso em todos os dispositivos, otimização final e deploy em produção.' },
        ],
        ctaTitle: 'Pronto para criar seu site?',
        ctaSubtitle: 'Vamos desenvolver uma presença digital que gera resultados reais.',
      },
      seoContent: {
        title: 'SEO & Conteúdo',
        subtitle: 'Estratégias de SEO e conteúdo que colocam sua marca nas primeiras posições do Google e geram tráfego qualificado.',
        aboutTitle: 'Por que SEO e conteúdo são essenciais?',
        aboutDesc: 'O tráfego orgânico é o canal mais sustentável e escalável de aquisição de clientes. Um bom SEO combinado com conteúdo estratégico cria uma máquina de crescimento previsível para o seu negócio.',
        aboutBullets: ['Tráfego orgânico sustentável e escalável', 'Redução do custo de aquisição de clientes', 'Autoridade e confiança para sua marca', 'Resultados comprovados mês a mês'],
        deliverables: [
          { title: 'Auditoria SEO Completa', desc: 'Análise técnica profunda do site: crawlability, indexação, velocidade, Core Web Vitals e estrutura de URLs.' },
          { title: 'Pesquisa de Palavras-chave', desc: 'Mapeamento de termos estratégicos com volume de busca, dificuldade e intenção para orientar todo o conteúdo.' },
          { title: 'SEO On-page', desc: 'Otimização de títulos, meta descriptions, headings, imagens, schema markup e estrutura semântica de cada página.' },
          { title: 'Estratégia de Conteúdo', desc: 'Planejamento editorial com calendário de publicações, temas, formatos e objetivos de cada conteúdo.' },
          { title: 'Produção de Conteúdo', desc: 'Textos otimizados para SEO com foco em E-E-A-T: experiência, expertise, autoridade e confiabilidade.' },
          { title: 'Relatórios & Monitoramento', desc: 'Dashboards com métricas de tráfego, posições, conversões e evolução mês a mês com insights acionáveis.' },
        ],
        process: [
          { title: 'Auditoria', desc: 'Diagnóstico completo do estado atual do SEO e conteúdo do site com análise competitiva.' },
          { title: 'Estratégia', desc: 'Definição de palavras-chave, calendário editorial e priorização de ações por impacto.' },
          { title: 'Execução', desc: 'Otimizações técnicas, produção de conteúdo e implementação das melhorias on-page e off-page.' },
          { title: 'Análise & Iteração', desc: 'Monitoramento de resultados, relatórios mensais e ajustes contínuos na estratégia.' },
        ],
        ctaTitle: 'Pronto para dominar o Google?',
        ctaSubtitle: 'Vamos criar uma estratégia de SEO que gera resultados reais e mensuráveis.',
      },
      socialMedia: {
        title: 'Social Media & Performance',
        subtitle: 'Gestão estratégica de redes sociais com tráfego pago e análise de performance para crescimento real da sua marca.',
        aboutTitle: 'Por que investir em social media?',
        aboutDesc: 'As redes sociais são o principal ponto de contato entre marcas e consumidores. Uma presença estratégica constrói comunidade, gera demanda e transforma seguidores em clientes fiéis.',
        aboutBullets: ['Presença consistente nas plataformas certas', 'Conteúdo que engaja e converte', 'Campanhas pagas com ROI comprovado', 'Decisões baseadas em dados reais'],
        deliverables: [
          { title: 'Estratégia de Conteúdo Social', desc: 'Planejamento de conteúdo alinhado ao posicionamento da marca, com calendário editorial e pilares temáticos.' },
          { title: 'Design de Posts & Stories', desc: 'Criação de peças visuais com identidade consistente para feed, stories, reels e carrosséis.' },
          { title: 'Gestão de Comunidade', desc: 'Monitoramento e interação com a audiência, respondendo comentários e mensagens de forma estratégica.' },
          { title: 'Tráfego Pago (Ads)', desc: 'Campanhas no Meta Ads e Google Ads com segmentação precisa, criativos otimizados e gestão de orçamento.' },
          { title: 'Análise de Métricas', desc: 'Relatórios detalhados com KPIs de alcance, engajamento, conversões e ROI de cada canal e campanha.' },
          { title: 'Growth & Otimização', desc: 'Testes A/B, otimização de criativos e ajustes contínuos baseados em dados para maximizar resultados.' },
        ],
        process: [
          { title: 'Diagnóstico', desc: 'Análise da presença atual, concorrentes, público-alvo e oportunidades em cada plataforma.' },
          { title: 'Estratégia', desc: 'Definição de pilares de conteúdo, tom de voz, calendário editorial e objetivos mensuráveis.' },
          { title: 'Criação & Gestão', desc: 'Produção de conteúdo, gerenciamento de publicações e interação com a comunidade.' },
          { title: 'Performance & Growth', desc: 'Campanhas pagas, análise de métricas, testes A/B e otimização contínua para crescimento.' },
        ],
        ctaTitle: 'Pronto para crescer nas redes?',
        ctaSubtitle: 'Vamos criar uma estratégia de social media que gera resultados mensuráveis.',
      },
      customProjects: {
        title: 'Projetos Personalizados',
        subtitle: 'Soluções sob medida que combinam design, tecnologia e estratégia para resolver desafios únicos do seu negócio.',
        aboutTitle: 'Por que um projeto personalizado?',
        aboutDesc: 'Nem todo desafio se encaixa em uma caixa pronta. Projetos personalizados são ideais quando sua empresa precisa de uma solução que conecte múltiplas disciplinas — do branding à automação, do design ao código.',
        aboutBullets: ['Escopo adaptado à sua realidade', 'Equipe multidisciplinar dedicada', 'Entregas incrementais com feedback', 'Orçamento flexível e transparente'],
        deliverables: [
          { title: 'Consultoria Estratégica', desc: 'Análise profunda do seu negócio para identificar oportunidades e definir o escopo ideal do projeto.' },
          { title: 'Prototipagem Rápida', desc: 'Criação de protótipos interativos para validar conceitos antes do desenvolvimento completo.' },
          { title: 'Design & Desenvolvimento', desc: 'Execução integrada de design e código, com entregas incrementais e feedback contínuo.' },
          { title: 'Integrações & APIs', desc: 'Conexão com ferramentas e plataformas externas: CRM, ERPs, gateways de pagamento e automações.' },
          { title: 'Automação & IA', desc: 'Implementação de chatbots, fluxos automatizados e inteligência artificial aplicada ao negócio.' },
          { title: 'Suporte & Evolução', desc: 'Acompanhamento pós-entrega com suporte técnico, melhorias contínuas e evolução do produto.' },
        ],
        process: [
          { title: 'Discovery', desc: 'Mapeamos as necessidades, objetivos e restrições do projeto em workshops colaborativos.' },
          { title: 'Planejamento', desc: 'Definimos o escopo, tecnologias, cronograma e milestones com entregas claras.' },
          { title: 'Execução', desc: 'Desenvolvemos em sprints com entregas incrementais, feedback contínuo e ajustes em tempo real.' },
          { title: 'Lançamento & Suporte', desc: 'Deploy assistido, monitoramento pós-launch e suporte contínuo para evolução do produto.' },
        ],
        ctaTitle: 'Tem um projeto em mente?',
        ctaSubtitle: 'Conte-nos sobre o seu desafio e vamos construir a solução ideal juntos.',
      },
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

    // Service pages
    servicePages: {
      common: {
        backToHome: 'Back to home',
        serviceLabel: 'Service',
        deliverablesLabel: 'Deliverables',
        deliverablesTitle: 'What you get',
        processLabel: 'Process',
        processTitle: 'How we work',
        startProject: 'Start a project',
      },
      brandIdentity: {
        title: 'Brand Identity',
        subtitle: 'We create memorable visual identities that translate your brand\'s essence into every touchpoint — from digital to print.',
        aboutTitle: 'Why invest in visual identity?',
        aboutDesc: 'A strong visual identity is the foundation of any successful brand. It creates instant recognition, conveys professionalism and differentiates your company from the competition.',
        aboutBullets: ['Instant market recognition', 'Consistency across all channels', 'Trust and credibility for the client', 'Differentiation from competitors'],
        deliverables: [
          { title: 'Logo & Variations', desc: 'Main logo creation with horizontal, vertical, monochrome and isolated icon versions for different applications.' },
          { title: 'Color Palette', desc: 'Definition of primary, secondary and support colors with HEX, RGB and CMYK codes for digital and print use.' },
          { title: 'Typography', desc: 'Font selection for heading and body, with complete typographic hierarchy and usage rules.' },
          { title: 'Brand Guidelines', desc: 'Digital brand manual with all application rules, spacing, incorrect uses and practical examples.' },
          { title: 'Stationery & Applications', desc: 'Business cards, letterhead, email signature and presentation templates.' },
          { title: 'Social Media Kit', desc: 'Templates for posts, stories and profile covers adapted to the brand\'s visual identity.' },
        ],
        process: [
          { title: 'Immersion', desc: 'We understand the business, target audience, competitors and the values the brand needs to communicate.' },
          { title: 'Conceptualization', desc: 'We develop moodboards, visual references and creative directions for approval.' },
          { title: 'Design', desc: 'We create the logo, palette, typography and all visual elements of the identity.' },
          { title: 'Delivery', desc: 'We finalize with the complete brand guide and all files in digital and print formats.' },
        ],
        ctaTitle: 'Ready to create your identity?',
        ctaSubtitle: 'Let\'s talk about your brand and create something unique together.',
      },
      webDesign: {
        title: 'Web Design & Dev',
        subtitle: 'We design and develop high-performance websites with unique design, clean code and cutting-edge technology.',
        aboutTitle: 'Why does a professional website matter?',
        aboutDesc: 'Your website is your brand\'s digital business card. A fast, beautiful and well-structured site builds trust, attracts clients and converts visitors into real business opportunities.',
        aboutBullets: ['Ultra-fast loading (< 2s)', 'Design that converts visitors into clients', 'Technical SEO from day one', 'Scalable and easy-to-maintain code'],
        deliverables: [
          { title: 'UI/UX Design', desc: 'Intuitive and visually impactful interfaces, designed with a focus on user experience and conversion.' },
          { title: 'Front-end Development', desc: 'Clean and performant code with React, Next.js and modern technologies that ensure speed and quality.' },
          { title: 'Full Responsiveness', desc: 'Websites that work perfectly on all devices — desktop, tablet and mobile.' },
          { title: 'CMS & Admin Panel', desc: 'Integration with content management systems so you can edit your site with autonomy.' },
          { title: 'Performance & Technical SEO', desc: 'Speed optimization, Core Web Vitals, meta tags and semantic structure to rank on Google.' },
          { title: 'Deploy & Hosting', desc: 'Publication on modern infrastructure with global CDN, SSL, CI/CD and continuous monitoring.' },
        ],
        process: [
          { title: 'Discovery', desc: 'We understand the project goals, target audience and technical and visual requirements.' },
          { title: 'Design', desc: 'We create wireframes and high-fidelity layouts in Figma with a focus on UX and conversion.' },
          { title: 'Development', desc: 'We code with modern technologies, ensuring performance, accessibility and SEO.' },
          { title: 'Testing & Launch', desc: 'Rigorous QA on all devices, final optimization and production deploy.' },
        ],
        ctaTitle: 'Ready to create your website?',
        ctaSubtitle: 'Let\'s develop a digital presence that drives real results.',
      },
      seoContent: {
        title: 'SEO & Content',
        subtitle: 'SEO and content strategies that put your brand at the top of Google and generate qualified traffic.',
        aboutTitle: 'Why are SEO and content essential?',
        aboutDesc: 'Organic traffic is the most sustainable and scalable customer acquisition channel. Good SEO combined with strategic content creates a predictable growth engine for your business.',
        aboutBullets: ['Sustainable and scalable organic traffic', 'Reduced customer acquisition cost', 'Authority and trust for your brand', 'Proven results month after month'],
        deliverables: [
          { title: 'Complete SEO Audit', desc: 'Deep technical analysis of the site: crawlability, indexing, speed, Core Web Vitals and URL structure.' },
          { title: 'Keyword Research', desc: 'Mapping of strategic terms with search volume, difficulty and intent to guide all content.' },
          { title: 'On-page SEO', desc: 'Optimization of titles, meta descriptions, headings, images, schema markup and semantic structure of each page.' },
          { title: 'Content Strategy', desc: 'Editorial planning with publication calendar, themes, formats and objectives for each content.' },
          { title: 'Content Production', desc: 'SEO-optimized texts focused on E-E-A-T: experience, expertise, authoritativeness and trustworthiness.' },
          { title: 'Reports & Monitoring', desc: 'Dashboards with traffic metrics, rankings, conversions and month-over-month evolution with actionable insights.' },
        ],
        process: [
          { title: 'Audit', desc: 'Complete diagnosis of the current state of SEO and site content with competitive analysis.' },
          { title: 'Strategy', desc: 'Definition of keywords, editorial calendar and prioritization of actions by impact.' },
          { title: 'Execution', desc: 'Technical optimizations, content production and implementation of on-page and off-page improvements.' },
          { title: 'Analysis & Iteration', desc: 'Results monitoring, monthly reports and continuous strategy adjustments.' },
        ],
        ctaTitle: 'Ready to dominate Google?',
        ctaSubtitle: 'Let\'s create an SEO strategy that drives real, measurable results.',
      },
      socialMedia: {
        title: 'Social Media & Performance',
        subtitle: 'Strategic social media management with paid traffic and performance analysis for real brand growth.',
        aboutTitle: 'Why invest in social media?',
        aboutDesc: 'Social media is the main point of contact between brands and consumers. A strategic presence builds community, generates demand and turns followers into loyal customers.',
        aboutBullets: ['Consistent presence on the right platforms', 'Content that engages and converts', 'Paid campaigns with proven ROI', 'Decisions based on real data'],
        deliverables: [
          { title: 'Social Content Strategy', desc: 'Content planning aligned with brand positioning, with editorial calendar and thematic pillars.' },
          { title: 'Post & Stories Design', desc: 'Creation of visual pieces with consistent identity for feed, stories, reels and carousels.' },
          { title: 'Community Management', desc: 'Audience monitoring and interaction, responding to comments and messages strategically.' },
          { title: 'Paid Traffic (Ads)', desc: 'Meta Ads and Google Ads campaigns with precise targeting, optimized creatives and budget management.' },
          { title: 'Metrics Analysis', desc: 'Detailed reports with reach, engagement, conversion and ROI KPIs for each channel and campaign.' },
          { title: 'Growth & Optimization', desc: 'A/B testing, creative optimization and continuous data-driven adjustments to maximize results.' },
        ],
        process: [
          { title: 'Diagnosis', desc: 'Analysis of current presence, competitors, target audience and opportunities on each platform.' },
          { title: 'Strategy', desc: 'Definition of content pillars, tone of voice, editorial calendar and measurable objectives.' },
          { title: 'Creation & Management', desc: 'Content production, publication management and community interaction.' },
          { title: 'Performance & Growth', desc: 'Paid campaigns, metrics analysis, A/B testing and continuous optimization for growth.' },
        ],
        ctaTitle: 'Ready to grow on social media?',
        ctaSubtitle: 'Let\'s create a social media strategy that drives measurable results.',
      },
      customProjects: {
        title: 'Custom Projects',
        subtitle: 'Tailored solutions that combine design, technology and strategy to solve unique challenges in your business.',
        aboutTitle: 'Why a custom project?',
        aboutDesc: 'Not every challenge fits a ready-made box. Custom projects are ideal when your company needs a solution that connects multiple disciplines — from branding to automation, from design to code.',
        aboutBullets: ['Scope adapted to your reality', 'Dedicated multidisciplinary team', 'Incremental deliveries with feedback', 'Flexible and transparent budget'],
        deliverables: [
          { title: 'Strategic Consulting', desc: 'Deep analysis of your business to identify opportunities and define the ideal project scope.' },
          { title: 'Rapid Prototyping', desc: 'Creation of interactive prototypes to validate concepts before full development.' },
          { title: 'Design & Development', desc: 'Integrated design and code execution, with incremental deliveries and continuous feedback.' },
          { title: 'Integrations & APIs', desc: 'Connection with external tools and platforms: CRM, ERPs, payment gateways and automations.' },
          { title: 'Automation & AI', desc: 'Implementation of chatbots, automated workflows and artificial intelligence applied to business.' },
          { title: 'Support & Evolution', desc: 'Post-delivery follow-up with technical support, continuous improvements and product evolution.' },
        ],
        process: [
          { title: 'Discovery', desc: 'We map needs, objectives and project constraints in collaborative workshops.' },
          { title: 'Planning', desc: 'We define scope, technologies, timeline and milestones with clear deliveries.' },
          { title: 'Execution', desc: 'We develop in sprints with incremental deliveries, continuous feedback and real-time adjustments.' },
          { title: 'Launch & Support', desc: 'Assisted deploy, post-launch monitoring and continuous support for product evolution.' },
        ],
        ctaTitle: 'Have a project in mind?',
        ctaSubtitle: 'Tell us about your challenge and let\'s build the ideal solution together.',
      },
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
  servicePages: {
    common: {
      backToHome: string;
      serviceLabel: string;
      deliverablesLabel: string;
      deliverablesTitle: string;
      processLabel: string;
      processTitle: string;
      startProject: string;
    };
    brandIdentity: ServicePageTranslation;
    webDesign: ServicePageTranslation;
    seoContent: ServicePageTranslation;
    socialMedia: ServicePageTranslation;
    customProjects: ServicePageTranslation;
  };
}

interface ServicePageTranslation {
  title: string;
  subtitle: string;
  aboutTitle: string;
  aboutDesc: string;
  aboutBullets: string[];
  deliverables: { title: string; desc: string }[];
  process: { title: string; desc: string }[];
  ctaTitle: string;
  ctaSubtitle: string;
}
