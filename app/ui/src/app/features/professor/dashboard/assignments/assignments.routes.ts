// assignments.routes.ts
import { Routes } from '@angular/router';
import { Assignments } from './assignments';
import { AssignmentPage } from './assignment-page/assignment-page';

export const ASSIGNMENTS_ROUTES: Routes = [
  {
    path: '',
    component: Assignments
  },
  {
    path: ':id',
    component: AssignmentPage
  }
];
