import { AfterViewInit, Component, inject, signal, TemplateRef, ViewChild } from '@angular/core';
import { AssignmentService } from '~/core/services/AssignmentService/assignment-service';
import { DataTable } from "~/shared/components/data-table/data-table";
import { AssignmentProfessor } from '../../shared/types.dto';
import { toSignal } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
import { ZardBadgeComponent } from "~/shared/components/badge";
import { CheckIcon, ClockIcon, LucideAngularModule, PlusIcon } from "lucide-angular";
import { ColumnDef } from '~/shared/components/data-table/types';
import { ZardButtonComponent } from "~/shared/components/button";
import { ZardDialogModule, ZardDialogService } from '~/shared/components/dialog';
import { CreateAssignment } from './create-assignment/create-assignment';
import { FormBuilder } from '@angular/forms';
import { ZardFormImports } from '~/shared/components/form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignments',
  imports: [DataTable, ZardBadgeComponent, LucideAngularModule, ZardButtonComponent, ZardDialogModule, ZardFormImports],
  templateUrl: './assignments.html',
  styleUrl: './assignments.css',
})
export class Assignments implements AfterViewInit {

  clock = ClockIcon
  check = CheckIcon
  plus = PlusIcon

  service = inject(AssignmentService);
  private readonly dialogService = inject(ZardDialogService);
  loading = signal(true);
  router = inject(Router);


  redirect(a: AssignmentProfessor) {
    this.router.navigate([`/professor/dashboard/assignments/${a.id}`]);
  }

  assignments = toSignal(
      this.service.getAssignments().pipe(
        tap((data) => {
          this.loading.set(false)
          console.log(data[0]);
          
        })
      ),
      { initialValue: undefined }
    );

    openDialog() {
      this.dialogService.create({
        zContent: CreateAssignment,
        zTitle: 'Criar nova tarefa',
        zHideFooter: true,
        zWidth: '2000px',
        
      })
    }

  @ViewChild('stateTemplate', { static: true })
  stateTemplate!: TemplateRef<any>;

  @ViewChild('submissions', { static: true })
  submissions!: TemplateRef<any>;

  columns = signal<ColumnDef<AssignmentProfessor>[]>([]);

  ngAfterViewInit() {
    this.columns.set([
      {
        id: "c1",
        accessor: 'title',
        header: "Título",
      },
      {
        id: "c2",
        accessor: 'period',
        header: "Período",
      },
      {
        id: "c3",
        accessor: 'submissionsQuantity',
        header: "Submissões",
        template: this.submissions
      },
      {
        id: "c4",
        accessor: 'deadline',
        header: "Data Limite",
        cell: (r) => new Date(r.deadline).toLocaleDateString("pt-BR", {
          day: 'numeric',
          month: 'short',
          hour: 'numeric',
          minute: 'numeric'
        })
      },
      {
        id: "c5",
        accessor: 'created_at',
        header: "Criação",
        cell: (r) => new Date(r.created_at).toLocaleDateString("pt-BR", {
          day: 'numeric',
          month: 'short',
          hour: 'numeric',
          minute: 'numeric'
        })
      },
      {
        id: "c6",
        accessor: 'state',
        header: "Situação",
        template: this.stateTemplate,
      },
    ]);
  }



}
