
export type Role = 'STUDENT' | 'PROFESSOR' | 'ADMIN'

export type User = {
    id: string
    username: string
    role: Role
}