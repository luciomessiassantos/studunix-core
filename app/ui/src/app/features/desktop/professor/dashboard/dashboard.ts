import { Component } from '@angular/core';
import { ClipboardIcon, DatabaseIcon, FolderIcon, GraduationCapIcon, NotebookPenIcon } from 'lucide-angular';
import { InfoCardSection, CompoundInfoCard } from '~/shared/components/compound-info-card/compound-info-card';
import { ChannelType } from '../../student/types';
import { ChannelCard } from '~/shared/components/channel-card/channel-card';
import { channels } from '../../student/data';


const cardData: InfoCardSection[] = [
  {
    color: 'pastel-blue',
    icon: GraduationCapIcon,
    label: 'Total de alunos',
    data: '73'
  },
  { 
    color: 'pastel-green',
    icon: ClipboardIcon,
    label: 'Total de disciplinas',
    data: '5'
  },
  {
    color: 'pastel-yellow',
    icon: FolderIcon,
    label: 'Total em arquivos',
    data: '1.2 GB'
  },
  {
    color: 'pastel-red',
    icon: NotebookPenIcon,
    label: 'Total de tarefas',
    data: '34'
  }
] 
  

@Component({
  selector: 'app-dashboard',
  imports: [CompoundInfoCard, ChannelCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  readonly infoCardData = cardData
  readonly channels = channels;
}
