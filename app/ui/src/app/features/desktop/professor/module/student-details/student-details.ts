import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '~/core/services/Interface/BreadcrumbService/breadcrumb-service';
import { StudentProfessor, StudentSemesterRecord } from '../../shared/types';
import { getGradesByStudentId, getStudentDataById } from '../../shared/data-mock';
import { ZardBadgeComponent } from "~/shared/components/badge";
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-student-details',
  imports: [ZardBadgeComponent, DecimalPipe],
  templateUrl: './student-details.html',
  styleUrl: './student-details.css',
})
export class StudentDetails implements OnInit {

  breadcrumbService = inject(BreadcrumbService);
  route = inject(ActivatedRoute);
  studentId: string | null = null;
  studentData = signal<StudentProfessor | undefined>(undefined);
  studentGrades = signal<StudentSemesterRecord | undefined>(undefined);


  initials = computed(() => {
    const d = this.studentData();
    if (!d) return '?';
    return `${d.firstName[0]}${d.lastName[0]}`.toUpperCase();
  });


  convertedGrades = computed(() => {
    const grade = this.studentGrades()?.grades;

    if (!grade) return;

    return [
      { 
        key: 'p1',       
        label: 'P1',   
        value: grade.p1.value ?? null 
      },
      { 
        key: 'p2',       
        label: 'P2',   
        value: grade.p2.value ?? null 
      },
      { 
        key: 'p3',       
        label: 'P3',   
        value: grade.p3.value ?? null 
      },
      { 
        key: 'recovery', 
        label: 'Rec.', 
        value: grade.recovery.value ?? null 
      },
      { 
        key: 'final',    
        label: 'Final',
        value: grade.final.value ?? null 
      },
    ]
  })

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.studentId = params.get("studentId");
      if (this.studentId){
        this.studentData.set(getStudentDataById(this.studentId));
        this.studentGrades.set(getGradesByStudentId(this.studentId));
      }
    })


    
  }

}
