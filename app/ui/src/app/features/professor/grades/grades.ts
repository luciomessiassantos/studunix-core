import { Component, inject, OnInit, signal, TemplateRef, ViewChild } from '@angular/core';
import { ZardTableComponent, ZardTableHeaderComponent, ZardTableRowComponent, ZardTableHeadComponent, ZardTableBodyComponent, ZardTableCellComponent } from "~/shared/components/table";
import { ZardTabComponent, ZardTabGroupComponent } from "~/shared/components/tabs";
import { ZardCardComponent } from "~/shared/components/card";
import { ZardBadgeComponent } from "~/shared/components/badge";
import { ZardButtonComponent } from "~/shared/components/button";
import { ZardDialogService } from '~/shared/components/dialog';
import { ExtrapointApplyDialog } from './extrapoints-list/extrapoint-apply-dialog/extrapoint-apply-dialog';
import { StudentGrades } from '../shared/types.dto';

import { ZardCheckboxComponent } from "~/shared/components/checkbox";
import { ColumnDef } from '~/shared/components/data-table/types';
import { StudentGradesService } from '~/core/services/StudentsGradesService/student-grades-service';
import { StudentDetailsService } from '~/core/services/StudentsDetailsService/student-details-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
import { StudentProfessor } from '../shared/types';
import { DataTable } from "~/shared/components/data-table/data-table";
import { FormsModule } from '@angular/forms';
import { SquarePenIcon, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-grades',
  imports: [ZardTableComponent, ZardTableHeaderComponent, ZardTableRowComponent, ZardTableHeadComponent, ZardTableBodyComponent, ZardTableCellComponent, ZardTabComponent, ZardTabGroupComponent, ZardCardComponent, ZardBadgeComponent, ZardButtonComponent, ZardCheckboxComponent, DataTable, FormsModule, LucideAngularModule],
  templateUrl: './grades.html',
  styleUrl: './grades.css',
})
export class Grades implements OnInit {

  edit = SquarePenIcon;

  dialog = inject(ZardDialogService);
  studentService = inject(StudentDetailsService);

  selected: StudentProfessor | null = null;

  onCheck(i: StudentProfessor) {
    console.log(i);
    this.selected = i;
  }

  studentsData = toSignal(
    this.studentService.getStudents()
    .pipe(
      tap((d) => console.log(d))
    )
  )

  @ViewChild('checkBox', { static: true })
  checkboxTemplate!: TemplateRef<any>

  onApply(data: string) {
    this.dialog.create({
      zTitle: "Confirmar aplicação",
      zContent: ExtrapointApplyDialog,
      zData: {
        id: 'tester-01',
        recordId: 'rec-04',
        p1: 9.0,
        p2: 8.5,
        p3: 9.5,
       } as StudentGrades,
      zOkText: 'Aplicar pontuação',
      zCancelText: 'Cancelar',
      zClosable: false,
      zCustomClasses: 'professor'
    });
  }

  readonly studentColumns = signal<ColumnDef<StudentProfessor>[]>([])

  ngOnInit(): void {
    this.studentColumns.set([
      {
        id: 'select',
        header: '#',
        template: this.checkboxTemplate
      },
      {
        id: 'c1',
        accessor: 'firstName',
        header: 'Nome',
        cell: (row) => row.firstName + ' ' + row.lastName
      },
      {
        id: 'c2',
        accessor: 'period',
        header: 'Período',
        cell: (row) => row.period.year + '.' + row.period.semester
      }
    ])
  }

}

