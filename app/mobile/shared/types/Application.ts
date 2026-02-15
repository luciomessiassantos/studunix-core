
// padrão de tipagem:
//export type SeuType = { // sempre exporte o type, interface ou classe
//  id:     // id e referencias de relacionamentos de tabelas
//  refId:
//  
//  data1: string   // domínio
//  data2: number
//  data3: boolean
//  data4: "1" | "A" | "B"
//  data5: any[]
//
//  createdAt: Date // dados de log como datas e dados compostos
//  pos: { id: string, name: string }
//  pre?: any
// }
//



export type User = {
    id?: string
    username: string
    email: string
    roles: string[]
}

export type LoginRequest = {
    login: string
    password: string
}

export type LoginResponse = {
    accessToken: string
    refreshToken: string
}

export type LoginError = {
    message: string
    field: "LOGIN" | "PASSWORD"
}


export class ErrorAuth implements Error {
    field: "LOGIN" | "PASSWORD";
    message: string
    name: string
    stack?: string
    cause?: string

    constructor(name: string,message: string, field: "LOGIN" | "PASSWORD", cause?: string, stack?: string) {
        this.name = name;
        this.message = message;
        this.field = field;
        this.cause = cause;
        this.stack = stack;
    }
    
    
}

export type StudentDataRequest = {
    studentId: string
}

export type StudentDataResponse = {
    id: string
    matricula: string
    course: string
    period: Period

}


export type ClassRoom = "A" | "B"
export type Period = 
"2023.1" | 
"2023.2" | 
"2024.1" | 
"2024.2" |
"2025.1" |
"2025.2" |
"2026.1"

export type GradeState = "Cursando" | "Aprovado" | "Reprovado"

export type GradesResponse = {
    id: string
    moduleId: string
    moduleName: string

    firstGrade: number
    secondGrade: number
    thirdGrade: number

    repo?: number
    final?: number

    misses: number
    state: GradeState

}

export type Module = {
    id: string
    name: string
    period: Period
    courseId: string

    preRequisite?: { moduleId: string, moduleName: string }
    posRequisite?: { moduleId: string, moduleName: string }

    addedAt: Date | string
}

export type Schedules = {
    id: string
    moduleId: string
    moduleName: string

    weekDay: string
    startHour: Date | string
    endHour: Date | string

    room: string
    professor: string 
}

export type TFIle = {
    name: string
    format: string
    size_bytes: number
    updated_at: Date
}


export type Assignment = {
    id: string
    moduleId: string
    moduleName: string
    state: "Pending" | "Expired" | "Done"
    title: string
    content: string

    points: number
    tries: number

    files: TFIle[]

    deadline: Date
    created_at: Date
}