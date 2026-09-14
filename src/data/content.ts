export type Language = 'en' | 'pt';

export const content = {
  en: {
    nav: {
      work: 'Work',
      capabilities: 'Capabilities',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      headline: 'I design and build digital experiences that move businesses forward.',
      support: 'Web design, development and digital systems for businesses that want more than just a website.',
      primaryCTA: 'View selected work',
      secondaryCTA: 'Start a project',
    },
    selectedWork: {
      title: 'Selected work',
      support: 'A selection of digital experiences built for real businesses and real operational needs.',
      viewLive: 'Visit live site',
      projects: [
        {
          id: 'geratec',
          name: 'GERATEC',
          industry: 'Industrial services, generator sales, rental, repair and maintenance.',
          description: 'A digital presence built around the company\'s operation.',
          challenge: 'The business needed stronger corporate positioning, industrial product presentation, generator sales catalogue, rental catalogue, online commercial interaction, recruitment/career portal, and content management.',
          solution: 'The website includes a product catalogue, sales/rental presentation, careers portal, back-office, and content management.',
          outcome: 'GERATEC gained a much easier way to manage vacancies, products and content through its back-office without depending on a developer for every update.',
          type: 'Corporate Website & Portal',
          url: 'https://geratec.ao',
          image: '/geratec.webp'
        },
        {
          id: 'coworking-mb',
          name: 'Coworking MB',
          industry: 'Coworking / business spaces.',
          description: 'A website that became part of the company\'s daily operation.',
          challenge: 'The business needed stronger digital positioning, greater visibility in search, professional presentation of its spaces, online room reservations, management of availability, and reduction of manual scheduling work.',
          solution: 'The website includes a reservation workflow connected to a back-office. The system prevents conflicting bookings by controlling occupied dates and times.',
          outcome: 'The business can manage room occupancy and scheduling more efficiently. The website also strengthens the company\'s digital positioning.',
          type: 'Website & Booking System',
          url: 'https://coworking.mulatobusiness.com',
          image: '/coworking.webp'
        },
        {
          id: 'movelar',
          name: 'Movelar',
          industry: 'Automotive and real estate.',
          description: 'From product catalogue to customer journey.',
          challenge: 'The business needed stronger positioning, product presentation, vehicle and property catalogues, service presentation, test-drive scheduling, property visit scheduling, product-specific proposals, and centralized management.',
          solution: 'The website connects presentation with lead and scheduling workflows.',
          outcome: 'Movelar can manage interest around vehicles and properties more efficiently and control visits and test drives through the digital platform.',
          type: 'Catalogue & Lead Workflow',
          url: 'https://movelar.site',
          image: '/movelar.webp'
        },
        {
          id: 'dgeth-grafica',
          name: 'Dgeth Gráfica',
          industry: 'Printing / graphics / visual production.',
          description: 'Turning a fragmented enquiry process into a structured digital experience.',
          challenge: 'The business needed a stronger digital presence, centralized presentation of services and products, a better perception of scale and professionalism, centralized quotation requests, ability for customers to send supporting images and attachments, and a more structured customer journey.',
          solution: 'Designed and developed the complete experience. The website is not simply a catalogue; it also supports a quotation-request workflow.',
          outcome: 'A more structured and professional enquiry and quotation process.',
          type: 'Website & Enquiry System',
          url: 'https://dgethgrafica.ao',
          image: '/dgeth.webp'
        },
        {
          id: 'vendaia',
          name: 'VENDAIA',
          industry: 'Digital / marketing.',
          description: 'Building authority through a stronger digital presence.',
          challenge: 'The business needed service presentation, portfolio presentation, digital authority, and stronger brand positioning.',
          solution: 'The website was designed to establish credibility and communicate the company\'s digital capabilities.',
          outcome: 'A stronger professional digital footprint and brand authority.',
          type: 'Agency Website',
          url: 'https://vendaia.site',
          image: '/vendaia.webp'
        }
      ]
    },
    productWork: {
      title: 'Beyond websites',
      support: 'Some problems require more than a website. I also design and develop custom digital products and operational software around specific business needs.',
      projects: [
        {
          id: 'easyfarma',
          name: 'EasyFarma',
          subtitle: 'Pharmacy management software',
          description: 'A desktop pharmacy management system designed to simplify daily operations, sales and stock control.',
          capabilities: ['POS', 'Receipt issuance', 'Inventory management', 'Low-stock alerts', 'Sales reports', 'Daily closing', 'Shift management', 'User management', 'Invoice storage', 'Best-selling product insights', 'Operational dashboard'],
          users: 'Pharmacy managers, pharmacists',
          architecture: 'Desktop application, local database, offline operation',
          status: 'Currently in use by pharmacies.'
        },
        {
          id: 'cuidamed',
          name: 'CuidaMed',
          subtitle: 'Medication management for patients and caregivers',
          description: 'An Android application designed to help people follow medication schedules while keeping caregivers, relatives or healthcare professionals informed.',
          problem: 'Medication routines can easily become inconsistent, especially when patients need support from people who are not always physically present.',
          solution: 'CuidaMed helps the patient remember what to take, how much to take and when to take it, while allowing another person to monitor the medication routine remotely.',
          capabilities: ['Medication registration', 'Dosage', 'Scheduled medication times', 'Advance reminders', 'Medication-time notifications', 'Missed medication alerts', 'Automated reports', 'Caregiver connections', 'Family member monitoring', 'Email reports'],
          platform: 'Android',
          status: 'Working APK / pre-publication product'
        }
      ]
    },
    capabilities: {
      title: 'What I build',
      support: 'I don\'t just build websites. I build digital systems around the way a business actually works.',
      description: 'That can mean a high-end corporate website, a product catalogue, an online booking system, a back-office, or a complete digital product. The scope changes with the problem.',
      items: [
        {
          title: 'Web Experiences',
          description: 'Websites built around the business, not around a template.',
          examples: 'Corporate websites, institutional websites, service websites, product catalogues, e-commerce, landing pages, digital portfolios.'
        },
        {
          title: 'Digital Systems',
          description: 'Digital workflows that replace manual processes and make businesses easier to operate.',
          examples: 'Booking systems, back-offices, dashboards, portals, content management, customer workflows, internal tools.'
        },
        {
          title: 'Digital Products',
          description: 'Custom applications designed around specific operational problems.',
          examples: 'Desktop applications, mobile applications, business software, custom platforms.'
        }
      ]
    },
    process: {
      title: 'How I work',
      delivery: 'Most projects are completed within 12–15 days after the final project information and materials are collected.',
      steps: [
        {
          number: '01',
          name: 'Understand',
          description: 'I start by understanding the business, its audience, its goals and the problem the digital experience needs to solve.'
        },
        {
          number: '02',
          name: 'Structure',
          description: 'I translate those requirements into a clear information architecture and user experience.'
        },
        {
          number: '03',
          name: 'Design',
          description: 'I create the visual direction around the business, its positioning and the people it needs to reach.'
        },
        {
          number: '04',
          name: 'Build',
          description: 'I turn the experience into a functional digital product, including the systems behind it when necessary.'
        },
        {
          number: '05',
          name: 'Refine',
          description: 'A functional prototype becomes the foundation for feedback, refinement and final delivery.'
        }
      ]
    },
    about: {
      title: 'A little about me',
      paragraphs: [
        'I\'m Edgar Kassocota, an independent Web Designer & Developer based in Angola.',
        'I have a degree in Computer Engineering with a specialization in Software Engineering.',
        'For the past 3+ years, I\'ve been designing and developing digital experiences for Angolan businesses — from corporate websites and product catalogues to custom back-office systems, desktop software and mobile applications.',
        'I work across design, strategy and development, which allows me to look beyond how a digital product looks and focus on how it works for the business behind it.',
        'My approach is simple: understand first, build with purpose, and keep the result focused on what actually matters.'
      ]
    },
    technology: {
      title: 'Built with modern tools',
      tools: ['React', 'Vite', 'Node.js', 'PostgreSQL', 'Supabase', 'Capacitor', 'Vercel']
    },
    additionalWork: {
      title: 'More work',
      support: 'A selection of additional concepts, experiments and commercial projects developed over the years.',
      note: 'Including concepts, unpublished work, and prototypes.'
    },
    contact: {
      primaryHeadline: 'Have something worth building?',
      primarySupport: 'Tell me what you\'re working on, what isn\'t working today, and what you want the digital experience to accomplish.',
      primaryCTA: 'Start a conversation',
      secondaryHeadline: 'Have a business that needs a better digital presence? Tell me what you\'re trying to achieve.',
      secondarySupport: 'I\'ll help you figure out what needs to be built.',
      email: 'edkassocota@gmail.com',
      phone: '948729630',
      instagram: 'https://instagram.com/ed_kassocota',
      linkedin: 'https://www.linkedin.com/in/edgar-kassocota-2a6a55209'
    },
    footer: {
      name: 'Edgar Kassocota',
      role: 'Web Designer & Developer',
      copyright: `© ${new Date().getFullYear()} Edgar Kassocota. All rights reserved.`
    }
  },
  pt: {
    nav: {
      work: 'Trabalho',
      capabilities: 'Capacidades',
      about: 'Sobre',
      contact: 'Contacto',
    },
    hero: {
      headline: 'Desenho e construo experiências digitais que fazem os negócios avançar.',
      support: 'Web design, desenvolvimento e sistemas digitais para empresas que procuram mais do que apenas um website.',
      primaryCTA: 'Ver trabalho selecionado',
      secondaryCTA: 'Iniciar projeto',
    },
    selectedWork: {
      title: 'Trabalho selecionado',
      support: 'Uma seleção de experiências digitais desenvolvidas para negócios reais e necessidades operacionais concretas.',
      viewLive: 'Visitar website',
      projects: [
        {
          id: 'geratec',
          name: 'GERATEC',
          industry: 'Serviços industriais, venda e aluguer de geradores, reparação e manutenção.',
          description: 'Uma presença digital construída em torno da operação da empresa.',
          challenge: 'A empresa precisava de um posicionamento corporativo mais forte, apresentação de produtos industriais, catálogo de vendas de geradores, catálogo de aluguer, interação comercial online, portal de recrutamento e gestão de conteúdo.',
          solution: 'O website inclui um catálogo de produtos, apresentação de vendas/aluguer, portal de carreiras, back-office e gestão de conteúdos.',
          outcome: 'A GERATEC ganhou uma forma muito mais simples de gerir vagas, produtos e conteúdos através do seu back-office, sem depender de um programador para cada atualização.',
          type: 'Website Corporativo & Portal',
          url: 'https://geratec.ao',
          image: '/geratec.webp'
        },
        {
          id: 'coworking-mb',
          name: 'Coworking MB',
          industry: 'Coworking / espaços empresariais.',
          description: 'Um website que se tornou parte da operação diária da empresa.',
          challenge: 'O negócio precisava de um posicionamento digital mais forte, maior visibilidade na pesquisa, apresentação profissional dos seus espaços, reservas online de salas, gestão de disponibilidade e redução do trabalho manual de agendamento.',
          solution: 'O website inclui um fluxo de reservas ligado a um back-office. O sistema previne conflitos de reservas controlando datas e horários ocupados.',
          outcome: 'A empresa pode gerir a ocupação de salas e agendamentos de forma mais eficiente. O website também fortalece o posicionamento digital da empresa.',
          type: 'Website & Sistema de Reservas',
          url: 'https://coworking.mulatobusiness.com',
          image: '/coworking.webp'
        },
        {
          id: 'movelar',
          name: 'Movelar',
          industry: 'Automóvel e imobiliário.',
          description: 'De catálogo de produtos a jornada de cliente.',
          challenge: 'O negócio precisava de um posicionamento mais forte, apresentação de produtos, catálogos de veículos e propriedades, apresentação de serviços, agendamento de test-drives, agendamento de visitas a imóveis, propostas específicas e gestão centralizada.',
          solution: 'O website conecta a apresentação com fluxos de leads e agendamentos.',
          outcome: 'A Movelar consegue gerir o interesse em veículos e propriedades de forma mais eficiente e controlar visitas e test-drives através da plataforma digital.',
          type: 'Catálogo & Gestão de Leads',
          url: 'https://movelar.site',
          image: '/movelar.webp'
        },
        {
          id: 'dgeth-grafica',
          name: 'Dgeth Gráfica',
          industry: 'Impressão / gráfica / produção visual.',
          description: 'Transformando um processo de consulta fragmentado numa experiência digital estruturada.',
          challenge: 'A empresa precisava de uma presença digital mais forte, apresentação centralizada de serviços e produtos, melhor perceção de escala e profissionalismo, pedidos de orçamento centralizados, capacidade de envio de imagens e anexos por clientes, e uma jornada de cliente mais estruturada.',
          solution: 'Design e desenvolvimento da experiência completa. O website não é um simples catálogo; suporta também um fluxo de pedidos de orçamento.',
          outcome: 'Um processo de orçamentação e consulta mais estruturado e profissional.',
          type: 'Website & Sistema de Orçamentação',
          url: 'https://dgethgrafica.ao',
          image: '/dgeth.webp'
        },
        {
          id: 'vendaia',
          name: 'VENDAIA',
          industry: 'Digital / marketing.',
          description: 'Construindo autoridade através de uma presença digital mais forte.',
          challenge: 'O negócio precisava de apresentação de serviços, apresentação de portefólio, autoridade digital e um posicionamento de marca mais forte.',
          solution: 'O website foi concebido para estabelecer credibilidade e comunicar as capacidades digitais da empresa.',
          outcome: 'Uma presença digital profissional mais forte e maior autoridade de marca.',
          type: 'Website de Agência',
          url: 'https://vendaia.site',
          image: '/vendaia.webp'
        }
      ]
    },
    productWork: {
      title: 'Para além de websites',
      support: 'Alguns problemas exigem mais do que um website. Também desenho e desenvolvo produtos digitais à medida e software operacional focado em necessidades empresariais específicas.',
      projects: [
        {
          id: 'easyfarma',
          name: 'EasyFarma',
          subtitle: 'Software de gestão de farmácias',
          description: 'Um sistema desktop de gestão de farmácias concebido para simplificar as operações diárias, vendas e controlo de stock.',
          capabilities: ['POS', 'Emissão de recibos', 'Gestão de inventário', 'Alertas de stock baixo', 'Relatórios de vendas', 'Fecho diário', 'Gestão de turnos', 'Gestão de utilizadores', 'Armazenamento de faturas', 'Insights de produtos mais vendidos', 'Dashboard operacional'],
          users: 'Gestores de farmácia, farmacêuticos',
          architecture: 'Aplicação desktop, base de dados local, funcionamento offline',
          status: 'Atualmente em uso em farmácias.'
        },
        {
          id: 'cuidamed',
          name: 'CuidaMed',
          subtitle: 'Gestão de medicação para pacientes e cuidadores',
          description: 'Uma aplicação Android desenhada para ajudar as pessoas a seguir horários de medicação, mantendo cuidadores, familiares ou profissionais de saúde informados.',
          problem: 'As rotinas de medicação podem facilmente tornar-se inconsistentes, especialmente quando os pacientes precisam de apoio de pessoas que nem sempre estão presentes.',
          solution: 'O CuidaMed ajuda o paciente a lembrar-se do que tomar, da quantidade e quando, permitindo que outra pessoa monitorize a rotina de medicação remotamente.',
          capabilities: ['Registo de medicação', 'Dosagem', 'Horários programados', 'Lembretes antecipados', 'Notificações na hora da toma', 'Alertas de medicação falhada', 'Relatórios automáticos', 'Conexão com cuidadores', 'Monitorização familiar', 'Relatórios por email'],
          platform: 'Android',
          status: 'APK Funcional / Produto pré-publicação'
        }
      ]
    },
    capabilities: {
      title: 'O que eu construo',
      support: 'Eu não desenvolvo apenas websites. Construo sistemas digitais pensados para a forma como cada negócio realmente funciona.',
      description: 'Isso pode significar um website institucional de alto nível, um catálogo de produtos, um sistema de reservas, um back-office ou um produto digital completo. O escopo muda de acordo com o problema.',
      items: [
        {
          title: 'Experiências Web',
          description: 'Websites construídos à volta do negócio, não de um template.',
          examples: 'Websites corporativos, institucionais, apresentação de serviços, catálogos de produtos, e-commerce, landing pages, portefólios.'
        },
        {
          title: 'Sistemas Digitais',
          description: 'Fluxos de trabalho digitais que substituem processos manuais e tornam as empresas mais fáceis de operar.',
          examples: 'Sistemas de reservas, back-offices, dashboards, portais, gestão de conteúdo, fluxos de clientes, ferramentas internas.'
        },
        {
          title: 'Produtos Digitais',
          description: 'Aplicações personalizadas concebidas para problemas operacionais específicos.',
          examples: 'Aplicações desktop, aplicações mobile, software de gestão, plataformas customizadas.'
        }
      ]
    },
    process: {
      title: 'Como trabalho',
      delivery: 'A maioria dos projectos é concluída em 12–15 dias após a recolha de todas as informações e materiais necessários.',
      steps: [
        {
          number: '01',
          name: 'Compreender',
          description: 'Começo por compreender o negócio, o seu público, os seus objetivos e o problema que a experiência digital precisa de resolver.'
        },
        {
          number: '02',
          name: 'Estruturar',
          description: 'Traduzo esses requisitos numa arquitetura de informação clara e numa experiência de utilizador fluida.'
        },
        {
          number: '03',
          name: 'Desenhar',
          description: 'Crio a direção visual à volta do negócio, do seu posicionamento e das pessoas que precisa de alcançar.'
        },
        {
          number: '04',
          name: 'Construir',
          description: 'Transformo a experiência num produto digital funcional, incluindo os sistemas que a suportam, quando necessário.'
        },
        {
          number: '05',
          name: 'Refinar',
          description: 'Um protótipo funcional torna-se a base para feedback, aperfeiçoamento e entrega final.'
        }
      ]
    },
    about: {
      title: 'Um pouco sobre mim',
      paragraphs: [
        'Sou Edgar Kassocota, Web Designer & Developer independente, baseado em Angola.',
        'Sou licenciado em Engenharia Informática com especialidade em Engenharia de Software.',
        'Há mais de 3 anos que desenho e desenvolvo experiências digitais para empresas angolanas — desde websites corporativos e catálogos de produtos até sistemas de back-office, software desktop e aplicações mobile.',
        'Trabalho entre design, estratégia e desenvolvimento, o que me permite olhar para além da aparência de um produto digital e concentrar-me também na forma como ele funciona para o negócio.',
        'A minha abordagem é simples: compreender primeiro, construir com propósito e manter o resultado focado no que realmente importa.'
      ]
    },
    technology: {
      title: 'Construído com ferramentas modernas',
      tools: ['React', 'Vite', 'Node.js', 'PostgreSQL', 'Supabase', 'Capacitor', 'Vercel']
    },
    additionalWork: {
      title: 'Mais trabalho',
      support: 'Uma seleção de conceitos adicionais, experiências e projetos comerciais desenvolvidos ao longo dos anos.',
      note: 'Incluindo conceitos, trabalhos não publicados e protótipos.'
    },
    contact: {
      primaryHeadline: 'Tem algo que vale a pena construir?',
      primarySupport: 'Conte-me o que está a desenvolver, o que não está a funcionar actualmente e o que pretende alcançar com a sua presença digital.',
      primaryCTA: 'Iniciar conversa',
      secondaryHeadline: 'Tem um negócio que precisa de uma melhor presença digital? Diga-me o que pretende alcançar.',
      secondarySupport: 'Eu ajudo a descobrir o que precisa de ser construído.',
      email: 'edkassocota@gmail.com',
      phone: '948729630',
      instagram: 'https://instagram.com/ed_kassocota',
      linkedin: 'https://www.linkedin.com/in/edgar-kassocota-2a6a55209'
    },
    footer: {
      name: 'Edgar Kassocota',
      role: 'Web Designer & Developer',
      copyright: `© ${new Date().getFullYear()} Edgar Kassocota. Todos os direitos reservados.`
    }
  }
};
