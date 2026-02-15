import { getClasses } from "@/shared/api/routes/Academic";
import { ScheduleWeek } from "@/shared/types/Client";
import { useState, useEffect } from "react";


export const useGetClasses = () => {
  const [data, setData] = useState<ScheduleWeek | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getClasses()
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
};
