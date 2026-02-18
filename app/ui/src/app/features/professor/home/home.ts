import { Component } from '@angular/core';
import { ClipboardPlusIcon, RotateCcwIcon } from 'lucide-angular';
import { NewsCard } from "~/shared/components/news-card/news-card";
import { ActionCard } from "~/shared/components/action-card/action-card";

@Component({
  selector: 'app-home',
  imports: [NewsCard, ActionCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeProfessor {

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
      details: "Atualize e lance notas de alunos"
    }
  ]

}
