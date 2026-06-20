import { AcademicReminder } from "./dateUtils";


export const academicReminders: AcademicReminder[] = [
  // ---------- FEVEREIRO ----------
  {
    id: "_rem_001",
    name: "Início do Semestre Letivo 2026.1",
    color: "pastel-green", // Acadêmico
    description: "Início das aulas do primeiro semestre de 2026",
    date: new Date(2026, 1, 2),
    isAcademic: true
  },
  {
    id: "_rem_002",
    name: "Carnaval - Ponto Facultativo",
    color: "pastel-red", // Feriado
    description: "Período de carnaval - sem atividades acadêmicas",
    date: new Date(2026, 1, 17),
    isAcademic: true
  },
  {
    id: "_rem_003",
    name: "Carnaval - Ponto Facultativo",
    color: "pastel-red", // Feriado
    description: "Período de carnaval - sem atividades acadêmicas",
    date: new Date(2026, 1, 18),
    isAcademic: true
  },
  {
    id: "_rem_004",
    name: "Quarta-feira de Cinzas",
    color: "pastel-green", // Acadêmico (aulas a partir das 14h)
    description: "Início da Quaresma - aulas a partir das 14h",
    date: new Date(2026, 1, 19),
    isAcademic: true
  },

  // ---------- MARÇO ----------
  {
    id: "_rem_005",
    name: "Dia Internacional da Mulher",
    color: "pastel-lavender", // Evento
    description: "Evento especial sobre mulheres na tecnologia",
    date: new Date(2026, 2, 8),
    isAcademic: true
  },
  {
    id: "_rem_006",
    name: "Semana de Integração Acadêmica",
    color: "pastel-lavender", // Evento
    description: "Eventos de boas-vindas aos calouros",
    date: new Date(2026, 2, 9),
    isAcademic: true
  },
  {
    id: "_rem_007",
    name: "Semana de Integração Acadêmica",
    color: "pastel-lavender", // Evento
    description: "Eventos de boas-vindas aos calouros",
    date: new Date(2026, 2, 10),
    isAcademic: true
  },
  {
    id: "_rem_008",
    name: "Semana de Integração Acadêmica",
    color: "pastel-lavender", // Evento
    description: "Eventos de boas-vindas aos calouros",
    date: new Date(2026, 2, 11),
    isAcademic: true
  },
  {
    id: "_rem_009",
    name: "Feriado - Dia de São José",
    color: "pastel-red", // Feriado
    description: "Feriado municipal - sem atividades",
    date: new Date(2026, 2, 19),
    isAcademic: true
  },

  // ---------- ABRIL ----------
  {
    id: "_rem_010",
    name: "Páscoa - Recesso",
    color: "pastel-red", // Feriado
    description: "Período de páscoa - sem atividades acadêmicas",
    date: new Date(2026, 3, 3),
    isAcademic: true
  },
  {
    id: "_rem_011",
    name: "Páscoa - Recesso",
    color: "pastel-red", // Feriado
    description: "Período de páscoa - sem atividades acadêmicas",
    date: new Date(2026, 3, 4),
    isAcademic: true
  },
  {
    id: "_rem_012",
    name: "Congresso de Tecnologia e Inovação",
    color: "pastel-lavender", // Evento
    description: "Palestras e workshops sobre tendências em tecnologia",
    date: new Date(2026, 3, 10),
    isAcademic: true
  },
  {
    id: "_rem_013",
    name: "Congresso de Tecnologia e Inovação",
    color: "pastel-lavender", // Evento
    description: "Palestras e workshops sobre tendências em tecnologia",
    date: new Date(2026, 3, 11),
    isAcademic: true
  },
  {
    id: "_rem_014",
    name: "Workshop de Banco de Dados",
    color: "pastel-lavender", // Evento
    description: "Workshop avançado sobre otimização de queries",
    date: new Date(2026, 3, 15),
    isAcademic: true
  },
  {
    id: "_rem_015",
    name: "Feriado - Tiradentes",
    color: "pastel-red", // Feriado
    description: "Feriado nacional - sem atividades",
    date: new Date(2026, 3, 21),
    isAcademic: true
  },
  {
    id: "_rem_016",
    name: "Palestra - Carreiras em Tech",
    color: "pastel-lavender", // Evento
    description: "Palestra com profissionais do mercado",
    date: new Date(2026, 3, 22),
    isAcademic: true
  },
  {
    id: "_rem_017",
    name: "Entrega de Projetos Integradores",
    color: "pastel-yellow", // Entregas
    description: "Prazo final para entrega dos projetos do semestre",
    date: new Date(2026, 3, 25),
    isAcademic: true
  },
  {
    id: "_rem_018",
    name: "Mostra Científica de ADS",
    color: "pastel-lavender", // Evento
    description: "Apresentação de trabalhos de pesquisa dos alunos",
    date: new Date(2026, 3, 28),
    isAcademic: true
  },
  {
    id: "_rem_019",
    name: "Último dia para trancamento de disciplina/curso",
    color: "pastel-green", // Acadêmico (data limite)
    description: "Prazo final para solicitação de trancamento",
    date: new Date(2026, 3, 28), // 28 de abril (conforme calendário)
    isAcademic: true
  },
  {
    id: "_rem_020",
    name: "Hackathon Acadêmico",
    color: "pastel-lavender", // Evento
    description: "Maratona de programação de 48h",
    date: new Date(2026, 3, 29),
    isAcademic: true
  },
  {
    id: "_rem_021",
    name: "Reunião de Colegiado",
    color: "pastel-green", // Acadêmico
    description: "Avaliação do andamento do semestre",
    date: new Date(2026, 3, 30),
    isAcademic: true
  },

  // ---------- MAIO ----------
  {
    id: "_rem_022",
    name: "Data limite – 2º estágio",
    color: "pastel-yellow", // Entregas
    description: "Prazo final para realização do segundo estágio",
    date: new Date(2026, 4, 4),
    isAcademic: true
  },
  {
    id: "_rem_023",
    name: "TDE – Data limite 09/05",
    color: "pastel-yellow", // Entregas
    description: "Prazo para atividades de Trabalho Discente Efetivo",
    date: new Date(2026, 4, 9),
    isAcademic: true
  },
  {
    id: "_rem_024",
    name: "TDE – Data limite 23/05",
    color: "pastel-yellow", // Entregas
    description: "Prazo final para atividades de TDE",
    date: new Date(2026, 4, 23),
    isAcademic: true
  },
  {
    id: "_rem_025",
    name: "ADS Experience",
    color: "pastel-lavender", // Evento
    description: "Imersão prática em Análise e Desenvolvimento de Sistemas",
    date: new Date(2026, 4, 27),
    isAcademic: true
  },
  {
    id: "_rem_026",
    name: "ADS Experience",
    color: "pastel-lavender", // Evento
    description: "Imersão prática em Análise e Desenvolvimento de Sistemas",
    date: new Date(2026, 4, 28),
    isAcademic: true
  },
  {
    id: "_rem_027",
    name: "ADS Experience",
    color: "pastel-lavender", // Evento
    description: "Imersão prática em Análise e Desenvolvimento de Sistemas",
    date: new Date(2026, 4, 29),
    isAcademic: true
  },

  // ---------- JUNHO ----------
  {
    id: "_rem_028",
    name: "Data limite – 3º estágio",
    color: "pastel-yellow", // Entregas
    description: "Prazo final para realização do terceiro estágio",
    date: new Date(2026, 5, 12),
    isAcademic: true
  },
  {
    id: "_rem_029",
    name: "Reposição de aulas",
    color: "pastel-green", // Acadêmico
    description: "Período de reposição de atividades acadêmicas",
    date: new Date(2026, 5, 15),
    isAcademic: true
  },
  {
    id: "_rem_030",
    name: "Colação de Grau",
    color: "pastel-lavender", // Evento
    description: "Cerimônia de formatura dos concluintes",
    date: new Date(2026, 5, 15),
    isAcademic: true
  },
  {
    id: "_rem_031",
    name: "Reposição de aulas",
    color: "pastel-green",
    description: "Período de reposição de atividades acadêmicas",
    date: new Date(2026, 5, 16),
    isAcademic: true
  },
  {
    id: "_rem_032",
    name: "Colação de Grau",
    color: "pastel-lavender",
    description: "Cerimônia de formatura dos concluintes",
    date: new Date(2026, 5, 16),
    isAcademic: true
  },
  {
    id: "_rem_033",
    name: "Reposição de aulas / Colação de Grau",
    color: "pastel-green", // predomina acadêmico, mas evento também presente
    description: "Reposição acadêmica e cerimônia de formatura",
    date: new Date(2026, 5, 17),
    isAcademic: true
  },
  {
    id: "_rem_034",
    name: "Reposição de aulas",
    color: "pastel-green",
    description: "Período de reposição de atividades acadêmicas",
    date: new Date(2026, 5, 18),
    isAcademic: true
  },
  {
    id: "_rem_035",
    name: "Reposição de aulas",
    color: "pastel-green",
    description: "Período de reposição de atividades acadêmicas",
    date: new Date(2026, 5, 19),
    isAcademic: true
  },
  {
    id: "_rem_036",
    name: "Provas Finais",
    color: "pastel-blue", // Avaliação
    description: "Aplicação das avaliações finais do semestre",
    date: new Date(2026, 5, 22),
    isAcademic: true
  },
  {
    id: "_rem_037",
    name: "Provas Finais",
    color: "pastel-blue",
    description: "Aplicação das avaliações finais do semestre",
    date: new Date(2026, 5, 23),
    isAcademic: true
  },
  {
    id: "_rem_038",
    name: "Provas Finais",
    color: "pastel-blue",
    description: "Aplicação das avaliações finais do semestre",
    date: new Date(2026, 5, 25),
    isAcademic: true
  },
  {
    id: "_rem_039",
    name: "Provas Finais",
    color: "pastel-blue",
    description: "Aplicação das avaliações finais do semestre",
    date: new Date(2026, 5, 26),
    isAcademic: true
  },
  {
    id: "_rem_040",
    name: "Provas Finais",
    color: "pastel-blue",
    description: "Aplicação das avaliações finais do semestre",
    date: new Date(2026, 5, 30),
    isAcademic: true
  },
  {
    id: "_rem_041",
    name: "Término das Atividades Acadêmicas",
    color: "pastel-green", // Acadêmico
    description: "Encerramento oficial do semestre 2026.1",
    date: new Date(2026, 5, 30),
    isAcademic: true
  },

  // ---------- JULHO ----------
  {
    id: "_rem_042",
    name: "Início das Férias Acadêmicas",
    color: "pastel-green", // Acadêmico
    description: "Período de recesso dos estudantes",
    date: new Date(2026, 6, 1),
    isAcademic: true
  }
];