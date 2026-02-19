import { AfterViewInit, Component, inject, input, Input, OnChanges, signal, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { SubmissionService } from '~/core/services/submission-service/submission-service';
import { Submission } from '~/features/professor/shared/types.dto';
import { ColumnDef } from '~/shared/components/data-table/types';
import { DataTable } from "~/shared/components/data-table/data-table";
import { switchMap, tap } from 'rxjs';
import { CheckIcon, ClockIcon, XIcon, LucideAngularModule } from 'lucide-angular';
import { ZardBadgeComponent } from "~/shared/components/badge";

@Component({
  selector: 'app-submission-table',
  imports: [DataTable, ZardBadgeComponent, LucideAngularModule],
  templateUrl: './submission-table.html',
  styleUrl: './submission-table.css',
})
export class SubmissionTable implements OnChanges, AfterViewInit {


  clock = ClockIcon
  check = CheckIcon
  xmark = XIcon

  @ViewChild('submissionState', {static: true})
  statusTemplate!: TemplateRef<any>

  service = inject(SubmissionService);

  @Input() assignmentId!: string;

  submissions = signal<Submission[]>([]);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['assignmentId'] && this.assignmentId) {
      console.log(this.assignmentId);
      this.service
  .getSubmissionsByAssignmentId(this.assignmentId)
  .subscribe(v => {
    console.log('retorno service:', v);
    this.submissions.set(v);
  });
    }
  }


  submissionColumnDef = signal<ColumnDef<Submission>[]>([])

  ngAfterViewInit(): void {
    this.submissionColumnDef.set([
    {
      id: 'c1',
      accessor: 'student',
      header: 'Estudante',
      cell: (r) => r.student.firstName + ' ' + r.student.lastName 
    },
    {
      id: 'c2',
      accessor: 'sendAt',
      header: 'Envio',
      cell: (r) => new Date(r.sendAt).toLocaleDateString("pt-BR", {
        day: 'numeric', month: 'short', hour: 'numeric', minute: 'numeric'
      })
    },
    {
      id: 'c3',
      accessor: 'status',
      header: 'Estado',
      template: this.statusTemplate
    }
  ])
  }


}
