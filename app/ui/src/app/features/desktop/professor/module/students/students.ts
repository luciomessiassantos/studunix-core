import { Component, inject, OnInit, signal } from '@angular/core';
import { BreadcrumbService } from '~/core/services/Interface/BreadcrumbService/breadcrumb-service';
import { StudentProfessor } from '../../shared/types';
import { students } from '../../shared/data-mock';
import { ZardSelectImports } from '~/shared/components/select';
import { ListFilterIcon, SearchIcon, LucideAngularModule } from 'lucide-angular';
import { StudentProfessorCard } from "../../shared/student-professor-card/student-professor-card";

@Component({
  selector: 'app-students',
  imports: [ZardSelectImports, LucideAngularModule, StudentProfessorCard],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students implements OnInit {

  search = SearchIcon
  filter = ListFilterIcon;
  filters = signal<string[]>([])

  breadcrumbService = inject(BreadcrumbService);
  
  studentsData = signal<StudentProfessor[]>([])

  ngOnInit(): void {
    this.breadcrumbService.addLastWithMax({ label: "Alunos", path: "students" }, 3);
    this.studentsData.set(students);
    
  }



}
