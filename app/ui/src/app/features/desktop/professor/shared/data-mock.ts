import { AssignmentProfessor, StudentProfessor } from "./types";
import { StudentSemesterRecord } from "./types";


export const assignmentsProfessor: AssignmentProfessor[] = [
  {
    id: "assign-bd-001",
    title: "Modelagem Entidade-Relacionamento",
    moduleName: "Banco de Dados I - 2026.1",
    moduleId: "channel-bd-001",
    period: "2026.1",
    classLetter: "A",
    description:
      "Desenvolva o diagrama entidade-relacionamento para o sistema de biblioteca descrito no documento anexo. Devem ser identificadas pelo menos 6 entidades com seus relacionamentos e cardinalidades.",
    state: "Pending",
    submissionsQuantity: 12,
    folderOriginId: "folder-origin-bd-001",
    folderOriginName: "Atividades de Modelagem",
    files: [
      {
        id: "file-bd-001a",
        name: "enunciado-modelagem-er.pdf",
        size: 245000,
        format: "application/pdf",
        created_at: new Date(2026, 2, 10),
        modified_at: new Date(2026, 2, 15),
      },
      {
        id: "file-bd-001b",
        name: "exemplos-relacionamentos.pptx",
        size: 1800000,
        format: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        created_at: new Date(2026, 2, 12),
        modified_at: new Date(2026, 2, 12),
      },
    ],
    created_at: new Date(2026, 2, 20),
    deadline: new Date(2026, 3, 15), 
    isReusable: true,
  },
  {
    id: "assign-bd-002",
    title: "Consultas SQL Avançadas",
    moduleName: "Banco de Dados I - 2026.1",
    moduleId: "channel-bd-001",
    period: "2026.1",
    classLetter: "B",
    description:
      "A partir do esquema relacional fornecido, escreva consultas SQL que envolvam junções externas, subconsultas correlacionadas e funções de agregação com GROUP BY e HAVING.",
    state: "Timeout",
    submissionsQuantity: 8,
    folderOriginId: "folder-origin-bd-002",
    folderOriginName: "Exercícios Práticos",
    files: [
      {
        id: "file-bd-002a",
        name: "esquema-relacional.sql",
        size: 3200,
        format: "application/sql",
        created_at: new Date(2026, 3, 1),
        modified_at: new Date(2026, 3, 1),
      },
    ],
    created_at: new Date(2026, 3, 5),
    deadline: new Date(2026, 4, 2), 
    isReusable: false,
  },
  {
    id: "assign-bd-003",
    title: "Normalização de Dados",
    moduleName: "Banco de Dados I - 2026.1",
    moduleId: "channel-bd-001",
    period: "2026.1",
    classLetter: "A",
    description:
      "Aplique as três primeiras formas normais (1FN, 2FN, 3FN) sobre a tabela universal fornecida. Justifique cada decomposição realizada.",
    state: "Pending",
    submissionsQuantity: 15,
    folderOriginId: "folder-origin-bd-003",
    folderOriginName: "Trabalhos Teóricos",
    files: [],
    created_at: new Date(2026, 2, 28),
    deadline: new Date(2026, 4, 10), 
    isReusable: true,
  },


  {
    id: "assign-poo-001",
    title: "Herança e Polimorfismo",
    moduleName: "Programação Orientada a Objetos - 2026.1",
    moduleId: "channel-poo-001",
    period: "2026.1",
    classLetter: "A",
    description:
      "Implemente uma hierarquia de classes para um sistema de veículos, demonstrando herança, sobrecarga e sobrescrita de métodos. Utilize classes abstratas e interfaces conforme apropriado.",
    state: "Pending",
    submissionsQuantity: 20,
    folderOriginId: "folder-origin-poo-001",
    folderOriginName: "Projetos de Código",
    files: [
      {
        id: "file-poo-001a",
        name: "diretrizes-heranca.pdf",
        size: 150000,
        format: "application/pdf",
        created_at: new Date(2026, 3, 3),
        modified_at: new Date(2026, 3, 4),
      },
      {
        id: "file-poo-001b",
        name: "exemplo-veiculo.zip",
        size: 540000,
        format: "application/zip",
        created_at: new Date(2026, 3, 5),
        modified_at: new Date(2026, 3, 5),
      },
    ],
    created_at: new Date(2026, 3, 8),
    deadline: new Date(2026, 4, 5), 
    isReusable: true,
  },
  {
    id: "assign-poo-002",
    title: "Padrões de Projeto - Singleton e Factory",
    moduleName: "Programação Orientada a Objetos - 2026.1",
    moduleId: "channel-poo-001",
    period: "2026.1",
    classLetter: "B",
    description:
      "Aplique os padrões Singleton e Factory em um cenário de gerenciamento de conexões de banco de dados. Documente as vantagens e desvantagens de cada padrão no contexto do problema.",
    state: "Timeout",
    submissionsQuantity: 6,
    folderOriginId: "folder-origin-poo-002",
    folderOriginName: "Design Patterns",
    files: [],
    created_at: new Date(2026, 2, 25),
    deadline: new Date(2026, 4, 1), 
    isReusable: false,
  },
];


export function getAssignmentsProfessorByChannelId(channelId: string) {
    return assignmentsProfessor.filter(a => a.moduleId === channelId);
}

export function getAssignmentById(assignmentId: string) {
    return assignmentsProfessor.find(a => a.id === assignmentId);
}


export const students: StudentProfessor[] = [
  {
    id: "student-001",
    firstName: "Ana",
    lastName: "Carolina Silva",
    period: { year: 2026, semester: 1 },
    turma: "A",
    matricula: "2026.1.045.112",
    turno: "Manhã"
  },
  {
    id: "student-002",
    firstName: "Bruno",
    lastName: "Henrique Santos",
    period: { year: 2026, semester: 1 },
    turma: "B",
    matricula: "2026.1.045.207",
    turno: "Noite"
  },
  {
    id: "student-003",
    firstName: "Camila",
    lastName: "Ribeiro Costa",
    period: { year: 2026, semester: 1 },
    turma: "A",
    matricula: "2026.1.045.318",
    turno: "Manhã"
  },
  {
    id: "student-004",
    firstName: "Daniel",
    lastName: "Oliveira Souza",
    period: { year: 2026, semester: 1 },
    turma: "B",
    matricula: "2026.1.045.429",
    turno: "Noite"
  },
  {
    id: "student-005",
    firstName: "Eduarda",
    lastName: "Martins Pereira",
    period: { year: 2026, semester: 1 },
    turma: "A",
    matricula: "2026.1.045.530",
    turno: "Manhã"
  },
  {
    id: "student-006",
    firstName: "Felipe",
    lastName: "Lima Alves",
    period: { year: 2026, semester: 1 },
    turma: "B",
    matricula: "2026.1.045.641",
    turno: "Noite"
  },
  {
    id: "student-007",
    firstName: "Gabriela",
    lastName: "Ferreira Gomes",
    period: { year: 2026, semester: 1 },
    turma: "A",
    matricula: "2026.1.045.752",
    turno: "Manhã"
  },
  {
    id: "student-008",
    firstName: "Henrique",
    lastName: "Rodrigues Barbosa",
    period: { year: 2026, semester: 1 },
    turma: "B",
    matricula: "2026.1.045.863",
    turno: "Noite"
  },
  {
    id: "student-009",
    firstName: "Isabela",
    lastName: "Castro Dias",
    period: { year: 2026, semester: 1 },
    turma: "A",
    matricula: "2026.1.045.974",
    turno: "Manhã"
  },
  {
    id: "student-010",
    firstName: "João",
    lastName: "Pedro Almeida",
    period: { year: 2026, semester: 1 },
    turma: "B",
    matricula: "2026.1.046.085",
    turno: "Noite"
  }
];


export const studentSemesterRecords: StudentSemesterRecord[] = [
  {
    id: "record-001",
    studentId: "student-001",
    period: { year: 2026, semester: 1 },
    grades: {
      p1: { id: "grade-p1-001", value: 8.5, updated: true, lastUpdated: new Date(2026, 2, 20) },
      p2: { id: "grade-p2-001", value: 7.0, updated: true, lastUpdated: new Date(2026, 3, 15) },
      p3: { id: "grade-p3-001", value: null, updated: false },
      recovery: { id: "grade-rec-001", value: null, updated: false },
      final: { id: "grade-final-001", value: null, updated: false }
    },
    absenses: 2,
    extraPoints: [
      { id: 1, points: 0.5, description: "Participação em sala", expires_at: new Date(2026, 5, 30) }
    ],
    createdAt: new Date(2026, 1, 10),
    updatedAt: new Date(2026, 3, 15)
  },
  {
    id: "record-002",
    studentId: "student-002",
    period: { year: 2026, semester: 1 },
    grades: {
      p1: { id: "grade-p1-002", value: 6.0, updated: true, lastUpdated: new Date(2026, 2, 20) },
      p2: { id: "grade-p2-002", value: 5.5, updated: true, lastUpdated: new Date(2026, 3, 15) },
      p3: { id: "grade-p3-002", value: 7.5, updated: true, lastUpdated: new Date(2026, 4, 20) },
      recovery: { id: "grade-rec-002", value: null, updated: false },
      final: { id: "grade-final-002", value: null, updated: false }
    },
    absenses: 4,
    createdAt: new Date(2026, 1, 10),
    updatedAt: new Date(2026, 4, 20)
  },
  {
    id: "record-003",
    studentId: "student-003",
    period: { year: 2026, semester: 1 },
    grades: {
      p1: { id: "grade-p1-003", value: 9.2, updated: true, lastUpdated: new Date(2026, 2, 20) },
      p2: { id: "grade-p2-003", value: 8.8, updated: true, lastUpdated: new Date(2026, 3, 15) },
      p3: { id: "grade-p3-003", value: 9.0, updated: true, lastUpdated: new Date(2026, 4, 20) },
      recovery: { id: "grade-rec-003", value: null, updated: false },
      final: { id: "grade-final-003", value: null, updated: false }
    },
    absenses: 0,
    createdAt: new Date(2026, 1, 10),
    updatedAt: new Date(2026, 4, 20)
  },
  {
    id: "record-004",
    studentId: "student-004",
    period: { year: 2026, semester: 1 },
    grades: {
      p1: { id: "grade-p1-004", value: 4.0, updated: true, lastUpdated: new Date(2026, 2, 20) },
      p2: { id: "grade-p2-004", value: 3.5, updated: true, lastUpdated: new Date(2026, 3, 15) },
      p3: { id: "grade-p3-004", value: null, updated: false },
      recovery: { id: "grade-rec-004", value: 6.0, updated: true, lastUpdated: new Date(2026, 4, 25) },
      final: { id: "grade-final-004", value: null, updated: false }
    },
    absenses: 6,
    extraPoints: [
      { id: 2, points: 1.0, description: "Trabalho extra", expires_at: new Date(2026, 5, 15) }
    ],
    createdAt: new Date(2026, 1, 10),
    updatedAt: new Date(2026, 4, 25)
  },
  {
    id: "record-005",
    studentId: "student-005",
    period: { year: 2026, semester: 1 },
    grades: {
      p1: { id: "grade-p1-005", value: 7.8, updated: true, lastUpdated: new Date(2026, 2, 20) },
      p2: { id: "grade-p2-005", value: 8.0, updated: true, lastUpdated: new Date(2026, 3, 15) },
      p3: { id: "grade-p3-005", value: 6.5, updated: true, lastUpdated: new Date(2026, 4, 20) },
      recovery: { id: "grade-rec-005", value: null, updated: false },
      final: { id: "grade-final-005", value: null, updated: false }
    },
    absenses: 1,
    createdAt: new Date(2026, 1, 10),
    updatedAt: new Date(2026, 4, 20)
  },
  {
    id: "record-006",
    studentId: "student-006",
    period: { year: 2026, semester: 1 },
    grades: {
      p1: { id: "grade-p1-006", value: 5.5, updated: true, lastUpdated: new Date(2026, 2, 20) },
      p2: { id: "grade-p2-006", value: 4.5, updated: true, lastUpdated: new Date(2026, 3, 15) },
      p3: { id: "grade-p3-006", value: 5.0, updated: true, lastUpdated: new Date(2026, 4, 20) },
      recovery: { id: "grade-rec-006", value: null, updated: false },
      final: { id: "grade-final-006", value: null, updated: false }
    },
    absenses: 3,
    createdAt: new Date(2026, 1, 10),
    updatedAt: new Date(2026, 4, 20)
  },
  {
    id: "record-007",
    studentId: "student-007",
    period: { year: 2026, semester: 1 },
    grades: {
      p1: { id: "grade-p1-007", value: 10.0, updated: true, lastUpdated: new Date(2026, 2, 20) },
      p2: { id: "grade-p2-007", value: 9.5, updated: true, lastUpdated: new Date(2026, 3, 15) },
      p3: { id: "grade-p3-007", value: 9.8, updated: true, lastUpdated: new Date(2026, 4, 20) },
      recovery: { id: "grade-rec-007", value: null, updated: false },
      final: { id: "grade-final-007", value: null, updated: false }
    },
    absenses: 0,
    createdAt: new Date(2026, 1, 10),
    updatedAt: new Date(2026, 4, 20)
  },
  {
    id: "record-008",
    studentId: "student-008",
    period: { year: 2026, semester: 1 },
    grades: {
      p1: { id: "grade-p1-008", value: 2.0, updated: true, lastUpdated: new Date(2026, 2, 20) },
      p2: { id: "grade-p2-008", value: 3.0, updated: true, lastUpdated: new Date(2026, 3, 15) },
      p3: { id: "grade-p3-008", value: null, updated: false },
      recovery: { id: "grade-rec-008", value: 4.5, updated: true, lastUpdated: new Date(2026, 4, 25) },
      final: { id: "grade-final-008", value: null, updated: false }
    },
    absenses: 8,
    createdAt: new Date(2026, 1, 10),
    updatedAt: new Date(2026, 4, 25)
  },
  {
    id: "record-009",
    studentId: "student-009",
    period: { year: 2026, semester: 1 },
    grades: {
      p1: { id: "grade-p1-009", value: 7.0, updated: true, lastUpdated: new Date(2026, 2, 20) },
      p2: { id: "grade-p2-009", value: 7.5, updated: true, lastUpdated: new Date(2026, 3, 15) },
      p3: { id: "grade-p3-009", value: 8.0, updated: true, lastUpdated: new Date(2026, 4, 20) },
      recovery: { id: "grade-rec-009", value: null, updated: false },
      final: { id: "grade-final-009", value: null, updated: false }
    },
    absenses: 2,
    createdAt: new Date(2026, 1, 10),
    updatedAt: new Date(2026, 4, 20)
  },
  {
    id: "record-010",
    studentId: "student-010",
    period: { year: 2026, semester: 1 },
    grades: {
      p1: { id: "grade-p1-010", value: 6.5, updated: true, lastUpdated: new Date(2026, 2, 20) },
      p2: { id: "grade-p2-010", value: 6.0, updated: true, lastUpdated: new Date(2026, 3, 15) },
      p3: { id: "grade-p3-010", value: null, updated: false },
      recovery: { id: "grade-rec-010", value: null, updated: false },
      final: { id: "grade-final-010", value: null, updated: false }
    },
    absenses: 5,
    createdAt: new Date(2026, 1, 10),
    updatedAt: new Date(2026, 3, 15)
  }
];

export function getStudentDataById(studentId: string) {
    return students.find(s => s.id === studentId)
}

export function getGradesByStudentId(studentId: string) {
    return studentSemesterRecords.find(s => s.studentId === studentId)
}