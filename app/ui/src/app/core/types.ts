import { CommomColors } from "~/shared/utils/colorUtils"

export type Role = 'STUDENT' | 'PROFESSOR' | 'ADMIN'

export type User = {
    id: string
    username: string
    role: Role
}

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
    userId: string
    firstName: string
    lastName: string
    cpf: string
    officialEmail: string
}
// para context service local
export type LoginDetails = {
    lastLogin: Date
}