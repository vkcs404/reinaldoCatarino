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
      freeSession: "Schedule a Free Session",
    },

    hero: {
      eyebrow: "Presence · Awareness · Emotional Intelligence",
      headline1: "REAL CONNECTION",
      headline2: "WORKSHOPS",
      body: "In today's fast-paced world, millions of professionals walk into work feeling disconnected, uninspired, and drained by their environment. Outdated management tactics no longer work; today's high-performance teams demand an ecosystem rooted in human-centric leadership and mutual respect.",
      personalQuestion: "How do you experience leadership in your life: at home, at work, with your family, in traffic, at the supermarket?",
      ctaPrimary: "Schedule a Free Session →",
      ctaSecondary: "Explore programs",
      pills: [
        "Lack of clear communication leads to mistakes",
        "Miscommunication causes frustration and errors",
        "Goals become unclear or unreachable",
        "Conflict arises from misunderstanding",
        "Confusion hampers productivity and workflow",
        "Team members feel lost and unsupported",
        "Employee morale suffers without clear guidance",
        "Important feedback gets lost in translation",
      ],
      cardPills: ["Presence", "Awareness", "Emotional Intelligence"],
      cardQuote: "Performance and humanity are not opposites — they are strongest when developed together.",
      cardItems: ["Experiential learning", "Small groups", "Real transformation", "Leadership with conscience"],
    },

    questionSection: {
      eyebrow: "The Question",
      title: "Are you a leader who inspires — or a leader who manages a functional team?",
      lead: "Great Leadership is more than keeping a team on track — it's about inspiring people to move with purpose. While strong management ensures structure, efficiency, and results, true leadership sparks motivation and brings out the best in others.",
      body: "When direction and inspiration come together, teams don't just function — they thrive.",
    },

    twoPaths: {
      eyebrow: "The Secret Weapon",
      title1: "The Secret Weapon",
      title2: "That Will Transform Your Business.",
      personal: {
        tag: "Personal Growth",
        title: "Leadership starts from within",
        sub: "A journey of self-awareness, presence, and inner transformation.",
        items: [
          { label: "This Wonderful and Invisible World of Energy", desc: "Explore how presence and energy quietly shape every interaction you lead." },
          { label: "What's Your Superpower?", desc: "Discover the unique strengths that define you." },
          { label: "The Power of Words", desc: "Language shapes reality — learn to use it intentionally." },
          { label: "Discover Your Communication Strengths Through Self-Knowledge", desc: "Turn self-awareness into clearer, more authentic communication." },
        ],
      },
      corporate: {
        tag: "Corporate Leadership",
        title: "Leadership transforms teams",
        sub: "Practical tools to lead people, resolve conflict, and build culture.",
        items: [
          { label: "Co-Leadership", desc: "Lead alongside peers and multiply collective impact." },
          { label: "Conflict Resolution", desc: "Turn tension into a catalyst for growth and alignment." },
          { label: "The Anatomy of a Team", desc: "Understand what makes teams thrive beyond individual talent." },
          { label: "Behavioral Change", desc: "Shift mindset and build lasting change in organizational culture." },
        ],
      },
      mergePersonalTag: "Personal track",
      mergeCorporateTag: "Corporate track",
      mergePersonalItems: ["Inner awareness", "Presence & language", "Purpose & values"],
      mergeCorporateItems: ["Team dynamics", "Culture & communication", "Sustainable impact"],
      mergeEyebrow: "Where both paths meet",
      mergeTitle: "The 11-Session Transformation Journey",
      mergeBody: "Whether you start from within or from your organization, both roads lead to the same destination: a human being who inspires trust, meaningful change, and brings out the best in others.",
      ctaPrimary: "Schedule a Free Session →",
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
        { id: "01", title: "Workshops", desc: "Through a fully experiential approach, participants actively engage, practice, and apply what they learn in real life. Our workshops are designed to fit your business's size, goals, and specific challenges, ensuring relevant and meaningful outcomes.", cta: "Schedule a Free Session →" },
        { id: "02", title: "The 11-Session Transformation Journey", desc: "A dedicated path to becoming a mindful leader who inspires trust and drives sustainable impact. Designed to redefine the architecture of your leadership — cultivating the courage to make necessary decisions and the mindset shift to navigate complex organizational challenges.", cta: "Schedule a Free Session →" },
        { id: "03", title: "The Anatomy of a Team", desc: "It's easy to think that the success of a team comes from highly accomplished individuals under a skilled leader — but the best teams share certain basic characteristics that go far deeper. The best teams are far more than the sum of their parts.", cta: "Schedule a Free Session →" },
        { id: "04", title: "The Power of Storytelling", desc: "More than just communication, storytelling builds trust, creates meaning and strengthens human connection. It helps individuals and teams see themselves as part of a shared journey. Authenticity is key. If you believe in what you say, your audience believes it too.", cta: "Schedule a Free Session →" },
      ],
    },

    team: {
      eyebrow: "Who We Are",
      title: "The people behind Real Connection Workshops",
      lead: "Three trajectories, one conviction: performance and humanity grow together.",
      // TODO: replace with the real bios and photos (/public/bio-*.jpg).
      members: [
        {
          id: "reinaldo",
          name: "Reinaldo Catarino",
          role: "Founder & Lead Facilitator",
          photo: "/bio-reinaldo.jpg",
          bio: "[Placeholder] Reinaldo's biography — career, background, what led him to human-centric leadership and the creation of Real Connection Workshops.",
        },
        {
          id: "daniela",
          name: "Daniela",
          role: "Facilitator",
          photo: "/bio-daniela.jpg",
          bio: "[Placeholder] Daniela's biography — background, expertise, and the perspective she brings to the work.",
        },
        {
          id: "paula",
          name: "Paula",
          role: "Facilitator & Coach",
          photo: "/bio-paula.jpg",
          bio: "My career began in Engineering, but I soon discovered that my true passion was understanding and developing people. That realization led me to pursue leadership development and coaching, earning certifications through the Co-Active Training Institute (CTI) and the International Coaching Federation (ICF) in 2018, followed by advanced studies in neuroscience, transformational coaching, and sex and relationship coaching. Today, I work with both individuals and organizations, helping people develop greater self-awareness, strengthen communication, lead with authenticity, and create meaningful, lasting change. While I value one-on-one coaching, my greatest passion is facilitating transformative workshops where collective learning and shared experiences unlock powerful personal and professional growth. By combining intuition, analytical thinking, and a deep curiosity about human behavior, I create spaces where people gain clarity, build stronger connections, and step into their full potential.",
        },
      ],
    },

    leadershipMap: {
      eyebrow: "Framework",
      title: "The Road to Modern Leadership",
      lead: "A more dynamic leadership approach recognizes that leadership is not fixed in one position. By moving fluidly among the faces of Leadership, a leader responds to the needs of the moment and the strengths of the group.",
      body1: "Each face carries its own energy, responsibility, and mode of influence. Great leaders know which face the moment calls for — and have the awareness and courage to move between them.",
      body2: "The result is not just a team that follows directions — but one that contributes, evolves, and thrives together.",
      faces: [],
    },

    about: {
      eyebrow: "About Reinaldo",
      title1: "Facilitator.",
      title2: "Leadership thinker.",
      lead: "Reinaldo Catarino is a facilitator and leadership thinker dedicated to helping individuals and teams perform at their best — without losing sight of what makes us human.",
      body1: "His work sits at the intersection of self-leadership, teamwork, and practical execution, translating complex ideas into simple, actionable tools that drive real results. With a focus on experiential learning, Reinaldo creates spaces where people don't just learn concepts — they live them.",
      body2: "Rather than prescribing rigid models, he believes leadership is dynamic: the ability to adapt, respond, and serve the needs of both the individual and the group.",
      credentials: [
        "Graduated from the Co-Active Training Institute Leadership Program at CTI, California, USA.",
        "Mentored participants for seven years as a Leadership Counselor at Whitman Walker Clinic, Washington, D.C., within the Peer Support Program.",
      ],
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

    testimonials: {
      eyebrow: "Testimonials",
      title: "What participants say",
      items: [
        { quote: "[Placeholder — replace with a real client quote.] The workshop reshaped how our leadership team communicates under pressure, and the effect on the whole company was immediate.", name: "Client Name", role: "Role · Company" },
        { quote: "[Placeholder — replace with a real client quote.] Reinaldo has a rare ability to make people feel seen. We left with practical tools and a genuinely different way of working together.", name: "Client Name", role: "Role · Company" },
        { quote: "[Placeholder — replace with a real client quote.] The 11-session journey was a turning point for me as a leader — more clarity, more presence, and far more trust across the team.", name: "Client Name", role: "Role · Company" },
      ],
    },

    conclusion: {
      eyebrow: "The Human Core",
      title: "Sustainable success begins with people.",
      body: "At the heart of every successful organization are people. When individuals cultivate self-awareness, deepen their self-knowledge, communicate with authenticity, and lead from their core values, they not only grow personally—they elevate everyone around them. Strong teams are not built solely on strategy or performance; they are built on trust, meaningful relationships, and a shared commitment to a common purpose. By valuing the human aspect of every individual, organizations create cultures where collaboration flourishes, innovation emerges naturally, and people feel empowered to bring their best selves to work. Sustainable success begins with people who know themselves, connect with others, and lead with purpose.",
      cta: "Schedule a Free Session →",
    },

    contact: {
      eyebrow: "Contact Us",
      title: "Schedule a Free Session.",
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
      subtitle: "Human-Centric Leadership",
      links: ["Organizations", "Personal Growth", "Programs", "Resources", "Contact"],
      copyright: "© 2026 Real Connection Workshops",
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
      freeSession: "Agende uma Sessão Gratuita",
    },

    hero: {
      eyebrow: "Presença · Consciência · Inteligência Emocional",
      headline1: "REAL CONNECTION",
      headline2: "WORKSHOPS",
      body: "No mundo acelerado de hoje, milhões de profissionais chegam ao trabalho se sentindo desconectados, desmotivados e esgotados pelo ambiente. Táticas de gestão ultrapassadas não funcionam mais; as equipes de alta performance de hoje exigem um ecossistema enraizado em uma liderança centrada no humano e no respeito mútuo.",
      personalQuestion: "Como você experiencia a liderança na sua vida: em casa, no trabalho, com seus familiares, no trânsito, no supermercado?",
      ctaPrimary: "Agende uma Sessão Gratuita →",
      ctaSecondary: "Explorar programas",
      pills: [
        "A falta de comunicação clara leva a erros",
        "Ruídos de comunicação geram frustração e falhas",
        "As metas se tornam vagas ou inalcançáveis",
        "Conflitos surgem de mal-entendidos",
        "A confusão prejudica a produtividade e o fluxo de trabalho",
        "Membros da equipe se sentem perdidos e sem apoio",
        "A moral da equipe sofre sem uma orientação clara",
        "Feedbacks importantes se perdem no caminho",
      ],
      cardPills: ["Presença", "Consciência", "Inteligência Emocional"],
      cardQuote: "Performance e humanidade não são opostos — são mais fortes quando desenvolvidos juntos.",
      cardItems: ["Aprendizado vivencial", "Grupos pequenos", "Transformação real", "Liderança com consciência"],
    },

    questionSection: {
      eyebrow: "A Pergunta",
      title: "Você é um líder que inspira — ou um líder que gerencia uma equipe funcional?",
      lead: "A grande liderança vai além de manter a equipe nos trilhos — é sobre inspirar pessoas a se moverem com propósito. Uma gestão forte garante estrutura, eficiência e resultados, mas a verdadeira liderança acende a motivação e revela o melhor nas pessoas.",
      body: "Quando direção e inspiração se encontram, as equipes não apenas funcionam — elas florescem.",
    },

    twoPaths: {
      eyebrow: "A Arma Secreta",
      title1: "A Arma Secreta",
      title2: "Que Vai Transformar o Seu Negócio.",
      personal: {
        tag: "Crescimento Pessoal",
        title: "A liderança começa de dentro",
        sub: "Uma jornada de autoconhecimento, presença e transformação interior.",
        items: [
          { label: "Este maravilhoso e invisível mundo da energia", desc: "Explore como presença e energia moldam silenciosamente cada interação que você lidera." },
          { label: "Qual é o seu superpoder?", desc: "Descubra os pontos fortes únicos que definem você." },
          { label: "O poder das palavras", desc: "A linguagem molda a realidade — aprenda a usá-la intencionalmente." },
          { label: "Descubra suas forças de comunicação pelo autoconhecimento", desc: "Transforme o autoconhecimento em uma comunicação mais clara e autêntica." },
        ],
      },
      corporate: {
        tag: "Liderança Corporativa",
        title: "A liderança transforma equipes",
        sub: "Ferramentas práticas para liderar pessoas, resolver conflitos e construir cultura.",
        items: [
          { label: "Co-liderança", desc: "Lidere ao lado de pares e multiplique o impacto coletivo." },
          { label: "Resolução de conflitos", desc: "Transforme tensão em catalisador de crescimento e alinhamento." },
          { label: "A anatomia de uma equipe", desc: "Entenda o que faz as equipes prosperarem além do talento individual." },
          { label: "Mudança comportamental", desc: "Transforme mentalidade e construa mudanças duradouras na cultura organizacional." },
        ],
      },
      mergePersonalTag: "Trilha pessoal",
      mergeCorporateTag: "Trilha corporativa",
      mergePersonalItems: ["Consciência interior", "Presença & linguagem", "Propósito & valores"],
      mergeCorporateItems: ["Dinâmica de equipe", "Cultura & comunicação", "Impacto sustentável"],
      mergeEyebrow: "Onde os dois caminhos se encontram",
      mergeTitle: "Uma Jornada de Transformação — 11 Sessões",
      mergeBody: "Seja partindo de dentro ou da sua organização, todos os caminhos levam a um só destino: um ser humano que inspira confiança, gera mudanças significativas e revela o melhor nas pessoas.",
      ctaPrimary: "Agende uma Sessão Gratuita →",
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
        { id: "01", title: "Workshops", desc: "Por meio de uma abordagem totalmente vivencial, os participantes se engajam ativamente, praticam e aplicam o que aprendem na vida real. Nossos workshops são desenhados para se adequar ao tamanho, objetivos e desafios específicos do seu negócio.", cta: "Agende uma Sessão Gratuita →" },
        { id: "02", title: "Uma Jornada de Transformação — 11 Sessões", desc: "Um caminho dedicado para se tornar um líder consciente que inspira confiança e gera impacto sustentável. Desenhado para redefinir a arquitetura da sua liderança — cultivando a coragem para tomar as decisões necessárias.", cta: "Agende uma Sessão Gratuita →" },
        { id: "03", title: "A Anatomia de uma Equipe", desc: "É fácil pensar que o sucesso de uma equipe vem de indivíduos altamente talentosos sob um líder habilidoso — mas as melhores equipes compartilham certas características básicas que vão muito mais fundo. As melhores equipes são muito mais do que a soma de suas partes.", cta: "Agende uma Sessão Gratuita →" },
        { id: "04", title: "O Poder da Narrativa", desc: "Mais do que comunicação, a narrativa constrói confiança, cria significado e fortalece a conexão humana. Ela ajuda indivíduos e equipes a se verem como parte de uma jornada compartilhada. Autenticidade é a chave. Se você acredita no que diz, seu público acredita também.", cta: "Agende uma Sessão Gratuita →" },
      ],
    },

    team: {
      eyebrow: "Quem Somos",
      title: "As pessoas por trás do Real Connection Workshops",
      lead: "Três trajetórias, uma convicção: performance e humanidade crescem juntas.",
      members: [
        {
          id: "reinaldo",
          name: "Reinaldo Catarino",
          role: "Fundador & Facilitador Principal",
          photo: "/bio-reinaldo.jpg",
          bio: "[Placeholder] Biografia do Reinaldo — trajetória, formação e o que o levou à liderança humanizada e à criação do Real Connection Workshops.",
        },
        {
          id: "daniela",
          name: "Daniela",
          role: "Facilitadora",
          photo: "/bio-daniela.jpg",
          bio: "[Placeholder] Biografia da Daniela — trajetória, especialidade e a perspectiva que ela traz para o trabalho.",
        },
        {
          id: "paula",
          name: "Paula",
          role: "Facilitadora & Coach",
          photo: "/bio-paula.jpg",
          bio: "Minha carreira começou na Engenharia, mas logo descobri que minha verdadeira paixão era entender e desenvolver pessoas. Essa percepção me levou ao desenvolvimento de liderança e ao coaching, conquistando certificações pelo Co-Active Training Institute (CTI) e pela International Coaching Federation (ICF) em 2018, seguidas de estudos avançados em neurociência, coaching transformacional e coaching de sexo e relacionamentos. Hoje, trabalho tanto com indivíduos quanto com organizações, ajudando as pessoas a desenvolver mais autoconhecimento, fortalecer a comunicação, liderar com autenticidade e criar mudanças significativas e duradouras. Embora eu valorize o coaching individual, minha maior paixão é facilitar workshops transformadores, onde o aprendizado coletivo e as experiências compartilhadas destravam um poderoso crescimento pessoal e profissional. Combinando intuição, pensamento analítico e uma profunda curiosidade sobre o comportamento humano, crio espaços onde as pessoas ganham clareza, constroem conexões mais fortes e alcançam todo o seu potencial.",
        },
      ],
    },

    leadershipMap: {
      eyebrow: "Framework",
      title: "O Caminho da Liderança Moderna",
      lead: "Uma abordagem de liderança mais dinâmica reconhece que a liderança não está fixada em uma posição. Movendo-se fluidamente entre as faces da Liderança, o líder responde às necessidades do momento e aos pontos fortes do grupo.",
      body1: "Cada face carrega sua própria energia, responsabilidade e modo de influência. Grandes líderes sabem qual face o momento exige — e têm a consciência e a coragem de transitar entre elas.",
      body2: "O resultado não é apenas uma equipe que segue direções — mas uma que contribui, evolui e prospera juntos.",
      faces: [],
    },

    about: {
      eyebrow: "Sobre Reinaldo",
      title1: "Facilitador.",
      title2: "Pensador de liderança.",
      lead: "Reinaldo Catarino é um facilitador e pensador de liderança dedicado a ajudar indivíduos e equipes a performar no seu melhor — sem perder de vista o que nos torna humanos.",
      body1: "Seu trabalho está na interseção de autoliderança, trabalho em equipe e execução prática, traduzindo ideias complexas em ferramentas simples e acionáveis que geram resultados reais. Com foco no aprendizado vivencial, Reinaldo cria espaços onde as pessoas não apenas aprendem conceitos — elas os vivem.",
      body2: "Em vez de prescrever modelos rígidos, ele acredita que a liderança é dinâmica: a capacidade de se adaptar, responder e servir às necessidades tanto do indivíduo quanto do grupo.",
      credentials: [
        "Formado pelo Leadership Program do Co-Active Training Institute (CTI), Califórnia, EUA.",
        "Atuou por sete anos como Leadership Counselor na Whitman Walker Clinic, Washington, D.C., dentro do Peer Support Program.",
      ],
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

    testimonials: {
      eyebrow: "Depoimentos",
      title: "O que dizem os participantes",
      items: [
        { quote: "[Placeholder — substituir por um depoimento real de cliente.] O workshop transformou a forma como nossa liderança se comunica sob pressão, e o efeito em toda a empresa foi imediato.", name: "Nome do Cliente", role: "Cargo · Empresa" },
        { quote: "[Placeholder — substituir por um depoimento real de cliente.] Reinaldo tem uma rara capacidade de fazer as pessoas se sentirem vistas. Saímos com ferramentas práticas e uma forma genuinamente diferente de trabalhar juntos.", name: "Nome do Cliente", role: "Cargo · Empresa" },
        { quote: "[Placeholder — substituir por um depoimento real de cliente.] A jornada de 11 sessões foi um ponto de virada para mim como líder — mais clareza, mais presença e muito mais confiança na equipe.", name: "Nome do Cliente", role: "Cargo · Empresa" },
      ],
    },

    conclusion: {
      eyebrow: "O Núcleo Humano",
      title: "O sucesso sustentável começa com as pessoas.",
      body: "No coração de toda organização de sucesso estão as pessoas. Quando os indivíduos cultivam autoconsciência, aprofundam o autoconhecimento, comunicam-se com autenticidade e lideram a partir de seus valores essenciais, eles não crescem apenas pessoalmente — elevam todos ao seu redor. Equipes fortes não se constroem apenas sobre estratégia ou performance; constroem-se sobre confiança, relações significativas e um compromisso compartilhado com um propósito comum. Ao valorizar o aspecto humano de cada indivíduo, as organizações criam culturas onde a colaboração floresce, a inovação surge naturalmente e as pessoas se sentem capacitadas a dar o seu melhor no trabalho. O sucesso sustentável começa com pessoas que conhecem a si mesmas, conectam-se com os outros e lideram com propósito.",
      cta: "Agende uma Sessão Gratuita →",
    },

    contact: {
      eyebrow: "Contato",
      title: "Agende uma Sessão Gratuita.",
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
      subtitle: "Liderança Centrada no Humano",
      links: ["Organizações", "Crescimento Pessoal", "Programas", "Recursos", "Contato"],
      copyright: "© 2026 Real Connection Workshops",
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
      freeSession: "Agenda una Sesión Gratuita",
    },

    hero: {
      eyebrow: "Presencia · Consciencia · Inteligencia Emocional",
      headline1: "REAL CONNECTION",
      headline2: "WORKSHOPS",
      body: "En el mundo acelerado de hoy, millones de profesionales llegan al trabajo sintiéndose desconectados, desmotivados y agotados por su entorno. Las tácticas de gestión obsoletas ya no funcionan; los equipos de alto rendimiento de hoy exigen un ecosistema basado en un liderazgo centrado en las personas y el respeto mutuo.",
      personalQuestion: "¿Cómo experimentas el liderazgo en tu vida: en casa, en el trabajo, con tus familiares, en el tráfico, en el supermercado?",
      ctaPrimary: "Agenda una Sesión Gratuita →",
      ctaSecondary: "Explorar programas",
      pills: [
        "La falta de comunicación clara lleva a errores",
        "Los malentendidos generan frustración y fallos",
        "Las metas se vuelven confusas o inalcanzables",
        "Los conflictos surgen de la mala interpretación",
        "La confusión afecta la productividad y el flujo de trabajo",
        "Los miembros del equipo se sienten perdidos y sin apoyo",
        "La moral del equipo sufre sin una guía clara",
        "La retroalimentación importante se pierde en el camino",
      ],
      cardPills: ["Presencia", "Consciencia", "Inteligencia Emocional"],
      cardQuote: "El rendimiento y la humanidad no son opuestos — son más fuertes cuando se desarrollan juntos.",
      cardItems: ["Aprendizaje vivencial", "Grupos pequeños", "Transformación real", "Liderazgo con consciencia"],
    },

    questionSection: {
      eyebrow: "La Pregunta",
      title: "¿Eres un líder que inspira — o un líder que gestiona un equipo funcional?",
      lead: "El gran liderazgo es más que mantener al equipo en marcha — se trata de inspirar a las personas a moverse con propósito. Una gestión sólida garantiza estructura, eficiencia y resultados, pero el verdadero liderazgo enciende la motivación y revela lo mejor de las personas.",
      body: "Cuando la dirección y la inspiración se encuentran, los equipos no solo funcionan — florecen.",
    },

    twoPaths: {
      eyebrow: "El Arma Secreta",
      title1: "El Arma Secreta",
      title2: "Que Transformará Tu Negocio.",
      personal: {
        tag: "Crecimiento Personal",
        title: "El liderazgo comienza desde dentro",
        sub: "Un viaje de autoconocimiento, presencia y transformación interior.",
        items: [
          { label: "Este maravilloso e invisible mundo de la energía", desc: "Explora cómo la presencia y la energía moldean silenciosamente cada interacción que lideras." },
          { label: "¿Cuál es tu superpoder?", desc: "Descubre las fortalezas únicas que te definen." },
          { label: "El poder de las palabras", desc: "El lenguaje moldea la realidad — aprende a usarlo intencionalmente." },
          { label: "Descubre tus fortalezas de comunicación a través del autoconocimiento", desc: "Convierte el autoconocimiento en una comunicación más clara y auténtica." },
        ],
      },
      corporate: {
        tag: "Liderazgo Corporativo",
        title: "El liderazgo transforma equipos",
        sub: "Herramientas prácticas para liderar personas, resolver conflictos y construir cultura.",
        items: [
          { label: "Co-liderazgo", desc: "Lidera junto a tus pares y multiplica el impacto colectivo." },
          { label: "Resolución de conflictos", desc: "Convierte la tensión en un catalizador de crecimiento y alineación." },
          { label: "La anatomía de un equipo", desc: "Comprende qué hace prosperar a los equipos más allá del talento individual." },
          { label: "Cambio de comportamiento", desc: "Transforma la mentalidad y construye cambios duraderos en la cultura organizacional." },
        ],
      },
      mergePersonalTag: "Vía personal",
      mergeCorporateTag: "Vía corporativa",
      mergePersonalItems: ["Consciencia interior", "Presencia & lenguaje", "Propósito & valores"],
      mergeCorporateItems: ["Dinámica de equipo", "Cultura & comunicación", "Impacto sostenible"],
      mergeEyebrow: "Donde ambos caminos se encuentran",
      mergeTitle: "El Viaje de Transformación — 11 Sesiones",
      mergeBody: "Ya sea que empieces desde dentro o desde tu organización, todos los caminos llevan al mismo destino: un ser humano que inspira confianza, genera cambios significativos y revela lo mejor en los demás.",
      ctaPrimary: "Agenda una Sesión Gratuita →",
      ctaSecondary: "Explorar programas",
    },

    whyDifferent: {
      eyebrow: "Por Qué Es Diferente",
      title: "POR QUÉ ESTE PROGRAMA ES DIFERENTE",
      cards: [
        { num: "01", title: "No se trata de técnicas. Se trata de presencia.", body: "Este no es un curso de habilidades de liderazgo. Es una invitación a un encuentro real con la forma en que te presentas — tu energía, tu lenguaje, tus decisiones." },
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
        { id: "01", title: "Talleres", desc: "A través de un enfoque totalmente vivencial, los participantes se involucran activamente, practican y aplican lo que aprenden en la vida real. Nuestros talleres están diseñados para adaptarse al tamaño, objetivos y desafíos específicos de tu negocio.", cta: "Agenda una Sesión Gratuita →" },
        { id: "02", title: "El Viaje de Transformación — 11 Sesiones", desc: "Un camino dedicado para convertirte en un líder consciente que inspira confianza y genera impacto sostenible. Diseñado para redefinir la arquitectura de tu liderazgo — cultivando el coraje para tomar las decisiones necesarias.", cta: "Agenda una Sesión Gratuita →" },
        { id: "03", title: "La Anatomía de un Equipo", desc: "Es fácil pensar que el éxito de un equipo proviene de individuos altamente talentosos bajo un líder hábil — pero los mejores equipos comparten ciertas características básicas que van mucho más profundo. Los mejores equipos son mucho más que la suma de sus partes.", cta: "Agenda una Sesión Gratuita →" },
        { id: "04", title: "El Poder del Storytelling", desc: "Más que comunicación, el storytelling construye confianza, crea significado y fortalece la conexión humana. Ayuda a individuos y equipos a verse como parte de un viaje compartido. La autenticidad es clave. Si crees en lo que dices, tu audiencia también lo creerá.", cta: "Agenda una Sesión Gratuita →" },
      ],
    },

    team: {
      eyebrow: "Quiénes Somos",
      title: "Las personas detrás de Real Connection Workshops",
      lead: "Tres trayectorias, una convicción: el rendimiento y la humanidad crecen juntos.",
      members: [
        {
          id: "reinaldo",
          name: "Reinaldo Catarino",
          role: "Fundador & Facilitador Principal",
          photo: "/bio-reinaldo.jpg",
          bio: "[Placeholder] Biografía de Reinaldo — trayectoria, formación y lo que lo llevó al liderazgo humano y a la creación de Real Connection Workshops.",
        },
        {
          id: "daniela",
          name: "Daniela",
          role: "Facilitadora",
          photo: "/bio-daniela.jpg",
          bio: "[Placeholder] Biografía de Daniela — trayectoria, especialidad y la perspectiva que aporta al trabajo.",
        },
        {
          id: "paula",
          name: "Paula",
          role: "Facilitadora & Coach",
          photo: "/bio-paula.jpg",
          bio: "Mi carrera comenzó en la Ingeniería, pero pronto descubrí que mi verdadera pasión era comprender y desarrollar a las personas. Esa comprensión me llevó al desarrollo del liderazgo y al coaching, obteniendo certificaciones del Co-Active Training Institute (CTI) y de la International Coaching Federation (ICF) en 2018, seguidas de estudios avanzados en neurociencia, coaching transformacional y coaching de sexo y relaciones. Hoy trabajo tanto con individuos como con organizaciones, ayudando a las personas a desarrollar mayor autoconocimiento, fortalecer la comunicación, liderar con autenticidad y crear cambios significativos y duraderos. Aunque valoro el coaching individual, mi mayor pasión es facilitar talleres transformadores donde el aprendizaje colectivo y las experiencias compartidas liberan un poderoso crecimiento personal y profesional. Combinando intuición, pensamiento analítico y una profunda curiosidad por el comportamiento humano, creo espacios donde las personas ganan claridad, construyen conexiones más fuertes y alcanzan todo su potencial.",
        },
      ],
    },

    leadershipMap: {
      eyebrow: "Framework",
      title: "El Camino del Liderazgo Moderno",
      lead: "Un enfoque de liderazgo más dinámico reconoce que el liderazgo no está fijo en una posición. Moviéndose fluidamente entre las caras del Liderazgo, el líder responde a las necesidades del momento y a las fortalezas del grupo.",
      body1: "Cada cara lleva su propia energía, responsabilidad y modo de influencia. Los grandes líderes saben qué cara exige el momento — y tienen la consciencia y el coraje para moverse entre ellas.",
      body2: "El resultado no es solo un equipo que sigue instrucciones — sino uno que contribuye, evoluciona y prospera juntos.",
      faces: [],
    },

    about: {
      eyebrow: "Sobre Reinaldo",
      title1: "Facilitador.",
      title2: "Pensador de liderazgo.",
      lead: "Reinaldo Catarino es un facilitador y pensador de liderazgo dedicado a ayudar a individuos y equipos a rendir al máximo — sin perder de vista lo que nos hace humanos.",
      body1: "Su trabajo se encuentra en la intersección de autoliderazgo, trabajo en equipo y ejecución práctica, traduciendo ideas complejas en herramientas simples y accionables que generan resultados reales. Con foco en el aprendizaje vivencial, Reinaldo crea espacios donde las personas no solo aprenden conceptos — los viven.",
      body2: "En lugar de prescribir modelos rígidos, cree que el liderazgo es dinámico: la capacidad de adaptarse, responder y servir a las necesidades tanto del individuo como del grupo.",
      credentials: [
        "Graduado del Leadership Program del Co-Active Training Institute (CTI), California, EE. UU.",
        "Fue mentor durante siete años como Leadership Counselor en la Whitman Walker Clinic, Washington, D.C., dentro del Peer Support Program.",
      ],
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

    testimonials: {
      eyebrow: "Testimonios",
      title: "Lo que dicen los participantes",
      items: [
        { quote: "[Placeholder — reemplazar con un testimonio real de cliente.] El taller transformó la forma en que nuestro equipo de liderazgo se comunica bajo presión, y el efecto en toda la empresa fue inmediato.", name: "Nombre del Cliente", role: "Cargo · Empresa" },
        { quote: "[Placeholder — reemplazar con un testimonio real de cliente.] Reinaldo tiene una rara capacidad de hacer que las personas se sientan vistas. Salimos con herramientas prácticas y una forma genuinamente distinta de trabajar juntos.", name: "Nombre del Cliente", role: "Cargo · Empresa" },
        { quote: "[Placeholder — reemplazar con un testimonio real de cliente.] El viaje de 11 sesiones fue un punto de inflexión para mí como líder — más claridad, más presencia y mucha más confianza en el equipo.", name: "Nombre del Cliente", role: "Cargo · Empresa" },
      ],
    },

    conclusion: {
      eyebrow: "El Núcleo Humano",
      title: "El éxito sostenible comienza con las personas.",
      body: "En el corazón de toda organización exitosa están las personas. Cuando los individuos cultivan la autoconsciencia, profundizan su autoconocimiento, se comunican con autenticidad y lideran desde sus valores esenciales, no solo crecen personalmente — elevan a todos a su alrededor. Los equipos fuertes no se construyen únicamente sobre la estrategia o el rendimiento; se construyen sobre la confianza, las relaciones significativas y un compromiso compartido con un propósito común. Al valorar el aspecto humano de cada individuo, las organizaciones crean culturas donde la colaboración florece, la innovación surge de forma natural y las personas se sienten capacitadas para dar lo mejor de sí en el trabajo. El éxito sostenible comienza con personas que se conocen a sí mismas, conectan con los demás y lideran con propósito.",
      cta: "Agenda una Sesión Gratuita →",
    },

    contact: {
      eyebrow: "Contacto",
      title: "Agenda una Sesión Gratuita.",
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
      subtitle: "Liderazgo Centrado en las Personas",
      links: ["Organizaciones", "Crecimiento Personal", "Programas", "Recursos", "Contacto"],
      copyright: "© 2026 Real Connection Workshops",
    },
  },
};