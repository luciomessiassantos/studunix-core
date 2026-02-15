import { Schedules } from "./Application"

export type CommomColors = "pastelBlue" 
| "pastelRed" 
| "pastelGreen" 
| "pastelPurple" 
| "pastelMint"
| "pastelOrange"
| "pastelPeach"
| "pastelPink"
| "pastelYellow"



export type ScheduleCardType = {
    schedule: Schedules
    block: "H"
    color: string
}

export type Week = "Segunda" | "Terça" | "Quarta" | "Quinta" | "Sexta"

export type ScheduleWeek = Record<Week, ScheduleCardType[]>

export type EventSchedule = {
    id: string
    title: string
    content: string
    fromDate: Date
    toDate?: Date
    course?: string
    period?: '2026.1' | '2025.2' | '2025.1'
    classroom: 'A' | 'B',

    colors: CommomColors
}

export type CalendarDay = {
    id: string
    day: number
    date: Date
    events?: EventSchedule | []
    active: boolean
}