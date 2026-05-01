import { Routes } from "@angular/router";
import { authGuardGuard } from "./core/auth/auth-guard-guard";
import { Home } from "./features/desktop/student/home/home";
import { Performance } from "./features/desktop/student/performance/performance";
import { Modules } from "./features/desktop/student/modules/modules";
import { Module } from "./features/desktop/student/modules/module/module";


export const studenRoutes: Routes = [
    {
                path: 'student',
                canActivateChild: [authGuardGuard],
                children: [
                    {
                        path: '',
                        component: Home
                    },
                    {
                        path: 'grades',
                        component: Performance
                    },
                    {
                        path: 'modules',
                        children: [
                            {
                                path: '',
                                component: Modules
                            }, 
                            {
                                path: ':id',
                                component: Module
                            }
                        ]
                    }
                ]
            }
]