import { Assignment, GradesResponse } from "../types/Application";


export const gradesDataMock: GradesResponse[] = [
  {
    id: "1",
    moduleId: "ADS-101",
    moduleName: "Algoritmos e Lógica de Programação",
    firstGrade: 8.5,
    secondGrade: 7.8,
    thirdGrade: 9.0,
    misses: 2,
    state: "Aprovado",
  },
  {
    id: "2",
    moduleId: "ADS-102",
    moduleName: "Programação Orientada a Objetos",
    firstGrade: 6.2,
    secondGrade: 5.8,
    thirdGrade: 6.0,
    final: 7.0,
    misses: 3,
    state: "Aprovado",
  },
  {
    id: "3",
    moduleId: "ADS-103",
    moduleName: "Banco de Dados",
    firstGrade: 4.5,
    secondGrade: 5.0,
    thirdGrade: 4.8,
    repo: 5.5,
    misses: 4,
    state: "Reprovado",
  },
  {
    id: "4",
    moduleId: "ADS-104",
    moduleName: "Engenharia de Software",
    firstGrade: 7.5,
    secondGrade: 8.0,
    thirdGrade: 0,
    misses: 1,
    state: "Cursando",
  },
  {
    id: "5",
    moduleId: "ADS-105",
    moduleName: "Estrutura de Dados",
    firstGrade: 9.0,
    secondGrade: 8.7,
    thirdGrade: 9.2,
    misses: 0,
    state: "Aprovado",
  },
]

export const assignmentsMock: Assignment[] = [

  {
    id: "a1",
    moduleId: "poo",
    moduleName: "Programação Orientada a Objetos",
    state: "Pending",
    title: "Classes e Objetos",
    content: "Implementar classes representando entidades do sistema acadêmico.",
    points: 10,
    tries: 1,
    files: [
      {
        name: "enunciado_classes_objetos.pdf",
        format: "pdf",
        size_bytes: 245760,
        updated_at: new Date("2026-02-01"),
      }
    ],
    deadline: new Date("2026-02-10"),
    created_at: new Date("2026-02-01"),
  },

  {
    id: "a2",
    moduleId: "poo",
    moduleName: "Programação Orientada a Objetos",
    state: "Done",
    title: "Herança e Polimorfismo",
    content: "Criar hierarquia de classes utilizando herança e sobrescrita de métodos.",
    points: 15,
    tries: 1,
    files: [
      {
        name: "heranca_polimorfismo.pptx",
        format: "pptx",
        size_bytes: 1048576,
        updated_at: new Date("2026-01-28"),
      }
    ],
    deadline: new Date("2026-02-05"),
    created_at: new Date("2026-01-28"),
  },

  {
    id: "a3",
    moduleId: "poo",
    moduleName: "Programação Orientada a Objetos",
    state: "Expired",
    title: "Encapsulamento",
    content: "Aplicar encapsulamento e modificadores de acesso em um sistema simples.",
    points: 10,
    tries: 2,
    files: [
      {
        name: "encapsulamento.docx",
        format: "docx",
        size_bytes: 512000,
        updated_at: new Date("2026-01-20"),
      }
    ],
    deadline: new Date("2026-01-30"),
    created_at: new Date("2026-01-20"),
  },

  {
    id: "a4",
    moduleId: "faf",
    moduleName: "Fundamentos de Administração e Finanças",
    state: "Pending",
    title: "Fluxo de Caixa",
    content: "Elaborar um fluxo de caixa mensal para uma empresa fictícia.",
    points: 12,
    tries: 1,
    files: [
      {
        name: "modelo_fluxo_caixa.xlsx",
        format: "xlsx",
        size_bytes: 786432,
        updated_at: new Date("2026-02-02"),
      }
    ],
    deadline: new Date("2026-02-12"),
    created_at: new Date("2026-02-02"),
  },

  {
    id: "a5",
    moduleId: "faf",
    moduleName: "Fundamentos de Administração e Finanças",
    state: "Done",
    title: "Análise de Custos",
    content: "Classificar custos fixos e variáveis em um cenário empresarial.",
    points: 10,
    tries: 1,
    files: [
      {
        name: "analise_custos.pdf",
        format: "pdf",
        size_bytes: 334233,
        updated_at: new Date("2026-01-25"),
      }
    ],
    deadline: new Date("2026-02-03"),
    created_at: new Date("2026-01-25"),
  },

  {
    id: "a6",
    moduleId: "es",
    moduleName: "Engenharia de Software",
    state: "Pending",
    title: "Levantamento de Requisitos",
    content: "Modelar requisitos funcionais e não funcionais de um sistema.",
    points: 15,
    tries: 1,
    files: [
      {
        name: "requisitos_sistema.docx",
        format: "docx",
        size_bytes: 943718,
        updated_at: new Date("2026-02-01"),
      }
    ],
    deadline: new Date("2026-02-15"),
    created_at: new Date("2026-02-01"),
  },

  {
    id: "a7",
    moduleId: "es",
    moduleName: "Engenharia de Software",
    state: "Done",
    title: "Casos de Uso",
    content: "Criar diagrama de casos de uso para um sistema acadêmico.",
    points: 12,
    tries: 1,
    files: [
      {
        name: "casos_de_uso.pdf",
        format: "pdf",
        size_bytes: 589824,
        updated_at: new Date("2026-01-27"),
      }
    ],
    deadline: new Date("2026-02-04"),
    created_at: new Date("2026-01-27"),
  },

  {
    id: "a8",
    moduleId: "es",
    moduleName: "Engenharia de Software",
    state: "Expired",
    title: "Modelagem UML",
    content: "Criar diagramas UML (classe e sequência).",
    points: 15,
    tries: 2,
    files: [
      {
        name: "diagramas_uml.pptx",
        format: "pptx",
        size_bytes: 1572864,
        updated_at: new Date("2026-01-18"),
      }
    ],
    deadline: new Date("2026-01-29"),
    created_at: new Date("2026-01-18"),
  },

  {
    id: "a9",
    moduleId: "dh",
    moduleName: "Direitos Humanos",
    state: "Pending",
    title: "Direitos Fundamentais",
    content: "Produzir um resumo sobre direitos fundamentais na constituição.",
    points: 8,
    tries: 1,
    files: [
      {
        name: "direitos_fundamentais.pdf",
        format: "pdf",
        size_bytes: 401408,
        updated_at: new Date("2026-02-03"),
      }
    ],
    deadline: new Date("2026-02-18"),
    created_at: new Date("2026-02-03"),
  },

  {
    id: "a10",
    moduleId: "dh",
    moduleName: "Direitos Humanos",
    state: "Done",
    title: "Cidadania e Sociedade",
    content: "Análise crítica sobre cidadania e inclusão social.",
    points: 10,
    tries: 1,
    files: [
      {
        name: "cidadania_sociedade.docx",
        format: "docx",
        size_bytes: 655360,
        updated_at: new Date("2026-01-26"),
      }
    ],
    deadline: new Date("2026-02-06"),
    created_at: new Date("2026-01-26"),
  },
];


export function findById<T extends { id: string | number }>(
  list: T[],
  id: string | number
): T | undefined {
  return list.find(item => item.id === id);
}