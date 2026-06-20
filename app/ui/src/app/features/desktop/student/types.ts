import { CommomColors } from "~/shared/utils/colorUtils"

type Time = {
    hours: number,
    minutes: number
}

export type ChannelType = {
    id: string
    name: string
    icon: string
    color: CommomColors
    created_at: Date
}

export type TFile = {
    name: string
    bytes: number
    mime: string
    modified_at: Date
}


export type Schedule = {
    id: string,
    moduleName: string
    room: string
    weekDayIndex: number
    professor: string
    startTime: Time
    endTime: Time
}

export type WeekSchedule = {
    day: "Seg" | 'Ter' | 'Qua' | 'Qui' | 'Sex'
    dayIndex: number
    schedules: Array<Schedule>
}

export type GradeCell = {
    id: string
    value: number
    updated: boolean
}

export type StudentRecord = {
    id: string
    moduleId: string
    moduleName: string

    firstGrade?: GradeCell
    secondGrade?: GradeCell
    thirdGrade?: GradeCell

    replacement?: GradeCell
    final?: GradeCell

    absenses: number

    partialAverage: number

    updated: boolean
}

export type AssignmentStudent = {
    id: string
    title: string
    description: string
    module: string

    tries: number
    deadline: Date
    created_at: Date

    submission?: Submission
    status: "PENDING" | "EXPIRED" 
}

export type UpdateType = 'task' | 'file';

export type ChannelUpdate = {
  id: string;
  label: string;
  type: UpdateType;
  time: string;
  date: Date;
  channel: ChannelType;
};

export type Submission = {
    date: Date
    files: File[]
}


export type TFolder = {
  id: string
  name: string
  files: TFile[]
  created_at: Date
}

export type Material = {
    id: string
    channelId: string
    folders: TFolder[]
}

