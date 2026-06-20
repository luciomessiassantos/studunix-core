import { Routes } from '@angular/router';
import { Hero } from './core/hero/hero';
import { Login } from './core/login/login';
import { Student } from './core/login/student/student';
import { Professor } from './core/login/professor/professor';
import { Layout } from './core/layout/layout';
import { ErrorPage } from './features/desktop/error-page/error-page';
import { authGuardGuard } from './core/auth/auth-guard-guard';
import { Details } from './core/details/details';
import { studenRoutes } from './student.routes';
import { professorRoutes } from './professor.routes';

export const routes: Routes = [
    {
        path: '',
        component: Hero
    },
    {
        path: 'details',
        component: Details
    },
    {
        path: 'login',
        component: Login,
        children: [
            {
                path: 'student',
                component: Student
            },
            {
                path: 'professor',
                component: Professor
            }
        ]
    },
    {
        path: '',
        component: Layout,
        canActivateChild: [authGuardGuard],
        children: [
            ...studenRoutes,
            ...professorRoutes
        ]
    },
    {
        path: '**',
        component: ErrorPage
    },
];
