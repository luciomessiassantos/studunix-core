import { CommomColors } from "~/shared/utils/colorUtils"

export type Role = 'STUDENT' | 'PROFESSOR' | 'ADMIN'



export type ReminderDto = {
    id: string
    label: string
    color: CommomColors
    date: string
}

export type ReminderInput = {
    id: string
    label: string
    color: CommomColors
    date: Date
}


export type UserDetailsDto = {
    id: string
    firstName: string
    lastName: string
    cpf: string
    officialEmail: string
}

export type ProfessorDetailsDto = {
    registrationId: string
    department: string
    moduleCount: number
    bond: string
} & UserDetailsDto

export type StudentDetailsDto = {
    registry: string
    period: string,
    courseId: string
    courseName: string
} & UserDetailsDto;


// para context service local
export type LoginDetails = {
    lastLogin: Date
    location: GeolocationPosition
}



export type LoginRequest = {
    login: string
    password: string
}

export type User = {
    id: string
    username: string
    roles: Role[]
}


export type FolderMetadata = {
    id: string
    name: string
    size: number
    folder_root_id: string
    created_at: Date
    modified_at: Date
}

export type FileMetadata = {
    id: string
    name: string
    size: number
    folder_id: string
    mime_type: string
    created_at: Date
    modified_at: Date
}

export type PaginatedData<T> = {
    data: T,
    totalPages: number
    elementsPage: number
    hasPrevious: boolean
    hasNext: boolean
    currentPage: number 
}

export type Metadata = (FolderMetadata | FileMetadata) & { type: 'FILE' | 'FOLDER' }
