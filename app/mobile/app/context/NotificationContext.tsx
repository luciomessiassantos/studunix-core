import { createContext, ReactNode, useContext, useState } from 'react';
import { NotificationType } from '../components/notification-card';

type NotificationContextType = {
  newestNotification: NotificationType | undefined;
  setNewNotification: (v: NotificationType | undefined) => void;
};

const NotificationContext = createContext<NotificationContextType | null>(null);

export function NotificationProvider({ children }: { children: ReactNode}) {
  const [newestNotification, setNewNotification] = useState<NotificationType | undefined>({
    id: 'n1', details: "Provas finais de Web I marcadas", title: "Provas Finais", type: 'Academic'
    });

  return (
    <NotificationContext.Provider value={{ newestNotification, setNewNotification }}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  const context = useContext(NotificationContext);
  if (!context) throw new Error("Use dentro do Provider");
  return context;
}