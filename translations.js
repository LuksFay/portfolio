// translations.js
// Archivo con todas las cadenas y la estructura de "proyectos".
// Agregá / editá entradas aquí y se reflejará en los 3 idiomas.

export const translations = {
  es: {
    header: {
      name: "Fernando Lucas Picco",
      location: "Rosario, Santa Fe, Argentina",
      contact: "luksfaydev@gmail.com",
      linkedin: "https://www.linkedin.com/in/luksfay"
    },
    perfil: {
      titulo: "Perfil",
      texto: "Desarrollador full-stack versátil con experiencia en productos digitales. Me enfoco en interfaces completas pensadas para resolver — cómodas, eficientes, robustas por auditoría y alineadas con procesos reales — con arquitectura frontend moderna y soluciones de base de datos a cliente. Fundador de ARCADE ESTUDIO."
    },
    desarrollo: {
      titulo: "Sistemas y Productos",
      labels: { queEs: "Qué es", funciones: "Funciones" },
      proyectos: [
        {
          nombre: "I.S.I.TRANS",
          stack: "Next.js, Firebase, GitHub, Vercel, Hostinger DNS",
          queEs: "Plataforma de gestión interna para empresa de capacitaciones de transporte. Gestión de cursos y licencias para choferes de camiones, colectivos y vehículos de carga en todas las provincias de Argentina.",
          funciones: "Administración de alumnos, instructores, aulas, certificados y filtros de permisos por rol; generación de PDF automáticos para cada etapa y planillas Excel",
          screenshots: ["/assets/isitrans-login.png", "/assets/isitrans-loader.png", "/assets/isitrans-dashboard.png", "/assets/isitrans-admin-cursos.png"]
        },
        {
          nombre: "FRASER",
          stack: "Python FastAPI, Next.js, Ollama +12 herramientas especializadas por fase",
          queEs: "Orquestador automatizado de auditorías de ciberseguridad ofensiva/defensiva con IA. Plataforma completa con pipeline de 5 fases, biblioteca inteligente de exploits con autocorrección y dashboard web en tiempo real.",
          funciones: "Orquesta auditorías de seguridad automatizadas con su propia inteligencia artificial especializada, que se autoentrena con cada auditoría realizada para mejorar sus exploits. Genera, ejecuta y corrige automáticamente scripts de prueba según los hallazgos de cada blanco. Escanea infraestructura web, descubre puntos débiles, evade protecciones y produce reportes profesionales, todo desde un panel con chat IA integrado.",
          screenshots: ["/assets/fraser-whatsapp-1.jpeg", "/assets/fraser-whatsapp-2.jpeg", "/assets/fraser-3.png"]
        },
        {
          nombre: "CENTINELA",
          stack: "Go 1.26, dashboard web embebido",
          queEs: "Escáner de seguridad para Windows en un solo binario Go de ~8 MB. Seis módulos de escaneo con motor de detección centralizado y dashboard web embebido.",
          funciones: "Escanea procesos, red, archivos, persistencia, logs y memoria en busca de actividad sospechosa: herramientas de hacking, PowerShell ofuscado, conexiones C2, persistencia en registro/tareas/servicios, fuerza bruta, scripts maliciosos y parcheo AMSI. Dashboard web con hallazgos, alertas, progreso en vivo, reportes HTML/JSON, reglas YAML y API REST.",
          screenshots: ["/assets/centinela-1.png", "/assets/centinela-2.png", "/assets/centinela-3.png", "/assets/centinela-4.png"]
        },
        {
          nombre: "TU SILLITA",
          stack: "Branding, diseño gráfico, landing page",
          queEs: "Branding completo para alquiler de sillas de playa en Balneário Camboriú",
          funciones: "Creación de nombre, paleta de colores, logotipo, diseño de landing page y plotteo de automóvil",
          screenshots: ["/assets/tu-sillita-1.jpeg", "/assets/tu-sillita-2.jpeg", "/assets/tu-sillita-3.jpeg", "/assets/tu-sillita-4.jpeg", "/assets/tu-sillita-5.jpeg", "/assets/tu-sillita-6.jpeg", "/assets/tu-sillita-7.jpeg", "/assets/tu-sillita-8.jpeg", "/assets/tu-sillita-9.jpeg", "/assets/tu-sillita-10.jpeg", "/assets/tu-sillita-11.jpeg", "/assets/tu-sillita-12.jpeg", "/assets/tu-sillita-13.jpeg", "/assets/tu-sillita-14.jpeg", "/assets/tu-sillita-15.jpeg"]
        },
        {
          nombre: "VITORIA STUDIO",
          stack: "Procesamiento de audio, IA de voz, portugués brasileño",
          queEs: "Sistema de clonación de voz para portugués brasileño. Graba la voz de cualquier persona mediante un corpus de entrenamiento guiado y genera una voz sintética que reproduce sus tonos y forma de hablar.",
          funciones: "Grabación de voz guiada por corpus de entrenamiento (texto diseñado para ser leído); generación de voz sintética con los tonos, timbre y patrones del hablante original; procesamiento de audio con IA; edición y perfilado de voz; corpus de entrenamiento listo para lectura y captura"
        },
        {
          nombre: "PUTIBET",
          stack: "PHP 8, MySQL, Vite, React 18, Hostinger, crypto wallets",
          queEs: "Plataforma de gaming + entretenimiento adulto con economía de tokens propia",
          funciones: "Slots y Blackjack con motores de juego propios y un sistema de créditos recargables. Las modelos tienen su propio perfil con dashboard para gestionar contenido, mensajería y secciones VIP. Acepta pagos con tarjeta internacional, transferencia bancaria argentina, criptomonedas (MetaMask, Phantom, Ronin, TronLink, Polkadot) y Mercado Pago PIX. El login usa autenticación SIWE con ECDSA.",
          screenshots: ["/assets/putibet-1.jpeg", "/assets/putibet-2.jpeg", "/assets/putibet-3.jpeg", "/assets/putibet-4.jpeg", "/assets/putibet-5.jpeg", "/assets/putibet-6.jpeg"]
        },
        {
          nombre: "Cliente Web WoW (servidor privado)",
          stack: "Vite, React, PHP, MySQL, Three.js",
          queEs: "Cliente web para servidor privado de World of Warcraft",
          funciones: "Inicio de sesión con cuenta del juego, renderizado 3D del personaje, visualización de talentos y árbol de especializaciones",
          screenshots: ["/assets/wow-1.jpg", "/assets/wow-2.jpg"]
        },
        {
          nombre: "La22Prod",
          stack: "Landing + Ticketera (PDF-QR) + Pagos PIX",
          queEs: "Landing y sistema de ticketera para eventos",
          funciones: "Generación de PDF con QR, procesamiento de pagos vía PIX, gestión de entradas, registro del comprador por email, envío automatizado de email personalizado con la entrada en XML"
        },
        {
          nombre: "KIOSKITO",
          stack: "Next.js, Electron, SQLite",
          queEs: "Sistema POS para pequeños comercios con modo tótem de autogestión",
          funciones: "Catálogo, productos, proveedores, gastos, reportes, dashboard Recharts, tickets térmicos, modo tótem para autogestión del cliente, PWA offline, desktop portable"
        },
        {
          nombre: "ARCADE ESTUDIO",
          stack: "Next.js, React, TypeScript, Framer Motion, MySQL",
          queEs: "Landing page y portafolio oficial de ARCADE ESTUDIO",
          funciones: "Catálogo de proyectos, blog, e-shop con Mercado Pago, autenticación JWT, multilingüe"
        },
        {
          nombre: "ESOTERIA",
          stack: "Next.js, Three.js, Prisma, MySQL",
          queEs: "Oráculo digital con tiradas de tarot personalizadas",
          funciones: "Lecturas personalizadas, modo premium para guardar tiradas e historial, más preguntas por día, Astrología con carta natal SVG, Runas Elder Futhark 3D, Numerología, I Ching, Tzolk'in Maya, Tarot y Grimorio"
        }
      ]
    },
    educacion: {
      titulo: "Educación",
      items: [
        "Bacharelado em Sistemas de Informação – Instituto Federal Catarinense (IFC, Brasil) (03/2025 – Actualidad)",
        "Licenciatura en Historia – Universidad Nacional de Rosario (UNR) (2018) (incompleto)",
        "Licenciatura en Turismo – Instituto Belgrano / T.E.C. (2016 – 2018) (incompleto)",
        "Bachiller en Humanidades – San Francisco Solano, Rosario (2015)"
      ]
    },
    certificaciones: {
      titulo: "Certificaciones",
      items: [
        "Manipulación Segura de Alimentos – Ministerio de Agricultura (2020 – 2022)",
        "Barista Inicial – Arto Café, Rosario (2021)"
      ]
    },
    idiomas: {
      titulo: "Idiomas",
      items: [
        "Portugués",
        "Inglés",
        "Español"
      ]
    }
  },

  pt: {
    header: {
      name: "Fernando Lucas Picco",
      location: "Rosario, Santa Fé, Argentina",
      contact: "luksfaydev@gmail.com",
      linkedin: "https://www.linkedin.com/in/luksfay"
    },
    perfil: {
      titulo: "Perfil",
      texto: "Desenvolvedor full-stack versátil com experiência em produtos digitais. Foco em interfaces completas pensadas para resolver — confortáveis, eficientes, robustas por auditoria e alinhadas com processos reais — com arquitetura frontend moderna e soluções do banco de dados ao cliente. Fundador da ARCADE ESTUDIO."
    },
    desarrollo: {
      titulo: "Sistemas e Produtos",
      labels: { queEs: "O que é", funciones: "Funções" },
      proyectos: [
        {
          nombre: "I.S.I.TRANS",
          stack: "Next.js, Firebase, GitHub, Vercel, Hostinger DNS",
          queEs: "Plataforma de gestão interna para empresa de capacitações de transporte. Gestão de cursos e licenças para motoristas de caminhões, ônibus e veículos de carga em todas as províncias da Argentina.",
          funciones: "Administração de alunos, instrutores, salas de aula, certificados e filtros de permissões por papel; geração de PDF automáticos para cada etapa e planilhas Excel",
          screenshots: ["/assets/isitrans-login.png", "/assets/isitrans-loader.png", "/assets/isitrans-dashboard.png", "/assets/isitrans-admin-cursos.png"]
        },
        {
          nombre: "FRASER",
          stack: "Python FastAPI, Next.js, Ollama +12 ferramentas especializadas por fase",
          queEs: "Orquestador automatizado de auditorias de cibersegurança ofensiva/defensiva com IA. Plataforma completa com pipeline de 5 fases, biblioteca inteligente de exploits com autocorreção e dashboard web em tempo real.",
          funciones: "Orquestra auditorias de segurança automatizadas com sua própria inteligência artificial especializada, que se autotreina com cada auditoria realizada para melhorar seus exploits. Gera, executa e corrige automaticamente scripts de teste conforme os achados de cada alvo. Escaneia infraestrutura web, descobre pontos frágeis, evade proteções e produz relatórios profissionais, tudo a partir de um painel com chat IA integrado.",
          screenshots: ["/assets/fraser-whatsapp-1.jpeg", "/assets/fraser-whatsapp-2.jpeg", "/assets/fraser-3.png"]
        },
        {
          nombre: "CENTINELA",
          stack: "Go 1.26, dashboard web embutido",
          queEs: "Escâner de segurança para Windows em um único binário Go de ~8 MB. Seis módulos de escaneamento com motor de detecção centralizado e dashboard web embutido.",
          funciones: "Escaneia processos, rede, arquivos, persistência, logs e memória em busca de atividade suspeita: ferramentas de hacking, PowerShell ofuscado, conexões C2, persistência em registro/tarefas/serviços, força bruta, scripts maliciosos e patch AMSI. Dashboard web com descobertas, alertas, progresso ao vivo, relatórios HTML/JSON, regras YAML e API REST.",
          screenshots: ["/assets/centinela-1.png", "/assets/centinela-2.png", "/assets/centinela-3.png", "/assets/centinela-4.png"]
        },
        {
          nombre: "TU SILLITA",
          stack: "Branding, design gráfico, landing page",
          queEs: "Branding completo para aluguel de cadeiras de praia em Balneário Camboriú",
          funciones: "Criação de nome, paleta de cores, logotipo, design de landing page e envelopamento de automóvel",
          screenshots: ["/assets/tu-sillita-1.jpeg", "/assets/tu-sillita-2.jpeg", "/assets/tu-sillita-3.jpeg", "/assets/tu-sillita-4.jpeg", "/assets/tu-sillita-5.jpeg", "/assets/tu-sillita-6.jpeg", "/assets/tu-sillita-7.jpeg", "/assets/tu-sillita-8.jpeg", "/assets/tu-sillita-9.jpeg", "/assets/tu-sillita-10.jpeg", "/assets/tu-sillita-11.jpeg", "/assets/tu-sillita-12.jpeg", "/assets/tu-sillita-13.jpeg", "/assets/tu-sillita-14.jpeg", "/assets/tu-sillita-15.jpeg"]
        },
        {
          nombre: "VITORIA STUDIO",
          stack: "Processamento de áudio, IA de voz, português brasileiro",
          queEs: "Sistema de clonagem de voz para português brasileiro. Grava a voz de qualquer pessoa através de um corpus de treinamento guiado e gera uma voz sintética que reproduz seus tons e forma de falar.",
          funciones: "Gravação de voz guiada por corpus de treinamento (texto projetado para ser lido); geração de voz sintética com os tons, timbre e padrões do falante original; processamento de áudio com IA; edição e perfilamento de voz; corpus de treinamento pronto para leitura e captura"
        },
        {
          nombre: "PUTIBET",
          stack: "PHP 8, MySQL, Vite, React 18, Hostinger, crypto wallets",
          queEs: "Plataforma de gaming + entretenimento adulto com economia de tokens própria",
          funciones: "Slots e Blackjack com motores de jogo próprios e um sistema de créditos recarregáveis. As modelos têm seu próprio perfil com dashboard para gerenciar conteúdo, mensagens e seções VIP. Aceita pagamentos com cartão internacional, transferência bancária argentina, criptomoedas (MetaMask, Phantom, Ronin, TronLink, Polkadot) e Mercado Pago PIX. O login usa autenticação SIWE com ECDSA.",
          screenshots: ["/assets/putibet-1.jpeg", "/assets/putibet-2.jpeg", "/assets/putibet-3.jpeg", "/assets/putibet-4.jpeg", "/assets/putibet-5.jpeg", "/assets/putibet-6.jpeg"]
        },
        {
          nombre: "Cliente Web WoW (servidor privado)",
          stack: "Vite, React, PHP, MySQL, Three.js",
          queEs: "Cliente web para servidor privado de World of Warcraft",
          funciones: "Login com conta do jogo, renderização 3D do personagem, visualização de talentos e árvore de especializações",
          screenshots: ["/assets/wow-1.jpg", "/assets/wow-2.jpg"]
        },
        {
          nombre: "La22Prod",
          stack: "Landing + Bilheteria (PDF-QR) + Pagamentos PIX",
          queEs: "Landing e sistema de bilheteria para eventos",
          funciones: "Geração de PDF com QR, processamento de pagamentos via PIX, gestão de ingressos, registro do comprador por email, envio automatizado de email personalizado com o ingresso em XML"
        },
        {
          nombre: "KIOSKITO",
          stack: "Next.js, Electron, SQLite",
          queEs: "Sistema POS para pequenos comércios com modo totem de autogestão",
          funciones: "Catálogo, produtos, fornecedores, despesas, relatórios, dashboard Recharts, tickets térmicos, modo totem para autogestão do cliente, PWA offline, desktop portátil"
        },
        {
          nombre: "ARCADE ESTUDIO",
          stack: "Next.js, React, TypeScript, Framer Motion, MySQL",
          queEs: "Landing page e portfólio oficial da ARCADE ESTUDIO",
          funciones: "Catálogo de projetos, blog, e-shop com Mercado Pago, autenticação JWT, multilíngue"
        },
        {
          nombre: "ESOTERIA",
          stack: "Next.js, Three.js, Prisma, MySQL",
          queEs: "Oráculo digital com tiragens de tarot personalizadas",
          funciones: "Leituras personalizadas, modo premium para salvar tiragens e histórico, mais perguntas por dia, Astrologia com carta natal SVG, Runas Elder Futhark 3D, Numerologia, I Ching, Tzolk'in Maya, Tarot e Grimório"
        }
      ]
    },    educacion: {
      titulo: "Educação",
      items: [
        "Bacharelado em Sistemas de Informação – Instituto Federal Catarinense (IFC, Brasil) (03/2025 – Atual)",
        "Licenciatura em História – Universidad Nacional de Rosario (UNR) (2018) (incompleto)",
        "Licenciatura em Turismo – Instituto Belgrano / T.E.C. (2016 – 2018) (incompleto)",
        "Ensino Médio – San Francisco Solano, Rosario (2015)"
      ]
    },
    certificaciones: {
      titulo: "Certificações",
      items: [
        "Manipulação Segura de Alimentos – Ministério da Agricultura (2020 – 2022)",
        "Barista Inicial – Arto Café, Rosario (2021)"
      ]
    },
    idiomas: {
      titulo: "Idiomas",
      items: [
        "Português",
        "Inglês",
        "Espanhol"
      ]
    }
  },

  en: {
    header: {
      name: "Fernando Lucas Picco",
      location: "Rosario, Santa Fe, Argentina",
      contact: "luksfaydev@gmail.com",
      linkedin: "https://www.linkedin.com/in/luksfay"
    },
    perfil: {
      titulo: "Profile",
      texto: "Versatile full-stack developer experienced in digital products. I focus on complete interfaces built to solve — comfortable, efficient, hardened by security audits and aligned with real processes — with modern frontend architecture and end-to-end solutions from database to client. Founder at ARCADE ESTUDIO."
    },
    desarrollo: {
      titulo: "Systems and Products",
      labels: { queEs: "What it is", funciones: "Functions" },
      proyectos: [
        {
          nombre: "I.S.I.TRANS",
          stack: "Next.js, Firebase, GitHub, Vercel, Hostinger DNS",
          queEs: "Internal management platform for a transport training company. Course and license management for truck, bus and cargo vehicle drivers across all provinces of Argentina.",
          funciones: "Administration of students, instructors, classrooms, certificates and role-based permission filters; automatic PDF generation for each stage and Excel spreadsheets",
          screenshots: ["/assets/isitrans-login.png", "/assets/isitrans-loader.png", "/assets/isitrans-dashboard.png", "/assets/isitrans-admin-cursos.png"]
        },
        {
          nombre: "FRASER",
          stack: "Python FastAPI, Next.js, Ollama +12 specialized tools per phase",
          queEs: "Automated offensive/defensive cybersecurity audit orchestrator with AI. Complete platform with 5-phase pipeline, intelligent exploit library with auto-correction and real-time web dashboard.",
          funciones: "Orchestrates automated security audits with its own specialized artificial intelligence that self-trains on every audit to improve its exploits. Generates, executes and auto-corrects test scripts based on each target's findings. Scans web infrastructure, discovers weak points, evades protections and produces professional reports, all from a dashboard with integrated AI chat.",
          screenshots: ["/assets/fraser-whatsapp-1.jpeg", "/assets/fraser-whatsapp-2.jpeg", "/assets/fraser-3.png"]
        },
        {
          nombre: "CENTINELA",
          stack: "Go 1.26, embedded web dashboard",
          queEs: "Windows security scanner packaged as a single ~8 MB Go binary. Six scanning modules with centralized detection engine and embedded web dashboard.",
          funciones: "Scans processes, network, files, persistence, logs and memory for suspicious activity: hacking tools, obfuscated PowerShell, C2 connections, registry/task/service persistence, brute force, malicious scripts and AMSI patching. Web dashboard with findings, alerts, live progress, HTML/JSON reports, YAML rules and REST API.",
          screenshots: ["/assets/centinela-1.png", "/assets/centinela-2.png", "/assets/centinela-3.png", "/assets/centinela-4.png"]
        },
        {
          nombre: "TU SILLITA",
          stack: "Branding, graphic design, landing page",
          queEs: "Complete branding for beach chair rental in Balneário Camboriú",
          funciones: "Name creation, color palette, logo, landing page design and car wrap",
          screenshots: ["/assets/tu-sillita-1.jpeg", "/assets/tu-sillita-2.jpeg", "/assets/tu-sillita-3.jpeg", "/assets/tu-sillita-4.jpeg", "/assets/tu-sillita-5.jpeg", "/assets/tu-sillita-6.jpeg", "/assets/tu-sillita-7.jpeg", "/assets/tu-sillita-8.jpeg", "/assets/tu-sillita-9.jpeg", "/assets/tu-sillita-10.jpeg", "/assets/tu-sillita-11.jpeg", "/assets/tu-sillita-12.jpeg", "/assets/tu-sillita-13.jpeg", "/assets/tu-sillita-14.jpeg", "/assets/tu-sillita-15.jpeg"]
        },
        {
          nombre: "VITORIA STUDIO",
          stack: "Procesamiento de audio con IA, portugués brasileño",
          queEs: "Voice cloning system for Brazilian Portuguese. Records any person's voice through a guided training corpus and generates a synthetic voice that reproduces their tones and speech patterns.",
          funciones: "Guided voice recording using a training corpus (text designed to be read aloud); synthetic voice generation matching the original speaker's tones, timbre and speech patterns; AI audio processing; voice editing and profiling; ready-to-read training corpus for capture"
        },
        {
          nombre: "PUTIBET",
          stack: "PHP 8, MySQL, Vite, React 18, Hostinger, crypto wallets",
          queEs: "Gaming + adult entertainment platform with its own token economy",
          funciones: "Custom slots and Blackjack game engines with a rechargeable credit system. Models have their own profile with dashboard to manage content, messaging and VIP sections. Accepts international credit cards, Argentine bank transfers, crypto payments (MetaMask, Phantom, Ronin, TronLink, Polkadot) and Mercado Pago PIX. Login uses SIWE authentication with ECDSA.",
          screenshots: ["/assets/putibet-1.jpeg", "/assets/putibet-2.jpeg", "/assets/putibet-3.jpeg", "/assets/putibet-4.jpeg", "/assets/putibet-5.jpeg", "/assets/putibet-6.jpeg"]
        },
        {
          nombre: "WoW Web Client (private server)",
          stack: "Vite, React, PHP, MySQL, Three.js",
          queEs: "Web client for a private World of Warcraft server",
          funciones: "Game account login, 3D character rendering, talents visualization and specialization tree",
          screenshots: ["/assets/wow-1.jpg", "/assets/wow-2.jpg"]
        },
        {
          nombre: "La22Prod",
          stack: "Landing + Ticketing (PDF-QR) + PIX Payments",
          queEs: "Landing page and ticketing system for events",
          funciones: "PDF generation with QR codes, PIX payment processing, ticket management, buyer registration via email, automated personalized email with ticket in XML format"
        },
        {
          nombre: "KIOSKITO",
          stack: "Next.js, Electron, SQLite",
          queEs: "POS system for small businesses with self-service totem mode",
          funciones: "Catalog, products, suppliers, expenses, reports, Recharts dashboard, thermal tickets, totem mode for customer self-service, PWA offline, portable desktop"
        },
        {
          nombre: "ARCADE ESTUDIO",
          stack: "Next.js, React, TypeScript, Framer Motion, MySQL",
          queEs: "Official landing page and portfolio of ARCADE ESTUDIO",
          funciones: "Project catalog, blog, e-shop with Mercado Pago, JWT authentication, multilingual"
        },
        {
          nombre: "ESOTERIA",
          stack: "Next.js, Three.js, Prisma, MySQL",
          queEs: "Digital oracle with personalized tarot readings",
          funciones: "Personalized readings, premium mode to save readings and history, more daily questions, Astrology with SVG birth chart, Elder Futhark 3D Runes, Numerology, I Ching, Tzolk'in Maya, Tarot and Grimoire"
        }
      ]
    },
    educacion: {
      titulo: "Education",
      items: [
        "Bachelor's in Information Systems – Instituto Federal Catarinense (IFC, Brazil) (03/2025 – Ongoing)",
        "Degree in History – Universidad Nacional de Rosario (UNR) (2018) (incomplete)",
        "Degree in Tourism – Instituto Belgrano / T.E.C. (2016 – 2018) (incomplete)",
        "High School – San Francisco Solano, Rosario (2015)"
      ]
    },
    certificaciones: {
      titulo: "Certifications",
      items: [
        "Safe Food Handling – Ministry of Agriculture (2020 – 2022)",
        "Initial Barista – Arto Café, Rosario (2021)"
      ]
    },
    idiomas: {
      titulo: "Languages",
      items: [
        "Portuguese",
        "English",
        "Spanish"
      ]
    }
  }
};
