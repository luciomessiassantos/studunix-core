import { Component } from '@angular/core';
import { CloudUploadIcon, FolderArchiveIcon, NotebookPenIcon, TriangleAlertIcon, Users } from 'lucide-angular';
import { CompoundInfoCard, InfoCardSection } from "~/shared/components/compound-info-card/compound-info-card";
import { NotificationInlineCard, TabData } from '~/shared/utils/type';
import { InfoNotificationCard } from "~/shared/components/info-notification-card/info-notification-card";
import { RouterOutlet } from '@angular/router';
import { ZardTabComponent, ZardTabGroupComponent } from "~/shared/components/tabs";
import { InnerTabs } from "~/shared/components/inner-tabs/inner-tabs";


@Component({
  selector: 'app-dashboard',
  imports: [CompoundInfoCard, InfoNotificationCard, RouterOutlet, ZardTabComponent, ZardTabGroupComponent, InnerTabs],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  
})
export class Dashboard {

  readonly cardData: InfoCardSection[] = [
    {
      data: "182",
      label: "Alunos",
      icon: Users,
      color: "pastel-blue"
    },
    {
      data: "18",
      label: "Tarefas",
      icon: NotebookPenIcon,
      color: "pastel-red"
    },
    {
      data: "22",
      label: "Submissões",
      icon: CloudUploadIcon,
      color: "pastel-yellow"
    },
    {
      data: "1,2GB",
      label: "Arquivos",
      icon: FolderArchiveIcon,
      color: "pastel-green"
    }
  ]

  readonly notificationCard: NotificationInlineCard | undefined = {
    color: 'pastel-red',
    label: "Atenção a bugs",
    details: "As funcionalidade de criação de tarefas ainda está em desenvolvimento, fique atento à erros, e relate-os para o suporte.",
    icon: TriangleAlertIcon
  }


  readonly innerTabsData: TabData[] = [
    {
      icon: NotebookPenIcon,
      label: "Tarefas",
      path: "/professor/dashboard/assignments"
    },
    {
      icon: FolderArchiveIcon,
      label: "Pastas",
      path: "/professor/dashboard/folders"
    },
  ]
}
