import { Component } from '@angular/core';
import { ClipboardIcon, DatabaseIcon, FolderIcon, GraduationCapIcon, NotebookPenIcon } from 'lucide-angular';
import { InfoCardSection, CompoundInfoCard } from '~/shared/components/compound-info-card/compound-info-card';
import { ChannelType } from '../../student/types';
import { ChannelCard } from '~/shared/components/channel-card/channel-card';


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

const channels: ChannelType[] = [
  {
    id: 'ch-01',
    name: 'Banco de Dados I - 2026.1',
    color: 'pastel-orange',
    icon: 'database',
    created_at: new Date()
  },
  {
    id: 'ch-02',
    name: 'Banco de Dados II - 2026.1',
    color: 'pastel-green',
    icon: 'database',
    created_at: new Date()
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
  readonly channels = channels
}
