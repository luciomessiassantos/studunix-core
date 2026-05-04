import { Component, signal } from '@angular/core';
import { ChannelType, ChannelUpdate } from '../../types';
import { channels } from '../../data';
import { AtomIcon, DatabaseIcon, FileIcon, LucideAngularModule, NotebookPenIcon } from 'lucide-angular';
import { DatePipe, SlicePipe } from '@angular/common';
import { isThisWeek, isToday, pastDate } from '~/shared/utils/dateUtils';

@Component({
  selector: 'app-updates-card',
  imports: [LucideAngularModule, SlicePipe],
  templateUrl: './updates-card.html',
})
export class UpdatesCard {
  tarefa   = NotebookPenIcon;
  material = FileIcon;

  activeFilter = signal<string | null>(null);

  channels = channels; // importado do seu mock

  updates: ChannelUpdate[] = [
    { id:'u1', label:'Consultas SQL — Exercícios práticos', type:'task', time:'há 2h',   date: pastDate(0), channel: channels[0] },
    { id:'u2', label:'Padrões de projeto — Aula 08',       type:'file', time:'há 3h',   date: pastDate(0), channel: channels[1] },
    { id:'u3', label:'Sistemas-de-Bancos-de-Dados.pdf',    type:'file', time:'há 2 dias',date: pastDate(2), channel: channels[0] },
    { id:'u4', label:'Aula-cardinalidade.ppt',             type:'file', time:'há 2 dias',date: pastDate(2), channel: channels[0] },
    { id:'u5', label:'Aula-3-redes-computadores.ppt',      type:'file', time:'há 5 dias',date: pastDate(5), channel: channels[1] },
  ];

  get filtered(): ChannelUpdate[] {
    const filtroAtivo = this.activeFilter();
    return filtroAtivo ? this.updates.filter(u => u.channel.id === filtroAtivo) : this.updates;
  }

  get grouped(): { label: string; items: ChannelUpdate[] }[] {
    const today    = this.filtered.filter(u => isToday(u.date));
    const thisWeek = this.filtered.filter(u => !isToday(u.date) && isThisWeek(u.date));
    const older    = this.filtered.filter(u => !isThisWeek(u.date));

    
    return [
      ...(today.length    ? [{ label: 'Hoje',          items: today    }] : []),
      ...(thisWeek.length ? [{ label: 'Esta semana',   items: thisWeek }] : []),
      ...(older.length    ? [{ label: 'Mais antigos',  items: older    }] : []),
    ];
  }

  setFilter(id: string | null) {
    this.activeFilter.set(this.activeFilter() === id ? null : id);
  }

  iconFor(channel: ChannelType) {
    const map: Record<string, any> = { database: DatabaseIcon, atom: AtomIcon };
    return map[channel.icon] ?? FileIcon;
  }
}
