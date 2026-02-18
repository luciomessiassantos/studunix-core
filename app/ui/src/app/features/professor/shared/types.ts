
export type AssignmentState = "Pending" | "Timeout";
export type ClassLetter = "A" | "B";
export type ClassRoom = {
    letter: ClassLetter
    studentsNum: number
}

export type FolderProfessor = {
    id: string
    name: string 
    size: number
    folders: FolderProfessor[]
    files: TFileProfessor[]

    created_at: Date
    modified_at: Date
}

export type TFileProfessor = {
    id: string
    name: string // ex: atividade.pdf, trabalho.docx ou slide.ppt
    size: number
    format: string

    created_at: Date
    modified_at: Date
}

export type StudentProfessor = {
    id: string
    firstName: string
    lastName: string
    period: AcademicPeriod
    
}

export type StudentGrades = {
    p1: number | null;
    p2: number | null;
    p3: number | null;
    recovery: number | null;
    final: number | null;
};

export type StudentSemesterRecord = {
    id: string;
    studentId: string;
    period: AcademicPeriod;

    grades: StudentGrades
    absenses: number

    extraPoints?: ExtraPoints[];

    createdAt: Date;
    updatedAt: Date;
}

export type AcademicPeriod = {
  year: number;
  semester: 1 | 2;
}



export type ExtraPoints = {
    id: number
    points: number
    description?: string

    expires_at: Date
}

export type AssignmentProfessor = {
    id: string
    title: string
    moduleName: string
    moduleId: string

    period: string
    classLetter: ClassLetter

    description?: string
    state: AssignmentState
    submissionsQuantity: number

    folderOriginId: string
    folderOriginName: string

    files: TFileProfessor[]

    created_at: Date
    deadline: Date

    isReusable: boolean
}


export type Submission = {
    submissionId: string
    assignmentId: string
    assignmentTitle: string

    student: StudentProfessor

    content?: string
    
    // files?: File[]
    files?: TFileProfessor[]

    sendAt: Date
    status: "Pending" | "Accepted" | "Rejected";
}

export type FastModule = {
    id: string
    name: string
}

export type FastFolder = {
    id: string
    name: string
}

export type AssignmentInput = {
    title: string
    details?: string
    module: FastModule

    folder: FastFolder

    period: string
    classLetter: ClassLetter

    files?: File[]

    points: number
    tries: number
    created_at: Date
    deadline: Date

    isReusable: boolean

}