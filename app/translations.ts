export type Locale = "en" | "pt" | "es";

export const translations = {
  en: {
    locale: "en" as Locale,
    flag: "🇺🇸",
    label: "EN",
    lang: "en",

    nav: {
      organizations: "Organizations",
      personal: "Personal Growth",
      howWeHelp: "How We Help",
      resources: "Resources",
      contact: "Contact Us",
      freeSession: "Free Session",
    },

    hero: {
      eyebrow: "Presence · Awareness · Emotional Intelligence",
      headline1: "MINDFULNESS",
      headline2: "LEADERSHIP",
      question: "Are you a leader who inspires, or a leader who manages a functional team?",
      body: "Great leadership is more than keeping a team on track — it's about inspiring people to move with purpose. When direction and inspiration come together, teams don't just function — they thrive.",
      personalQuestion: "How do you experience leadership in your personal life: at home, with your children and relatives, in traffic driving to and from work?",
      ctaPrimary: "Schedule a free session →",
      ctaSecondary: "Explore programs",
      pills: ["Experiential Workshops", "Corporate Leadership", "Personal Growth", "In-person & Online"],
      cardPills: ["Presence", "Awareness", "Emotional Intelligence"],
      cardQuote: "Performance and humanity are not opposites — they are strongest when developed together.",
      cardItems: ["Experiential learning", "Small groups", "Real transformation", "Leadership with conscience"],
    },

    questionSection: {
      eyebrow: "The Question",
      title: "Are you a leader who inspires — or one who manages?",
      lead: "Great Leadership is more than keeping a team on track — it's about inspiring people to move with purpose. While strong management ensures structure, efficiency, and results, true leadership sparks motivation and brings out the best in others.",
      body: "When direction and inspiration come together, teams don't just function — they thrive.",
    },

    twoPaths: {
      eyebrow: "Two Paths, One Way",
      title1: "Two Paths.",
      title2: "One Way.",
      personal: {
        tag: "Personal Growth",
        title: "Leadership starts from within",
        sub: "A journey of self-awareness, presence, and inner transformation.",
        items: [
          { label: "Energetic type", desc: "Understand your natural energy and how you show up." },
          { label: "What's your superpower?", desc: "Discover the unique strengths that define you." },
          { label: "Power of words", desc: "Language shapes reality — learn to use it intentionally." },
          { label: "13 energies of space", desc: "Expand awareness of the environments that shape behavior." },
        ],
      },
      corporate: {
        tag: "Corporate Leadership",
        title: "Leadership transforms teams",
        sub: "Practical tools to lead people, resolve conflict, and build culture.",
        items: [
          { label: "Co-leadership", desc: "Lead alongside peers and multiply collective impact." },
          { label: "Conflict resolution", desc: "Turn tension into a catalyst for growth and alignment." },
          { label: "Anatomy of a team", desc: "Understand what makes teams thrive beyond individual talent." },
          { label: "Behavioral change", desc: "Shift mindset and build lasting change in organizational culture." },
        ],
      },
      mergePersonalTag: "Personal track",
      mergeCorporateTag: "Corporate track",
      mergePersonalItems: ["Inner awareness", "Presence & language", "Purpose & values"],
      mergeCorporateItems: ["Team dynamics", "Culture & communication", "Sustainable impact"],
      mergeEyebrow: "Where both paths meet",
      mergeTitle: "The 11-Session Transformation Journey",
      mergeBody: "Whether you start from within or from your organization, both roads lead to the same destination: a leader who inspires trust, drives meaningful change, and brings out the best in others.",
      ctaPrimary: "Schedule a free session →",
      ctaSecondary: "Explore programs",
    },

    whyDifferent: {
      eyebrow: "Why This Is Different",
      title: "WHY IS THIS PROGRAM DIFFERENT",
      cards: [
        { num: "01", title: "Not about techniques. About presence.", body: "This isn't a course on leadership skills. It's an invitation to a real encounter with how you show up — your energy, your language, your choices." },
        { num: "02", title: "Experiential, not theoretical.", body: "Every session is designed so participants don't just learn concepts — they live them. Reflection, practice, and real-life application are woven into each encounter." },
        { num: "03", title: "Adapted to your reality.", body: "No rigid models. Each program is shaped around the size, goals, and specific challenges of your business or personal context." },
        { num: "04", title: "Humanity and performance together.", body: "At the core of the work is a simple idea: performance and humanity are not opposites — they are strongest when developed together." },
      ],
      quote: "\"My work is not about teaching techniques.\nIt's about personal transformation and about personal reinvention.\"",
      quoteAuthor: "— Reinaldo Catarino",
    },

    programs: {
      eyebrow: "How We Help",
      title: "Programs & Approaches",
      lead: "Each format is designed to meet you where you are — and take you somewhere new.",
      workshops: [
        { id: "01", title: "Workshops", desc: "Through a fully experiential approach, participants actively engage, practice, and apply what they learn in real life. Our workshops are designed to fit your business's size, goals, and specific challenges, ensuring relevant and meaningful outcomes.", cta: null },
        { id: "02", title: "The 11-Session Transformation Journey", desc: "A dedicated path to becoming a mindful leader who inspires trust and drives sustainable impact. Designed to redefine the architecture of your leadership — cultivating the courage to make necessary decisions and the mindset shift to navigate complex organizational challenges.", cta: "Schedule a free session →" },
        { id: "03", title: "The Map of Modern Leadership", desc: "A dynamic approach that recognizes leadership is not fixed in one position. By moving fluidly among 5 faces — Leader Within, Leader in Front, Leader Beside, Leader in the Field, and Leader Behind — a leader responds to the needs of the moment and the strengths of the group.", cta: null },
        { id: "04", title: "The Anatomy of a Team", desc: "The best teams are far more than the sum of their parts. It's easy to think that success comes from highly accomplished individuals under a skilled leader — but the best teams share certain basic characteristics that go far deeper.", cta: null },
        { id: "05", title: "The Power of Storytelling", desc: "More than just communication, storytelling builds trust, creates meaning and strengthens human connection. It helps individuals and teams see themselves as part of a shared journey. Authenticity is key. If you believe in what you say, your audience believes it too.", cta: null },
      ],
    },

    sessionHighlight: {
      eyebrow: "Signature Program",
      title: "The 11-Session Transformation Journey",
      lead: "This is a dedicated path for developing your Leader Within and creating a lasting positive impact. It's designed to redefine the architecture of your leadership and how you respond to life events.",
      features: ["11 structured sessions", "Individual or small group", "In-person or online", "Free assessment session", "Personal & professional application", "Ongoing guidance & depth"],
      cta: "Schedule a free assessment session →",
    },

    leadershipMap: {
      eyebrow: "Framework",
      title: "The Map of Modern Leadership",
      lead: "A more dynamic leadership approach recognizes that leadership is not fixed in one position. By moving fluidly among the 5 faces of Leadership, a leader responds to the needs of the moment and the strengths of the group.",
      body1: "Each face carries its own energy, responsibility, and mode of influence. Great leaders know which face the moment calls for — and have the awareness and courage to move between them.",
      body2: "The result is not just a team that follows directions — but one that contributes, evolves, and thrives together.",
      faces: [
        { label: "Leader Within", desc: "The inner core — self-awareness, values, presence." },
        { label: "Leader in Front", desc: "Setting direction, inspiring vision, leading the way." },
        { label: "Leader Beside", desc: "Collaboration, co-creation, peer leadership." },
        { label: "Leader in the Field", desc: "Hands-on execution, agility, being present in action." },
        { label: "Leader Behind", desc: "Developing others, empowering, letting the team shine." },
      ],
    },

    about: {
      eyebrow: "About Reinaldo",
      title1: "Facilitator.",
      title2: "Leadership thinker.",
      lead: "Reinaldo Catarino is a facilitator and leadership thinker dedicated to helping individuals and teams perform at their best — without losing sight of what makes us human.",
      body1: "His work sits at the intersection of self-leadership, teamwork, and practical execution, translating complex ideas into simple, actionable tools that drive real results. With a focus on experiential learning, Reinaldo creates spaces where people don't just learn concepts — they live them.",
      body2: "Rather than prescribing rigid models, he believes leadership is dynamic: the ability to adapt, respond, and serve the needs of both the individual and the group.",
      quote: "\"Performance and humanity are not opposites — they are strongest when developed together.\"",
    },

    resources: {
      eyebrow: "Resources",
      title: "Reading list for the leadership journey.",
      lead: "A curated selection — not just recommendations, but doorways into the themes that run through Reinaldo's work: courage, awareness, communication, meaning, and presence.",
      books: [
        { category: "Leadership", title: "The Stake", subtitle: "The Making of Leaders", author: "Henry Kimsey-House & David Skibbins", summary: "A powerful framework for understanding what it truly means to step into leadership — not as a role, but as an identity." },
        { category: "Self-Leadership", title: "Leadership from the Inside Out", subtitle: "Becoming a Leader for Life", author: "Kevin Cashman", summary: "Explores how authentic leadership emerges from knowing yourself deeply — your values, purpose, and the story you carry." },
        { category: "Potential", title: "Hidden Potential", subtitle: "The Science of Achieving Greater Things", author: "Adam Grant", summary: "Challenges the idea that talent is fixed. A compelling case for how character and opportunity unlock extraordinary growth." },
        { category: "Wellbeing", title: "The Good Life", subtitle: "", author: "Robert Waldinger & Marc Schulz", summary: "Drawn from the longest study on happiness, this book reveals that relationships — not achievement — are the foundation of a life well lived." },
        { category: "Courage", title: "A Promised Land", subtitle: "", author: "Barack Obama", summary: "A deeply human account of leadership under pressure, moral complexity, and the weight of decisions that shape millions of lives." },
        { category: "Resilience", title: "What Happened to You?", subtitle: "Conversations on Trauma, Resilience, and Healing", author: "Bruce D. Perry & Oprah Winfrey", summary: "Reframes how we understand behavior and emotion — shifting from 'what's wrong with you?' to 'what happened to you?' — essential for compassionate leadership." },
        { category: "Habits", title: "Atomic Habits", subtitle: "", author: "James Clear", summary: "The definitive guide to building systems that make change inevitable rather than relying on willpower or motivation." },
        { category: "Peace", title: "The Anatomy of Peace", subtitle: "", author: "The Arbinger Institute", summary: "Reveals how we often become the source of the very conflicts we seek to resolve — and how a shift in heart changes everything." },
        { category: "Meaning", title: "Man's Search for Meaning", subtitle: "", author: "Viktor E. Frankl", summary: "One of the most important books ever written. Frankl's account of finding purpose in the most extreme suffering remains profoundly transformative." },
        { category: "Resilience", title: "The Stoic Challenge", subtitle: "", author: "William B. Irvine", summary: "A modern guide to Stoic wisdom — reframing obstacles as tests to sharpen character rather than evidence of failure." },
        { category: "Connection", title: "Talking to Strangers", subtitle: "", author: "Malcolm Gladwell", summary: "An eye-opening exploration of why we so consistently misread the people we don't know — and what it costs us." },
      ],
    },

    contact: {
      eyebrow: "Contact Us",
      title: "Schedule a free assessment session.",
      lead: "The first session is the gateway — to understand your context, your moment, and which journey makes the most sense for you.",
      format: "Format",
      formatValue: "In-person or online",
      email: "Email",
      emailValue: "contato@reinaldocatarino.com",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      selectDefault: "I'd like to talk about",
      selectOptions: ["Corporate Leadership", "Personal Growth", "11-Session Program", "Experiential Workshop", "Team Development"],
      textareaPlaceholder: "Briefly describe your situation, challenge, or interest.",
      submit: "Send request",
    },

    footer: {
      subtitle: "Mindfulness Leadership",
      links: ["Organizations", "Personal Growth", "Programs", "Resources", "Contact"],
      copyright: "© 2026 Reinaldo Catarino",
    },
  },

  pt: {
    locale: "pt" as Locale,
    flag: "🇧🇷",
    label: "PT",
    lang: "pt-BR",

    nav: {
      organizations: "Organizações",
      personal: "Crescimento Pessoal",
      howWeHelp: "Como Ajudamos",
      resources: "Recursos",
      contact: "Contato",
      freeSession: "Sessão Gratuita",
    },

    hero: {
      eyebrow: "Presença · Consciência · Inteligência Emocional",
      headline1: "MINDFULNESS",
      headline2: "LIDERANÇA",
      question: "Você é um líder que inspira, ou um líder que gerencia uma equipe funcional?",
      body: "A grande liderança vai além de manter a equipe nos trilhos — é sobre inspirar pessoas a se moverem com propósito. Quando direção e inspiração se encontram, as equipes não apenas funcionam — elas florescem.",
      personalQuestion: "Como você experiencia a liderança na sua vida pessoal: em casa, com seus filhos e familiares, no trânsito indo e voltando do trabalho?",
      ctaPrimary: "Agendar uma sessão gratuita →",
      ctaSecondary: "Explorar programas",
      pills: ["Workshops Vivenciais", "Liderança Corporativa", "Crescimento Pessoal", "Presencial & Online"],
      cardPills: ["Presença", "Consciência", "Inteligência Emocional"],
      cardQuote: "Performance e humanidade não são opostos — são mais fortes quando desenvolvidos juntos.",
      cardItems: ["Aprendizado vivencial", "Grupos pequenos", "Transformação real", "Liderança com consciência"],
    },

    questionSection: {
      eyebrow: "A Pergunta",
      title: "Você é um líder que inspira — ou que gerencia?",
      lead: "A grande liderança vai além de manter a equipe nos trilhos — é sobre inspirar pessoas a se moverem com propósito. Uma gestão forte garante estrutura, eficiência e resultados, mas a verdadeira liderança acende a motivação e revela o melhor nas pessoas.",
      body: "Quando direção e inspiração se encontram, as equipes não apenas funcionam — elas florescem.",
    },

    twoPaths: {
      eyebrow: "Dois Caminhos, Um Destino",
      title1: "Dois Caminhos.",
      title2: "Um Destino.",
      personal: {
        tag: "Crescimento Pessoal",
        title: "A liderança começa de dentro",
        sub: "Uma jornada de autoconhecimento, presença e transformação interior.",
        items: [
          { label: "Tipo energético", desc: "Entenda sua energia natural e como você se apresenta." },
          { label: "Qual é o seu superpoder?", desc: "Descubra os pontos fortes únicos que definem você." },
          { label: "O poder das palavras", desc: "A linguagem molda a realidade — aprenda a usá-la intencionalmente." },
          { label: "13 energias do espaço", desc: "Amplie a consciência dos ambientes que moldam o comportamento." },
        ],
      },
      corporate: {
        tag: "Liderança Corporativa",
        title: "A liderança transforma equipes",
        sub: "Ferramentas práticas para liderar pessoas, resolver conflitos e construir cultura.",
        items: [
          { label: "Co-liderança", desc: "Lidere ao lado de pares e multiplique o impacto coletivo." },
          { label: "Resolução de conflitos", desc: "Transforme tensão em catalisador de crescimento e alinhamento." },
          { label: "Anatomia de uma equipe", desc: "Entenda o que faz as equipes prosperarem além do talento individual." },
          { label: "Mudança comportamental", desc: "Transforme mentalidade e construa mudanças duradouras na cultura organizacional." },
        ],
      },
      mergePersonalTag: "Trilha pessoal",
      mergeCorporateTag: "Trilha corporativa",
      mergePersonalItems: ["Consciência interior", "Presença & linguagem", "Propósito & valores"],
      mergeCorporateItems: ["Dinâmica de equipe", "Cultura & comunicação", "Impacto sustentável"],
      mergeEyebrow: "Onde os dois caminhos se encontram",
      mergeTitle: "A Jornada de Transformação — 11 Sessões",
      mergeBody: "Seja partindo de dentro ou da sua organização, ambos os caminhos levam ao mesmo destino: um líder que inspira confiança, gera mudança significativa e revela o melhor nas pessoas.",
      ctaPrimary: "Agendar uma sessão gratuita →",
      ctaSecondary: "Explorar programas",
    },

    whyDifferent: {
      eyebrow: "Por Que É Diferente",
      title: "POR QUE ESTE PROGRAMA É DIFERENTE",
      cards: [
        { num: "01", title: "Não é sobre técnicas. É sobre presença.", body: "Este não é um curso de habilidades de liderança. É um convite a um encontro real com a forma como você se apresenta — sua energia, sua linguagem, suas escolhas." },
        { num: "02", title: "Vivencial, não teórico.", body: "Cada sessão é desenhada para que os participantes não apenas aprendam conceitos — eles os vivem. Reflexão, prática e aplicação real estão presentes em cada encontro." },
        { num: "03", title: "Adaptado à sua realidade.", body: "Sem modelos rígidos. Cada programa é moldado em torno do tamanho, objetivos e desafios específicos do seu negócio ou contexto pessoal." },
        { num: "04", title: "Humanidade e performance juntos.", body: "No centro do trabalho há uma ideia simples: performance e humanidade não são opostos — são mais fortes quando desenvolvidos juntos." },
      ],
      quote: "\"Meu trabalho não é sobre ensinar técnicas.\nÉ sobre transformação pessoal e sobre reinvenção pessoal.\"",
      quoteAuthor: "— Reinaldo Catarino",
    },

    programs: {
      eyebrow: "Como Ajudamos",
      title: "Programas & Abordagens",
      lead: "Cada formato é desenhado para encontrar você onde você está — e levá-lo a um novo lugar.",
      workshops: [
        { id: "01", title: "Workshops", desc: "Por meio de uma abordagem totalmente vivencial, os participantes se engajam ativamente, praticam e aplicam o que aprendem na vida real. Nossos workshops são desenhados para se adequar ao tamanho, objetivos e desafios específicos do seu negócio.", cta: null },
        { id: "02", title: "A Jornada de Transformação — 11 Sessões", desc: "Um caminho dedicado para se tornar um líder consciente que inspira confiança e gera impacto sustentável. Desenhado para redefinir a arquitetura da sua liderança — cultivando a coragem para tomar as decisões necessárias.", cta: "Agendar uma sessão gratuita →" },
        { id: "03", title: "O Mapa da Liderança Moderna", desc: "Uma abordagem dinâmica que reconhece que a liderança não está fixada em uma posição. Movendo-se fluidamente entre as 5 faces — Líder Interior, Líder à Frente, Líder ao Lado, Líder em Campo e Líder Atrás — o líder responde às necessidades do momento.", cta: null },
        { id: "04", title: "A Anatomia de uma Equipe", desc: "As melhores equipes são muito mais do que a soma de suas partes. O sucesso vai além de indivíduos talentosos sob um líder habilidoso — as melhores equipes compartilham características fundamentais que vão muito mais fundo.", cta: null },
        { id: "05", title: "O Poder da Narrativa", desc: "Mais do que comunicação, a narrativa constrói confiança, cria significado e fortalece a conexão humana. Ela ajuda indivíduos e equipes a se verem como parte de uma jornada compartilhada. Autenticidade é a chave. Se você acredita no que diz, seu público acredita também.", cta: null },
      ],
    },

    sessionHighlight: {
      eyebrow: "Programa Assinatura",
      title: "A Jornada de Transformação — 11 Sessões",
      lead: "Este é um caminho dedicado para desenvolver o seu Líder Interior e criar um impacto positivo duradouro. Foi desenhado para redefinir a arquitetura da sua liderança e como você responde aos eventos da vida.",
      features: ["11 sessões estruturadas", "Individual ou grupo pequeno", "Presencial ou online", "Sessão de avaliação gratuita", "Aplicação pessoal & profissional", "Orientação contínua & profundidade"],
      cta: "Agendar uma sessão de avaliação gratuita →",
    },

    leadershipMap: {
      eyebrow: "Framework",
      title: "O Mapa da Liderança Moderna",
      lead: "Uma abordagem de liderança mais dinâmica reconhece que a liderança não está fixada em uma posição. Movendo-se fluidamente entre as 5 faces da Liderança, o líder responde às necessidades do momento e aos pontos fortes do grupo.",
      body1: "Cada face carrega sua própria energia, responsabilidade e modo de influência. Grandes líderes sabem qual face o momento exige — e têm a consciência e a coragem de transitar entre elas.",
      body2: "O resultado não é apenas uma equipe que segue direções — mas uma que contribui, evolui e prospera juntos.",
      faces: [
        { label: "Líder Interior", desc: "O núcleo interno — autoconhecimento, valores, presença." },
        { label: "Líder à Frente", desc: "Definindo direção, inspirando visão, abrindo caminhos." },
        { label: "Líder ao Lado", desc: "Colaboração, co-criação, liderança entre pares." },
        { label: "Líder em Campo", desc: "Execução prática, agilidade, presença na ação." },
        { label: "Líder Atrás", desc: "Desenvolvendo outros, empoderando, deixando a equipe brilhar." },
      ],
    },

    about: {
      eyebrow: "Sobre Reinaldo",
      title1: "Facilitador.",
      title2: "Pensador de liderança.",
      lead: "Reinaldo Catarino é um facilitador e pensador de liderança dedicado a ajudar indivíduos e equipes a performar no seu melhor — sem perder de vista o que nos torna humanos.",
      body1: "Seu trabalho está na interseção de autoliderança, trabalho em equipe e execução prática, traduzindo ideias complexas em ferramentas simples e acionáveis que geram resultados reais. Com foco no aprendizado vivencial, Reinaldo cria espaços onde as pessoas não apenas aprendem conceitos — elas os vivem.",
      body2: "Em vez de prescrever modelos rígidos, ele acredita que a liderança é dinâmica: a capacidade de se adaptar, responder e servir às necessidades tanto do indivíduo quanto do grupo.",
      quote: "\"Performance e humanidade não são opostos — são mais fortes quando desenvolvidos juntos.\"",
    },

    resources: {
      eyebrow: "Recursos",
      title: "Lista de leitura para a jornada de liderança.",
      lead: "Uma seleção cuidadosa — não apenas recomendações, mas portas de entrada para os temas que permeiam o trabalho de Reinaldo: coragem, consciência, comunicação, significado e presença.",
      books: [
        { category: "Liderança", title: "The Stake", subtitle: "The Making of Leaders", author: "Henry Kimsey-House & David Skibbins", summary: "Um poderoso framework para entender o que realmente significa assumir a liderança — não como um papel, mas como uma identidade." },
        { category: "Autoliderança", title: "Leadership from the Inside Out", subtitle: "Becoming a Leader for Life", author: "Kevin Cashman", summary: "Explora como a liderança autêntica emerge do profundo autoconhecimento — seus valores, propósito e a história que você carrega." },
        { category: "Potencial", title: "Hidden Potential", subtitle: "The Science of Achieving Greater Things", author: "Adam Grant", summary: "Desafia a ideia de que o talento é fixo. Um argumento convincente de como caráter e oportunidade desbloqueiam um crescimento extraordinário." },
        { category: "Bem-estar", title: "The Good Life", subtitle: "", author: "Robert Waldinger & Marc Schulz", summary: "Baseado no mais longo estudo sobre felicidade, este livro revela que relacionamentos — não realizações — são a base de uma vida bem vivida." },
        { category: "Coragem", title: "A Promised Land", subtitle: "", author: "Barack Obama", summary: "Um relato profundamente humano de liderança sob pressão, complexidade moral e o peso de decisões que moldam milhões de vidas." },
        { category: "Resiliência", title: "What Happened to You?", subtitle: "Conversations on Trauma, Resilience, and Healing", author: "Bruce D. Perry & Oprah Winfrey", summary: "Reencadra como entendemos comportamento e emoção — essencial para uma liderança compassiva." },
        { category: "Hábitos", title: "Atomic Habits", subtitle: "", author: "James Clear", summary: "O guia definitivo para construir sistemas que tornam a mudança inevitável, em vez de depender de força de vontade ou motivação." },
        { category: "Paz", title: "The Anatomy of Peace", subtitle: "", author: "The Arbinger Institute", summary: "Revela como muitas vezes nos tornamos a fonte dos próprios conflitos que buscamos resolver — e como uma mudança de coração muda tudo." },
        { category: "Significado", title: "Man's Search for Meaning", subtitle: "", author: "Viktor E. Frankl", summary: "Um dos livros mais importantes já escritos. O relato de Frankl sobre encontrar propósito no sofrimento mais extremo permanece profundamente transformador." },
        { category: "Resiliência", title: "The Stoic Challenge", subtitle: "", author: "William B. Irvine", summary: "Um guia moderno da sabedoria estoica — reencadrando obstáculos como testes para fortalecer o caráter." },
        { category: "Conexão", title: "Talking to Strangers", subtitle: "", author: "Malcolm Gladwell", summary: "Uma exploração reveladora de por que interpretamos tão mal as pessoas que não conhecemos — e o que isso nos custa." },
      ],
    },

    contact: {
      eyebrow: "Contato",
      title: "Agende uma sessão de avaliação gratuita.",
      lead: "A primeira sessão é a porta de entrada — para entender seu contexto, seu momento e qual jornada faz mais sentido para você.",
      format: "Formato",
      formatValue: "Presencial ou online",
      email: "E-mail",
      emailValue: "contato@reinaldocatarino.com",
      namePlaceholder: "Seu nome",
      emailPlaceholder: "Seu e-mail",
      selectDefault: "Gostaria de conversar sobre",
      selectOptions: ["Liderança Corporativa", "Crescimento Pessoal", "Programa de 11 Sessões", "Workshop Vivencial", "Desenvolvimento de Equipe"],
      textareaPlaceholder: "Descreva brevemente sua situação, desafio ou interesse.",
      submit: "Enviar solicitação",
    },

    footer: {
      subtitle: "Mindfulness Liderança",
      links: ["Organizações", "Crescimento Pessoal", "Programas", "Recursos", "Contato"],
      copyright: "© 2026 Reinaldo Catarino",
    },
  },

  es: {
    locale: "es" as Locale,
    flag: "🇪🇸",
    label: "ES",
    lang: "es",

    nav: {
      organizations: "Organizaciones",
      personal: "Crecimiento Personal",
      howWeHelp: "Cómo Ayudamos",
      resources: "Recursos",
      contact: "Contacto",
      freeSession: "Sesión Gratuita",
    },

    hero: {
      eyebrow: "Presencia · Consciencia · Inteligencia Emocional",
      headline1: "MINDFULNESS",
      headline2: "LIDERAZGO",
      question: "¿Eres un líder que inspira, o un líder que gestiona un equipo funcional?",
      body: "El gran liderazgo es más que mantener al equipo en curso — se trata de inspirar a las personas a moverse con propósito. Cuando la dirección y la inspiración se unen, los equipos no solo funcionan — prosperan.",
      personalQuestion: "¿Cómo experimentas el liderazgo en tu vida personal: en casa, con tus hijos y familiares, en el tráfico de ida y vuelta al trabajo?",
      ctaPrimary: "Programar una sesión gratuita →",
      ctaSecondary: "Explorar programas",
      pills: ["Talleres Vivenciales", "Liderazgo Corporativo", "Crecimiento Personal", "Presencial & Online"],
      cardPills: ["Presencia", "Consciencia", "Inteligencia Emocional"],
      cardQuote: "El rendimiento y la humanidad no son opuestos — son más fuertes cuando se desarrollan juntos.",
      cardItems: ["Aprendizaje vivencial", "Grupos pequeños", "Transformación real", "Liderazgo con conciencia"],
    },

    questionSection: {
      eyebrow: "La Pregunta",
      title: "¿Eres un líder que inspira — o uno que gestiona?",
      lead: "El gran liderazgo es más que mantener al equipo en curso — se trata de inspirar a las personas a moverse con propósito. Una gestión sólida garantiza estructura, eficiencia y resultados, pero el verdadero liderazgo enciende la motivación y saca lo mejor de los demás.",
      body: "Cuando la dirección y la inspiración se unen, los equipos no solo funcionan — prosperan.",
    },

    twoPaths: {
      eyebrow: "Dos Caminos, Un Destino",
      title1: "Dos Caminos.",
      title2: "Un Destino.",
      personal: {
        tag: "Crecimiento Personal",
        title: "El liderazgo empieza desde adentro",
        sub: "Un viaje de autoconocimiento, presencia y transformación interior.",
        items: [
          { label: "Tipo energético", desc: "Comprende tu energía natural y cómo te presentas." },
          { label: "¿Cuál es tu superpoder?", desc: "Descubre las fortalezas únicas que te definen." },
          { label: "El poder de las palabras", desc: "El lenguaje moldea la realidad — aprende a usarlo con intención." },
          { label: "13 energías del espacio", desc: "Amplía la conciencia de los entornos que moldean el comportamiento." },
        ],
      },
      corporate: {
        tag: "Liderazgo Corporativo",
        title: "El liderazgo transforma equipos",
        sub: "Herramientas prácticas para liderar personas, resolver conflictos y construir cultura.",
        items: [
          { label: "Co-liderazgo", desc: "Lidera junto a tus pares y multiplica el impacto colectivo." },
          { label: "Resolución de conflictos", desc: "Convierte la tensión en catalizador de crecimiento y alineación." },
          { label: "Anatomía de un equipo", desc: "Comprende qué hace prosperar a los equipos más allá del talento individual." },
          { label: "Cambio de comportamiento", desc: "Transforma la mentalidad y construye cambios duraderos en la cultura organizacional." },
        ],
      },
      mergePersonalTag: "Vía personal",
      mergeCorporateTag: "Vía corporativa",
      mergePersonalItems: ["Consciencia interior", "Presencia & lenguaje", "Propósito & valores"],
      mergeCorporateItems: ["Dinámica de equipo", "Cultura & comunicación", "Impacto sostenible"],
      mergeEyebrow: "Donde ambos caminos se encuentran",
      mergeTitle: "El Viaje de Transformación — 11 Sesiones",
      mergeBody: "Ya sea que empieces desde adentro o desde tu organización, ambos caminos llevan al mismo destino: un líder que inspira confianza, genera cambio significativo y saca lo mejor de los demás.",
      ctaPrimary: "Programar una sesión gratuita →",
      ctaSecondary: "Explorar programas",
    },

    whyDifferent: {
      eyebrow: "Por Qué Es Diferente",
      title: "POR QUÉ ESTE PROGRAMA ES DIFERENTE",
      cards: [
        { num: "01", title: "No sobre técnicas. Sobre presencia.", body: "Este no es un curso de habilidades de liderazgo. Es una invitación a un encuentro real con cómo te presentas — tu energía, tu lenguaje, tus decisiones." },
        { num: "02", title: "Vivencial, no teórico.", body: "Cada sesión está diseñada para que los participantes no solo aprendan conceptos — los vivan. La reflexión, la práctica y la aplicación real están presentes en cada encuentro." },
        { num: "03", title: "Adaptado a tu realidad.", body: "Sin modelos rígidos. Cada programa se moldea alrededor del tamaño, los objetivos y los desafíos específicos de tu negocio o contexto personal." },
        { num: "04", title: "Humanidad y rendimiento juntos.", body: "En el núcleo del trabajo hay una idea simple: el rendimiento y la humanidad no son opuestos — son más fuertes cuando se desarrollan juntos." },
      ],
      quote: "\"Mi trabajo no es sobre enseñar técnicas.\nEs sobre transformación personal y sobre reinvención personal.\"",
      quoteAuthor: "— Reinaldo Catarino",
    },

    programs: {
      eyebrow: "Cómo Ayudamos",
      title: "Programas & Enfoques",
      lead: "Cada formato está diseñado para encontrarte donde estás — y llevarte a un nuevo lugar.",
      workshops: [
        { id: "01", title: "Talleres", desc: "A través de un enfoque totalmente vivencial, los participantes se involucran activamente, practican y aplican lo que aprenden en la vida real. Nuestros talleres están diseñados para adaptarse al tamaño, objetivos y desafíos específicos de tu negocio.", cta: null },
        { id: "02", title: "El Viaje de Transformación — 11 Sesiones", desc: "Un camino dedicado para convertirte en un líder consciente que inspira confianza y genera impacto sostenible. Diseñado para redefinir la arquitectura de tu liderazgo — cultivando el coraje para tomar las decisiones necesarias.", cta: "Programar una sesión gratuita →" },
        { id: "03", title: "El Mapa del Liderazgo Moderno", desc: "Un enfoque dinámico que reconoce que el liderazgo no está fijo en una posición. Moviéndose fluidamente entre las 5 caras — Líder Interior, Líder al Frente, Líder al Lado, Líder en el Campo y Líder Detrás — el líder responde a las necesidades del momento.", cta: null },
        { id: "04", title: "La Anatomía de un Equipo", desc: "Los mejores equipos son mucho más que la suma de sus partes. El éxito va más allá de individuos talentosos bajo un líder habilidoso — los mejores equipos comparten características fundamentales que van mucho más profundo.", cta: null },
        { id: "05", title: "El Poder del Storytelling", desc: "Más que comunicación, el storytelling construye confianza, crea significado y fortalece la conexión humana. Ayuda a individuos y equipos a verse como parte de un viaje compartido. La autenticidad es clave. Si crees en lo que dices, tu audiencia también lo creerá.", cta: null },
      ],
    },

    sessionHighlight: {
      eyebrow: "Programa Insignia",
      title: "El Viaje de Transformación — 11 Sesiones",
      lead: "Este es un camino dedicado para desarrollar tu Líder Interior y crear un impacto positivo duradero. Está diseñado para redefinir la arquitectura de tu liderazgo y cómo respondes a los eventos de la vida.",
      features: ["11 sesiones estructuradas", "Individual o grupo pequeño", "Presencial u online", "Sesión de evaluación gratuita", "Aplicación personal & profesional", "Orientación continua & profundidad"],
      cta: "Programar una sesión de evaluación gratuita →",
    },

    leadershipMap: {
      eyebrow: "Framework",
      title: "El Mapa del Liderazgo Moderno",
      lead: "Un enfoque de liderazgo más dinámico reconoce que el liderazgo no está fijo en una posición. Moviéndose fluidamente entre las 5 caras del Liderazgo, el líder responde a las necesidades del momento y a las fortalezas del grupo.",
      body1: "Cada cara lleva su propia energía, responsabilidad y modo de influencia. Los grandes líderes saben qué cara exige el momento — y tienen la consciencia y el coraje para moverse entre ellas.",
      body2: "El resultado no es solo un equipo que sigue instrucciones — sino uno que contribuye, evoluciona y prospera juntos.",
      faces: [
        { label: "Líder Interior", desc: "El núcleo interno — autoconocimiento, valores, presencia." },
        { label: "Líder al Frente", desc: "Marcando dirección, inspirando visión, abriendo camino." },
        { label: "Líder al Lado", desc: "Colaboración, co-creación, liderazgo entre pares." },
        { label: "Líder en el Campo", desc: "Ejecución práctica, agilidad, presencia en la acción." },
        { label: "Líder Detrás", desc: "Desarrollando a otros, empoderando, dejando brillar al equipo." },
      ],
    },

    about: {
      eyebrow: "Sobre Reinaldo",
      title1: "Facilitador.",
      title2: "Pensador de liderazgo.",
      lead: "Reinaldo Catarino es un facilitador y pensador de liderazgo dedicado a ayudar a individuos y equipos a rendir al máximo — sin perder de vista lo que nos hace humanos.",
      body1: "Su trabajo se encuentra en la intersección de autoliderazgo, trabajo en equipo y ejecución práctica, traduciendo ideas complejas en herramientas simples y accionables que generan resultados reales. Con foco en el aprendizaje vivencial, Reinaldo crea espacios donde las personas no solo aprenden conceptos — los viven.",
      body2: "En lugar de prescribir modelos rígidos, cree que el liderazgo es dinámico: la capacidad de adaptarse, responder y servir a las necesidades tanto del individuo como del grupo.",
      quote: "\"El rendimiento y la humanidad no son opuestos — son más fuertes cuando se desarrollan juntos.\"",
    },

    resources: {
      eyebrow: "Recursos",
      title: "Lista de lectura para el viaje de liderazgo.",
      lead: "Una selección cuidadosa — no solo recomendaciones, sino puertas de entrada a los temas que atraviesan el trabajo de Reinaldo: coraje, consciencia, comunicación, significado y presencia.",
      books: [
        { category: "Liderazgo", title: "The Stake", subtitle: "The Making of Leaders", author: "Henry Kimsey-House & David Skibbins", summary: "Un poderoso framework para entender lo que realmente significa asumir el liderazgo — no como un rol, sino como una identidad." },
        { category: "Autoliderazgo", title: "Leadership from the Inside Out", subtitle: "Becoming a Leader for Life", author: "Kevin Cashman", summary: "Explora cómo el liderazgo auténtico emerge del profundo autoconocimiento — tus valores, propósito y la historia que llevas." },
        { category: "Potencial", title: "Hidden Potential", subtitle: "The Science of Achieving Greater Things", author: "Adam Grant", summary: "Desafía la idea de que el talento es fijo. Un argumento convincente de cómo el carácter y la oportunidad desbloquean un crecimiento extraordinario." },
        { category: "Bienestar", title: "The Good Life", subtitle: "", author: "Robert Waldinger & Marc Schulz", summary: "Basado en el estudio más largo sobre la felicidad, revela que las relaciones — no los logros — son la base de una vida bien vivida." },
        { category: "Coraje", title: "A Promised Land", subtitle: "", author: "Barack Obama", summary: "Un relato profundamente humano de liderazgo bajo presión, complejidad moral y el peso de decisiones que moldean millones de vidas." },
        { category: "Resiliencia", title: "What Happened to You?", subtitle: "Conversations on Trauma, Resilience, and Healing", author: "Bruce D. Perry & Oprah Winfrey", summary: "Reencuadra cómo entendemos el comportamiento y la emoción — esencial para un liderazgo compasivo." },
        { category: "Hábitos", title: "Atomic Habits", subtitle: "", author: "James Clear", summary: "La guía definitiva para construir sistemas que hacen el cambio inevitable, en lugar de depender de fuerza de voluntad o motivación." },
        { category: "Paz", title: "The Anatomy of Peace", subtitle: "", author: "The Arbinger Institute", summary: "Revela cómo a menudo nos convertimos en la fuente de los conflictos que buscamos resolver — y cómo un cambio de corazón lo cambia todo." },
        { category: "Significado", title: "Man's Search for Meaning", subtitle: "", author: "Viktor E. Frankl", summary: "Uno de los libros más importantes jamás escritos. El relato de Frankl sobre encontrar propósito en el sufrimiento más extremo sigue siendo profundamente transformador." },
        { category: "Resiliencia", title: "The Stoic Challenge", subtitle: "", author: "William B. Irvine", summary: "Una guía moderna de la sabiduría estoica — reencuadrando los obstáculos como pruebas para fortalecer el carácter." },
        { category: "Conexión", title: "Talking to Strangers", subtitle: "", author: "Malcolm Gladwell", summary: "Una exploración reveladora de por qué malinterpretamos tan consistentemente a las personas que no conocemos — y lo que nos cuesta." },
      ],
    },

    contact: {
      eyebrow: "Contacto",
      title: "Programa una sesión de evaluación gratuita.",
      lead: "La primera sesión es la puerta de entrada — para entender tu contexto, tu momento y qué viaje tiene más sentido para ti.",
      format: "Formato",
      formatValue: "Presencial u online",
      email: "Correo",
      emailValue: "contato@reinaldocatarino.com",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "Tu correo",
      selectDefault: "Me gustaría hablar sobre",
      selectOptions: ["Liderazgo Corporativo", "Crecimiento Personal", "Programa de 11 Sesiones", "Taller Vivencial", "Desarrollo de Equipo"],
      textareaPlaceholder: "Describe brevemente tu situación, desafío o interés.",
      submit: "Enviar solicitud",
    },

    footer: {
      subtitle: "Mindfulness Liderazgo",
      links: ["Organizaciones", "Crecimiento Personal", "Programas", "Recursos", "Contacto"],
      copyright: "© 2026 Reinaldo Catarino",
    },
  },
};