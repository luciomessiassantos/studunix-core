import { ScheduleCardType } from "@/shared/types/Client"
import { createContext, ReactNode, useContext, useMemo } from "react"
import { useGetClasses } from "../hooks/useApiRoutes"

type ScheduleContextType = {
  schedule: Record<string, ScheduleCardType[]>
  loading: boolean
}

const ScheduleContext = createContext<ScheduleContextType>(
  {} as ScheduleContextType
)


export function ScheduleProvider({ children }: { children: ReactNode }) {
  const { data, loading } = useGetClasses()

  const value = useMemo(() => ({
    schedule: data ?? {},
    loading
  }), [data, loading])

  return (
    <ScheduleContext.Provider value={value}>
      {children}
    </ScheduleContext.Provider>
  )
}

export function useSchedule() {
  return useContext(ScheduleContext);
}