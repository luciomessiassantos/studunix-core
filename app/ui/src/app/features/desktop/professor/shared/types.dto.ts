export type AssignmentState = "Pending" | "Done";
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

    created_at: string
    modified_at: string
}

export type TFileProfessor = {
    id: string
    name: string // ex: atividade.pdf, trabalho.docx ou slide.ppt
    size: number
    format: string

    created_at: string
    modified_at: string
}

export type StudentProfessor = {
    id: string
    firstName: string
    lastName: string
    period: string
    
}

export type StudentGrades = {
    id: string
    recordId: string
    p1?: number;
    p2?: number;
    p3?: number;
    recovery?: number;
    final?: number;

};

export type StudentSemesterRecord = {
    id: string;
    studentId: string;
    period: AcademicPeriod;

    grades: StudentGrades
    absenses: number
    moduleId: string
    moduleName: string

    extraPoints?: ExtraPoints[];

    createdAt: string;
    updatedAt: string;
}

export type AcademicPeriod = {
  year: number;
  semester: 1 | 2;
}



export type ExtraPoints = {
    id: number
    recordId: string 
    points: number
    title?: string
    reason?: string

    state: ExtraPointsState
    expires_at: string
}

export type ExtraPointsState = "Available" | "Expired" | "Applied";

export type AssignmentProfessor = {
    id: string
    title: string
    moduleName: string
    moduleId: string

    period: string
    class: ClassLetter

    description?: string
    state: AssignmentState
    submissionsQuantity: number

    folderOriginId: string
    folderOriginName: string

    files: TFileProfessor[]

    created_at: string
    deadline: string

    isReusable: boolean
}


export type Submission = {
    submissionId: string
    assignmentId: string
    assignmentTitle: string

    student: StudentProfessor

    content?: string
    
    // files?: File[]
    files?: TFileProfessor

    sendAt: string
    status: "Pending" | "Accepted" | "Rejected"
}

export type ProfessorModule = {
    id: string
    name: string
    period: AcademicPeriod
}



export type ProfessorDetails = {
    id: string
    userId: string
    moduleId: string
    period: AcademicPeriod
}