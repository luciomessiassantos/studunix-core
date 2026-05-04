import { Component } from '@angular/core';
import { ClipboardPlusIcon, FoldersIcon, RotateCcwIcon, LucideAngularModule } from 'lucide-angular';
import { NewsCard } from "~/shared/components/news-card/news-card";
import { Footer } from "~/shared/components/footer/footer";
import { AcademicCalendar } from '~/shared/components/academic-calendar/academic-calendar';
import { ProfileCard } from "~/shared/components/profile-card/profile-card";
import { RecentAccessCard } from "../shared/recent-access-card/recent-access-card";

@Component({
  selector: 'app-home',
  imports: [AcademicCalendar, LucideAngularModule, NewsCard, Footer, ProfileCard, RecentAccessCard],
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
