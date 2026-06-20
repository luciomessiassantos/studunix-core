import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AssignmentProfessor } from '~/features/desktop/professor/shared/types';
import { ZardBadgeComponent } from '../badge';

@Component({
  selector: 'app-assignment-card-professor',
  imports: [ZardBadgeComponent, RouterLink],
  templateUrl: './assignment-card-professor.html',
})
export class AssignmentCardProfessor implements OnInit {
  @Input() data: AssignmentProfessor | undefined;
  @Input() routePrefix: string = '';

  createdDate  = '';
  deadlineDate = '';

  ngOnInit(): void {
    if (!this.data) return;
    const opts: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', weekday: 'long' };
    this.createdDate  = this.data.created_at.toLocaleDateString('pt-BR', opts);
    this.deadlineDate = this.data.deadline.toLocaleDateString('pt-BR', opts);
  }

}