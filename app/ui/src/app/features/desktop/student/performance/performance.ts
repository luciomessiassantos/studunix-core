import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ChartNoAxesColumnIncreasingIcon, UserCheckIcon, UserRoundCheckIcon, WalletIcon } from 'lucide-angular';
import { CompoundInfoCard, InfoCardSection } from "~/shared/components/compound-info-card/compound-info-card";
import { VerticalTable } from "~/shared/components/vertical-table/vertical-table";
import { StudentRecord } from '../types';
import { studenRoutes } from '~/student.routes';
import { studentRecords } from '../data';
import { ColumnDef } from '~/shared/components/data-table/types';
import { DevicedetectionService } from '~/core/services/DeviceService/devicedetection-service';
import { Subscription } from 'rxjs';
import { DataTable } from "~/shared/components/data-table/data-table";

@Component({
  selector: 'app-performance',
  imports: [CompoundInfoCard, VerticalTable, DataTable],
  templateUrl: './performance.html',
  styleUrl: './performance.css',
})
export class Performance implements OnInit, OnDestroy {

  readonly deviceService = inject(DevicedetectionService);
  deviceType = signal<'mobile' | 'tablet' | 'desktop'>('desktop');
  private subscription?: Subscription;

  constructor() {
    this.deviceType.set(this.deviceService.getScreenType());
  }

  readonly cardData: InfoCardSection[] = [
    {
      color: 'pastel-blue',
      data: "5",
      label: "Cadeiras Inscritas",
      icon: UserRoundCheckIcon
    },
    {
      color: 'pastel-green',
      data: 'Parcialmente aprovado',
      label: 'Situação',
      icon: ChartNoAxesColumnIncreasingIcon
    },
    {
      color: 'pastel-red',
      data: '3.12',
      label: 'Créditos Estudantis',
      icon: WalletIcon
    }
  ]


  readonly records = signal<StudentRecord[]>(studentRecords);

  recordsColumnDef = signal<ColumnDef<StudentRecord>[]>([]);

  ngOnInit(): void {
    this.recordsColumnDef.set([
      {
        id: 'col-1',
        header: 'Disciplina',
        accessor: 'moduleName'
      },
      {
        id: 'col-2',
        header: '1° Estágio',
        accessor: 'firstGrade',
        cell: (r) => r.firstGrade ? r.firstGrade.value : "----"
      },
      {
        id: 'col-3',
        header: '2° Estágio',
        accessor: 'secondGrade',
        cell: (r) => r.secondGrade ? r.secondGrade.value : "----"
      },
      {
        id: 'col-4',
        header: '3° Estágio',
        accessor: 'thirdGrade',
        cell: (r) => r.thirdGrade ? r.thirdGrade.value : "----"
      },
      {
        id: 'col-5',
        header: 'Reposição',
        accessor: 'replacement',
        cell: (r) => r.replacement ? r.replacement.value : "----"
      },
      {
        id: 'col-6',
        header: 'Final',
        accessor: 'final',
        cell: (r) => r.replacement ? r.replacement.value : "----"
      },
      {
        id: 'col-7',
        header: 'Faltas',
        accessor: 'absenses',
        cell: (r) => r.absenses
      },
      {
        id: 'med-1',
        header: 'Média parcial',
        accessor: 'partialAverage',
        cell: (r) => r.partialAverage
      }
    ]);

    this.subscription = this.deviceService.getScreenTypeChanges()
      .subscribe(type => {
        this.deviceType.set(type);
      });
  }


  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}


