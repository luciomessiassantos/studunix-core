import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { LucideAngularModule, FoldersIcon, DatabaseIcon, AtomIcon, PencilLineIcon, FolderIcon, UserIcon, UserRoundIcon } from 'lucide-angular';
import { pastDate } from '~/shared/utils/dateUtils';
import { RecentAccessType, RecentAccess } from '../types';

@Component({
  selector: 'app-recent-access-card',
  imports: [LucideAngularModule, NgClass],
  templateUrl: './recent-access-card.html',
})
export class RecentAccessCard {
  folders = FoldersIcon;
  database = DatabaseIcon;
  atom = AtomIcon;
  pencil = PencilLineIcon;
  folder = FolderIcon;
  user = UserRoundIcon;

  activeFilter = signal<RecentAccessType | null>(null);

  filters: { label: string; value: RecentAccessType; color: string }[] = [
    { label: 'Disciplina', value: 'Disciplina', color: '#b62929' },
    { label: 'Tarefa', value: 'Tarefa', color: '#F4A623' },
    { label: 'Pasta', value: 'Pasta', color: '#7C6BD9' },
    { label: 'Aluno', value: 'Aluno', color: '#3DB83D' },
  ];

  // mock — em produção, vem de um serviço
  accesses: RecentAccess[] = [
    { id:'ra1', label:'Banco de Dados I - 2026.1', type:'Disciplina', date: pastDate(0),  targetId:'channel-bd-001' },
    { id:'ra2', label:'Consultas SQL Avançadas', type:'Tarefa', date: pastDate(0),  path:'Banco de Dados I · 2026.1', targetId:'_asg_3n8p4r' },
    { id:'ra3', label:'Slides das Aulas', type:'Pasta', date: pastDate(0),  path:'Banco de Dados I · Materiais', targetId:'_fld_bd_slides_001' },
    { id:'ra4', label:'Nando Moura Júnior Silva', type:'Aluno', date: pastDate(0),  path:'POO · 2026.1 · 2026.1.333.666' },
    { id:'ra5', label:'Programação Orientada a Objetos - 2026.1', type:'Disciplina', date: pastDate(1), targetId:'channel-poo-001' },
    { id:'ra6', label:'Design Patterns', type:'Tarefa', date: pastDate(1),  path:'Prog. Orientada a Objetos · 2026.1', targetId:'_asg_8w1q6c' },
  ];

  get filtered(): RecentAccess[] {
    const f = this.activeFilter();
    return f ? this.accesses.filter(a => a.type === f) : this.accesses;
  }

  setFilter(type: RecentAccessType): void {
    this.activeFilter.set(this.activeFilter() === type ? null : type);
  }

  iconFor(type: RecentAccessType) {
    return { Disciplina: this.database, Tarefa: this.pencil,
             Pasta: this.folder, Aluno: this.user }[type];
  }

  relativeTime(date: Date): string {
    const diff = Math.floor((Date.now() - date.getTime()) / 60000);
    if (diff < 1)   return 'agora';
    if (diff < 60)  return `há ${diff}min`;
    const h = Math.floor(diff / 60);
    if (h < 24)     return `há ${h}h`;
    const d = Math.floor(h / 24);
    return d === 1 ? 'ontem' : `há ${d} dias`;
  }


  iconClass(type: RecentAccessType): string {
    return { Disciplina:'bg-primary-professor/10 text-primary-professor',
             Tarefa: 'bg-amber-50 text-amber-700',
             Pasta: 'bg-violet-50 text-violet-700',
             Aluno: 'bg-emerald-50 text-emerald-700' }[type];
  }

  pillClass(type: RecentAccessType): string {
    return { Disciplina:'bg-primary-professor/10 text-primary-professor',
             Tarefa: 'bg-amber-50 text-amber-700',
             Pasta: 'bg-violet-50 text-violet-700',
             Aluno: 'bg-emerald-50 text-emerald-700' }[type];
  }
}
