import { ChannelType, StudentRecord, AssignmentStudent, Material } from "./types";

const now = new Date();
const oneDay = 24 * 60 * 60 * 1000;
const pastDate = (days: number) => new Date(now.getTime() - days * oneDay);
const futureDate = (days: number) => new Date(now.getTime() + days * oneDay);

export const channels: ChannelType[] = [
  {
    id: "channel-bd-001",
    name: "Banco de Dados I - 2026.1",
    icon: "database",
    color: "pastel-blue",
    created_at: pastDate(30),
  },
  {
    id: "channel-poo-001",
    name: "Programação Orientada a Objetos - 2026.1",
    icon: "atom",
    color: "pastel-green",
    created_at: pastDate(25),

  }
];

export function findChannelById(id: string): ChannelType | undefined {
  return channels.find(channel => channel.id === id);
}


export const studentRecords: StudentRecord[] = [
    {
        id: "_rcrd&_a7k92m",
        moduleId: "_mdlss#_bd1x38",
        moduleName: "Banco de Dados I",
        firstGrade: {
            id: "_grd$_f3h7s9",
            value: 8.5,
            updated: false
        },
        secondGrade: {
            id: "_grd$_m2n5x1",
            value: 7.0,
            updated: false
        },
        thirdGrade: {
            id: "_grd$_p9k4r2",
            value: 9.2,
            updated: true
        },
        replacement: undefined,
        final: undefined,
        absenses: 2,
        partialAverage: 8.2,
        updated: true
    },
    {
        id: "_rcrd&_n4w8p1",
        moduleId: "_mdlss#_web3t7",
        moduleName: "Web I",
        firstGrade: {
            id: "_grd$_j2h6f5",
            value: 9.0,
            updated: false
        },
        secondGrade: {
            id: "_grd$_k8l3m9",
            value: 8.5,
            updated: false
        },
        thirdGrade: {
            id: "_grd$_x1c7v4",
            value: 9.5,
            updated: false
        },
        replacement: undefined,
        final: undefined,
        absenses: 1,
        partialAverage: 9.0,
        updated: false
    },
    {
        id: "_rcrd&_t6r9e2",
        moduleId: "_mdlss#_ed5h2y",
        moduleName: "Estruturas de Dados",
        firstGrade: {
            id: "_grd$_a4d8g1",
            value: 7.5,
            updated: false
        },
        secondGrade: {
            id: "_grd$_h9j3k6",
            value: 4.0,
            updated: true
        },
        thirdGrade: {
            id: "_grd$_n2p5q8",
            value: 7.8,
            updated: false
        },
        replacement: {
            id: "_grd$_r5t8y2",
            value: 9.0,
            updated: true
        },
        final: undefined,
        absenses: 3,
        partialAverage: 6.4, 
        updated: true
    },
    {
        id: "_rcrd&_w3m7b4",
        moduleId: "_mdlss#_ext9r1",
        moduleName: "Extensão II",
        firstGrade: {
            id: "_grd$_v5x8z2",
            value: 10.0,
            updated: false
        },
        secondGrade: {
            id: "_grd$_c4f6h9",
            value: 9.5,
            updated: false
        },
        thirdGrade: {
            id: "_grd$_l1o3p7",
            value: 10.0,
            updated: false
        },
        replacement: undefined,
        final: undefined,
        absenses: 0,
        partialAverage: 9.8,
        updated: false
    },
    {
        id: "_rcrd&_d5k2s8",
        moduleId: "_mdlss#_lrc6u4",
        moduleName: "Lab. de Redes de Computadores",
        firstGrade: {
            id: "_grd$_y7t9r3",
            value: 8.2,
            updated: false
        },
        secondGrade: {
            id: "_grd$_u1i5o9",
            value: 8.8,
            updated: true
        },
        thirdGrade: {
            id: "_grd$_e2w4q6",
            value: 7.9,
            updated: false
        },
        replacement: undefined,
        final: undefined,
        absenses: 4,
        partialAverage: 8.3,
        updated: true
    }
];



export const assignments: AssignmentStudent[] = [
    {
        id: "_asg_7k2m9x",
        title: "Modelagem de Banco de Dados",
        description: "Criar o modelo conceitual e lógico para um sistema de biblioteca",
        module: "channel-bd-001",
        tries: 2,
        deadline: new Date("2025-04-15T23:59:59"),
        created_at: new Date("2025-03-01T10:00:00"),
        submission: undefined,
        status: "PENDING"
    },
    {
        id: "_asg_3n8p4r",
        title: "Consultas SQL Avançadas",
        description: "Desenvolver consultas com JOINs, subconsultas e funções de agregação",
        module: "channel-bd-001",
        tries: 3,
        deadline: new Date("2025-04-10T23:59:59"),
        created_at: new Date("2025-03-05T14:30:00"),
        submission: undefined,
        status: "PENDING"
    },
    {
        id: "_asg_5v7t2y",
        title: "Projeto de POO - Sistema Bancário",
        description: "Implementar um sistema bancário com classes, herança e polimorfismo",
        module: "channel-poo-001",
        tries: 1,
        deadline: new Date("2025-04-20T23:59:59"),
        created_at: new Date("2025-03-10T09:15:00"),
        submission: undefined,
        status: "PENDING"
    },
    {
        id: "_asg_8w1q6c",
        title: "Design Patterns",
        description: "Aplicar padrões de projeto Singleton, Factory e Observer",
        module: "channel-poo-001",
        tries: 2,
        deadline: new Date("2025-04-05T23:59:59"),
        created_at: new Date("2025-03-12T11:45:00"),
        submission: undefined,
        status: "EXPIRED"
    },
    {
        id: "_asg_2j4h9f",
        title: "Otimização de Índices",
        description: "Analisar e otimizar índices para consultas de alto desempenho",
        module: "channel-bd-001",
        tries: 1,
        deadline: new Date("2025-04-18T23:59:59"),
        created_at: new Date("2025-03-15T08:30:00"),
        submission: undefined,
        status: "PENDING"
    },
    {
        id: "_asg_9z5k7d",
        title: "Tratamento de Exceções",
        description: "Implementar tratamento de exceções personalizadas e logs",
        module: "channel-poo-001",
        tries: 3,
        deadline: new Date("2025-03-28T23:59:59"),
        created_at: new Date("2025-03-18T13:20:00"),
        submission: undefined,
        status: "EXPIRED"
    },
    {
        id: "_asg_1r6f3s",
        title: "Stored Procedures e Triggers",
        description: "Criar stored procedures e triggers para automação de regras de negócio",
        module: "channel-bd-001",
        tries: 2,
        deadline: new Date("2025-04-25T23:59:59"),
        created_at: new Date("2025-03-20T16:00:00"),
        submission: undefined,
        status: "PENDING"
    },
    {
        id: "_asg_0g9h4c",
        title: "Coleções e Generics",
        description: "Implementar coleções personalizadas utilizando generics",
        module: "channel-poo-001",
        tries: 1,
        deadline: new Date("2025-04-12T23:59:59"),
        created_at: new Date("2025-03-22T10:45:00"),
        submission: undefined,
        status: "PENDING"
    }
];


export const getAssignmentsByChannelId = (channelId: string) => {
  return assignments.filter(a => a.module === channelId);
} 

export const materials: Material[] = [
    {
        id: "_mat_bd_001",
        channelId: "channel-bd-001",
        folders: [
            {
                id: "_fld_bd_slides_001",
                name: "Slides das Aulas",
                files: [
                    {
                        name: "Aula01_Introducao_Banco_Dados.pdf",
                        bytes: 2457600,
                        mime: "application/pdf",
                        modified_at: new Date(2026, 1, 15, 10, 30)
                    },
                    {
                        name: "Aula02_Modelagem_Conceitual.pdf",
                        bytes: 3129344,
                        mime: "application/pdf",
                        modified_at: new Date(2026, 1, 22, 14, 15)
                    },
                    {
                        name: "Aula03_Modelagem_Logica.pdf",
                        bytes: 2891264,
                        mime: "application/pdf",
                        modified_at: new Date(2026, 2, 1, 11, 0)
                    },
                    {
                        name: "Aula04_Normalizacao.pdf",
                        bytes: 3670016,
                        mime: "application/pdf",
                        modified_at: new Date(2026, 2, 8, 9, 45)
                    },
                    {
                        name: "Aula05_SQL_Introducao.pdf",
                        bytes: 4128768,
                        mime: "application/pdf",
                        modified_at: new Date(2026, 2, 15, 16, 20)
                    }
                ],
                created_at: new Date(2026, 1, 10)
            },
            {
                id: "_fld_bd_materials_001",
                name: "Materiais de Apoio",
                files: [
                    {
                        name: "Guia_Rapido_SQL.pdf",
                        bytes: 1568768,
                        mime: "application/pdf",
                        modified_at: new Date(2026, 1, 18, 13, 0)
                    },
                    {
                        name: "Exercicios_Modelagem.pdf",
                        bytes: 845672,
                        mime: "application/pdf",
                        modified_at: new Date(2026, 1, 25, 10, 15)
                    },
                    {
                        name: "Lista_Exercicios_SQL.pdf",
                        bytes: 1234567,
                        mime: "application/pdf",
                        modified_at: new Date(2026, 2, 5, 8, 30)
                    },
                    {
                        name: "Projeto_Final_BD.docx",
                        bytes: 567890,
                        mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        modified_at: new Date(2026, 2, 12, 14, 45)
                    }
                ],
                created_at: new Date(2026, 1, 12)
            },
            {
                id: "_fld_bd_books_001",
                name: "Livros e Referências",
                files: [
                    {
                        name: "Sistemas_de_Banco_de_Dados_Elmasri.pdf",
                        bytes: 12582912,
                        mime: "application/pdf",
                        modified_at: new Date(2026, 1, 5, 9, 0)
                    },
                    {
                        name: "Projeto_de_Banco_de_Dados_Heuser.pdf",
                        bytes: 8912896,
                        mime: "application/pdf",
                        modified_at: new Date(2026, 1, 8, 11, 30)
                    },
                    {
                        name: "SQL_Para_Leigos.pdf",
                        bytes: 5234560,
                        mime: "application/pdf",
                        modified_at: new Date(2026, 1, 20, 15, 45)
                    }
                ],
                created_at: new Date(2026, 1, 3)
            }
        ]
    },
    {
        id: "_mat_poo_001",
        channelId: "channel-poo-001",
        folders: [
            {
                id: "_fld_poo_slides_001",
                name: "Slides das Aulas",
                files: [
                    {
                        name: "Aula01_Introducao_POO.pdf",
                        bytes: 2785280,
                        mime: "application/pdf",
                        modified_at: new Date(2026, 1, 16, 10, 0)
                    },
                    {
                        name: "Aula02_Classes_Objetos.pdf",
                        bytes: 3244032,
                        mime: "application/pdf",
                        modified_at: new Date(2026, 1, 23, 13, 30)
                    },
                    {
                        name: "Aula03_Encapsulamento_Heranca.pdf",
                        bytes: 3563520,
                        mime: "application/pdf",
                        modified_at: new Date(2026, 2, 2, 9, 15)
                    },
                    {
                        name: "Aula04_Polimorfismo_Interfaces.pdf",
                        bytes: 3915776,
                        mime: "application/pdf",
                        modified_at: new Date(2026, 2, 9, 14, 45)
                    },
                    {
                        name: "Aula05_Tratamento_Excecoes.pdf",
                        bytes: 2891264,
                        mime: "application/pdf",
                        modified_at: new Date(2026, 2, 16, 11, 20)
                    }
                ],
                created_at: new Date(2026, 1, 10)
            },
            {
                id: "_fld_poo_materials_001",
                name: "Materiais de Apoio",
                files: [
                    {
                        name: "Exercicios_Classes_Objetos.pdf",
                        bytes: 987654,
                        mime: "application/pdf",
                        modified_at: new Date(2026, 1, 20, 8, 30)
                    },
                    {
                        name: "Desafios_Heranca_Polimorfismo.pdf",
                        bytes: 1234567,
                        mime: "application/pdf",
                        modified_at: new Date(2026, 1, 28, 15, 0)
                    },
                    {
                        name: "Projeto_Sistema_Bancario.zip",
                        bytes: 4567890,
                        mime: "application/zip",
                        modified_at: new Date(2026, 2, 5, 10, 45)
                    },
                    {
                        name: "Guia_UML_Classes.pdf",
                        bytes: 1789456,
                        mime: "application/pdf",
                        modified_at: new Date(2026, 2, 12, 13, 15)
                    }
                ],
                created_at: new Date(2026, 1, 12)
            },
            {
                id: "_fld_poo_books_001",
                name: "Livros e Referências",
                files: [
                    {
                        name: "Use_a_Cabeca_Java.pdf",
                        bytes: 15687680,
                        mime: "application/pdf",
                        modified_at: new Date(2026, 1, 7, 14, 0)
                    },
                    {
                        name: "Java_Como_Programar_Deitel.pdf",
                        bytes: 21474836,
                        mime: "application/pdf",
                        modified_at: new Date(2026, 1, 10, 9, 30)
                    },
                    {
                        name: "Design_Patterns_GoF.pdf",
                        bytes: 9830400,
                        mime: "application/pdf",
                        modified_at: new Date(2026, 1, 18, 16, 45)
                    }
                ],
                created_at: new Date(2026, 1, 5)
            }
        ]
    }
];

export default function getMaterialsByChannelId(channelId: string): Material[] {
    return materials.filter(m => m.channelId === channelId);
}


