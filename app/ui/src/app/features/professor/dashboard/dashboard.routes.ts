// dashboard.routes.ts
import { Routes } from '@angular/router';
import { Dashboard } from './dashboard';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: Dashboard,
    children: [
      {
        path: 'assignments',
        loadChildren: () =>
          import('./assignments/assignments.routes')
            .then(m => m.ASSIGNMENTS_ROUTES)
      },
      {
        path: 'folders',
        loadChildren: () =>
          import('./folders/folders.routes')
            .then(m => m.FOLDERS_ROUTES)
      }
    ]
  }
];
