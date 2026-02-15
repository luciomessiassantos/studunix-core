import data from "../data.json";
import { ScheduleWeek } from "@/shared/types/Client";

export const getClasses = async (): Promise<ScheduleWeek> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.schedule as ScheduleWeek);
    }, 500); 
  });
};