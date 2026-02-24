import { Component } from '@angular/core';
import { ClipboardPlusIcon, FolderIcon, FoldersIcon, RotateCcwIcon, LucideAngularModule } from 'lucide-angular';
import { NewsCard } from "~/shared/components/news-card/news-card";
import { ActionCard } from "~/shared/components/action-card/action-card";
import { RemindersCalendar } from "~/shared/components/reminders-calendar/reminders-calendar";
import { InfoNotificationCard } from "~/shared/components/info-notification-card/info-notification-card";

@Component({
  selector: 'app-home',
  imports: [ActionCard, RemindersCalendar, LucideAngularModule, InfoNotificationCard, NewsCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeProfessor {

  folders = FoldersIcon;



  readonly actionData = [
    {
      label: "Atualizar Notas",
      icon: RotateCcwIcon,
      action: () => { console.log('work') },
      details: "Atualize e lance notas de alunos"
    },
    {
      label: "Criar Tarefa",
      icon: ClipboardPlusIcon,
      action: () => { console.log('work') },
      details: "Crie tarefas rapidamente"
    }
  ]

}
