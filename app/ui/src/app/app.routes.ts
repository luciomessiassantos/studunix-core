import { Routes } from '@angular/router';
import { Hero } from './core/hero/hero';
import { Login } from './core/login/login';
import { Student } from './core/login/student/student';
import { Professor } from './core/login/professor/professor';
import { Layout } from './core/layout/layout';
import { HomeProfessor } from './features/professor/home/home';
import { Dashboard } from './features/professor/dashboard/dashboard';
import { Grades } from './features/professor/grades/grades';
import { ErrorPage } from './features/error-page/error-page';
import { authGuardGuard } from './core/auth/auth-guard-guard';

export const routes: Routes = [
    {
        path: 'studunix',
        component: Hero
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
            {
                path: 'professor',
                children: [
                    {
                        path: "",
                        component: HomeProfessor
                    },
                    {
                    path: 'dashboard',
                    loadChildren: () =>
                        import('../app/features/professor/dashboard/dashboard.routes')
                        .then(m => m.DASHBOARD_ROUTES)
                    },
                    {
                        path: "students",
                        component: Grades
                    }
                ]
            }
        ]
    },
    {
        path: '**',
        component: ErrorPage
    },
];
