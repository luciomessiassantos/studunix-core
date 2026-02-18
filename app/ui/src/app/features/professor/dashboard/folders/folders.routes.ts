// assignments.routes.ts
import { Routes } from '@angular/router';
import { Folders } from './folders';
import { Folder } from './folder/folder';

export const FOLDERS_ROUTES: Routes = [
  {
    path: '',
    component: Folders
  },
  {
    path: ':id',
    component: Folder
  }
];
