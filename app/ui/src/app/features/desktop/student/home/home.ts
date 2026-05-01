import { Component, OnInit } from '@angular/core';
import { ZardCardComponent } from "~/shared/components/card";
import { ZardSkeletonComponent } from "~/shared/components/skeleton";
import { Schedules } from '../shared/components/schedules/schedules';
import { ZardCalendarComponent } from "~/shared/components/calendar";
import { FileIcon, FolderIcon, NotebookPenIcon, LucideAngularModule } from 'lucide-angular';
import { Footer } from "~/shared/components/footer/footer";
import { AcademicCalendar } from "~/shared/components/academic-calendar/academic-calendar";
import { ProfileCard } from '~/shared/components/profile-card/profile-card';

@Component({
  selector: 'app-home',
  imports: [ZardSkeletonComponent, Schedules, LucideAngularModule, Footer, AcademicCalendar, ProfileCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  tarefa = NotebookPenIcon;
  material = FileIcon; 

  loading = true;
  loaded = false;

  updates = [
    { type: 'task',  label: 'Consultas SQL',                    time: 'há 2 dias' },
    { type: 'file',  label: 'Sistemas-de-Bancos-de-Dados.pdf',  time: 'há 5 dias' },
    { type: 'file',  label: 'Aula-cardinalidade.ppt',           time: 'há 5 dias' },
    { type: 'file',  label: 'Aula-3-redes-computadores.ppt',    time: 'há 5 dias' },
  ];

  ngOnInit(): void {
    if (!this.loaded) {
      setTimeout(() => {
        this.loading = false;
        this.loaded = true;
      }, 3000);
    }
  }

}
