import { Component, Input } from '@angular/core';
import { StudentProfessor } from '../types';
import { RouterLink } from "@angular/router";
import { ZardBadgeComponent } from "~/shared/components/badge";

@Component({
  selector: 'app-student-professor-card',
  templateUrl: './student-professor-card.html',
  imports: [RouterLink, ZardBadgeComponent],
})
export class StudentProfessorCard {
  @Input() data!: StudentProfessor;

  get initials(): string {
    return `${this.data.firstName[0]}${this.data.lastName[0]}`.toUpperCase();
  }
}
