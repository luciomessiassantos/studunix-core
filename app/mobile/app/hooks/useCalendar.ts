import { CalendarDay, EventSchedule } from "@/shared/types/Client"

interface useCalendarProps {
    events?: EventSchedule[] | never[]
    startDate?: Date
}

function generate(startDate: Date) {
        const calendarDays: CalendarDay[] = [];
        const beforeDays: CalendarDay[] = [];
        const actualDays: CalendarDay[] = [];
        const afterDays: CalendarDay[] = [];


        const date = startDate;
        const month = date.getMonth();
        const year = date.getFullYear();


        const firstDayWeekIndex = new Date(year, month, 0).getDay();
        const lastDayIndex = new Date(year, month + 1, -1).getDate();
        const lastDayWeekIndex = new Date(year, month + 1, -1).getDay();

        // coletar os dias antes do mês
        for (let i = 0; i < firstDayWeekIndex + 1; i++) {
            const beforeDate = new Date(year, month, i - firstDayWeekIndex);
            const beforeDay = beforeDate.getDate();

            beforeDays.push({ id: beforeDate.toISOString(), date: beforeDate, day: beforeDay, events: [], active: false });

        }

        for (let d = 1; d < lastDayIndex + 2; d++) {
            const actualDate = new Date(year, month, d);
            const actualDay = actualDate.getDate();
            actualDays.push({ id: actualDate.toISOString(), date: actualDate, day: actualDay, active: true, events: [] });
        }

        for (let a = 1; a < (7 - lastDayWeekIndex); a++) {
            const afterDate = new Date(year, month + 1, a);
            const afterDay = afterDate.getDate();

            afterDays.push({ id: afterDate.toISOString(), date: afterDate, day: afterDay, active: false, events: [] });
        }

        calendarDays.push(...beforeDays, ...actualDays, ...afterDays);
        return { calendarDays };
    }

export const useCalendar = ({
    events = [],
    startDate = new Date(),
}: useCalendarProps ) => {

    const { calendarDays } = generate(startDate);
    
    return { calendarDays }

    
}