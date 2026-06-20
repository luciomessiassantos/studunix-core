import { CommomColors } from "./colorUtils"


export type LatestDay = {
    day: number
    date: Date
    weekDay: string
    weekDayShort: string

}

export type AcademicReminder = {
    id: string
    name: string
    color: CommomColors
    description?: string
    date: Date
    isAcademic: boolean
}

export type CalendarDay = {
    date: Date
    day: number
    reminders: AcademicReminder[]
    isCurrent: boolean
}

const WEEK_DAYS = [
    "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"
]

const WEEK_DAYS_SHORT = [
    "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"
]

const getLatestDays = (interval: number = 10) => {

    const days: LatestDay[] = []; 

    console.log(interval);
    
    const today = new Date();
    const todayDay = today.getDate();
    const weekDayIndex = today.getDay();
    const weekDayLong = WEEK_DAYS[weekDayIndex];
    const weekDayShort = WEEK_DAYS_SHORT[weekDayIndex];

    const month = today.getMonth()
    const year = today.getFullYear();

    console.log(todayDay);
    console.log(weekDayIndex);
    console.log(weekDayLong);
    console.log(weekDayShort);

    for (let i = todayDay; i > interval; i--) {
        const d = new Date(year, month, i);
        const nday: LatestDay = {
            date: d,
            day: i,
            weekDay: WEEK_DAYS[d.getDay()],
            weekDayShort: WEEK_DAYS_SHORT[d.getDay()]
        }
        console.log(nday.weekDayShort);
        days.push(nday);
        
    }

    return days;

}

export const GenerateCalendar = (month?: number, reminders?: AcademicReminder[]): CalendarDay[] => {
    const calendarDays: CalendarDay[] = [];

    const today = new Date();
    let year = today.getFullYear();
    let monthIndex = today.getMonth();

    if (month !== undefined) {
        const date = new Date(year, month, 1); 
        year = date.getFullYear();
        monthIndex = date.getMonth();
    }

    
    const firstDayOfMonth = new Date(year, monthIndex, 1);
    const firstDayIndex = firstDayOfMonth.getDay();

    const lastDateOfMonth = new Date(year, monthIndex + 1, 0).getDate();
    const lastDayIndex = new Date(year, monthIndex, lastDateOfMonth).getDay();

    const prevDays = firstDayIndex;
    const nextDays = 6 - lastDayIndex;

    const startDate = new Date(year, monthIndex, 1 - prevDays);
    const totalDays = prevDays + lastDateOfMonth + nextDays;

    
    const reminderMap = new Map<string, AcademicReminder[]>();
    if (reminders) {
        reminders.forEach(r => {
            const d = r.date;
            const key = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
            if (!reminderMap.has(key)) reminderMap.set(key, []);
            reminderMap.get(key)!.push(r);
        });
    }

    for (let i = 0; i < totalDays; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);

        const isCurrent = date.getFullYear() === year && date.getMonth() === monthIndex;

        const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
        const dayReminders = reminderMap.get(key) || [];
    

        calendarDays.push({
            date,
            day: date.getDate(),
            reminders: dayReminders,
            isCurrent
        });
    }

    return calendarDays;
};

export function isToday(date: Date): boolean {
  const now = new Date();
  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate()
  );
}


export function isThisWeek(date: Date, weekStartsOnMonday: boolean = true): boolean {
  const now = new Date();
  const currentDayOfWeek = now.getDay();
  
  const diffToStart = weekStartsOnMonday
    ? (currentDayOfWeek === 0 ? -6 : 1 - currentDayOfWeek)  
    : (0 - currentDayOfWeek);                               

  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() + diffToStart);
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999);

  const time = date.getTime();
  return time >= startOfWeek.getTime() && time <= endOfWeek.getTime();
}

export function pastDate(days: number): Date {
  const date = new Date();
  date.setDate(date.getDate() - Math.abs(days));
  date.setHours(0, 0, 0, 0);
  return date;
}

export default { getLatestDays, GenerateCalendar, isToday, isThisWeek, pastDate }


