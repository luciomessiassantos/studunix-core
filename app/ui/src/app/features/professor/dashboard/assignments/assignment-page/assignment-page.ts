import { DatePipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, filter, map, switchMap, tap } from 'rxjs';
import { AssignmentService } from '~/core/services/AssignmentService/assignment-service';
import { AssignmentProfessor } from '~/features/professor/shared/types.dto';
import { ZardSkeletonComponent } from "~/shared/components/skeleton";
import { CalendarIcon, CheckIcon, ClockIcon, FolderIcon, LucideAngularModule, RotateCcw } from "lucide-angular";
import { ZardBadgeComponent } from '~/shared/components/badge';
import { MarkdownComponent } from 'ngx-markdown'
import { ZardTableComponent, ZardTableHeaderComponent, ZardTableRowComponent, ZardTableHeadComponent, ZardTableBodyComponent, ZardTableCellComponent } from "~/shared/components/table";
import { SubmissionTable } from "../submission-table/submission-table";


@Component({
  selector: 'app-assignment-page',
  imports: [ZardSkeletonComponent, DatePipe, LucideAngularModule, ZardBadgeComponent, MarkdownComponent, ZardTableComponent, ZardTableHeaderComponent, ZardTableRowComponent, ZardTableHeadComponent, ZardTableBodyComponent, ZardTableCellComponent, SubmissionTable],
  templateUrl: './assignment-page.html',
  styleUrl: './assignment-page.css',
})
export class AssignmentPage {

  calendar = CalendarIcon
  ccwRotate = RotateCcw
  clock = ClockIcon
  check = CheckIcon
  folder = FolderIcon

  assignmentId = signal('');

  private activate = inject(ActivatedRoute);
  readonly service = inject(AssignmentService);
  loading = signal(true);
  assignment = signal<AssignmentProfessor | undefined>(undefined)

  constructor() {
    this.activate.params.pipe(
      map(params => params['id']),
      filter(Boolean),
      tap(() => this.loading.set(true)),
      switchMap(id => this.service.getAssignmentById(id))
    ).subscribe(data => {
      this.assignment.set(data);
      console.log(data);
      this.assignmentId.set(data.id);
      
      this.loading.set(false);
    });

    
  }





}
