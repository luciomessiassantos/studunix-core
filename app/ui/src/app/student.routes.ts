import { Routes } from "@angular/router";
import { authGuardGuard } from "./core/auth/auth-guard-guard";
import { Home } from "./features/desktop/student/home/home";
import { Performance } from "./features/desktop/student/performance/performance";
import { Modules } from "./features/desktop/student/modules/modules";
import { AssignmentPage } from "./features/desktop/student/modules/module/assignments-page/assignment-page/assignment-page";
import { ModulesLayout } from "./features/desktop/student/modules-layout/modules-layout";
import { AssignmentsPage } from "./features/desktop/student/modules/module/assignments-page/assignments-page";
import { MaterialsPage } from "./features/desktop/student/modules/module/materials-page/materials-page";
import { Index } from "./features/desktop/student/modules/module/index";
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
                        component: ModulesLayout,
                        children: [
                            {
                                path: '',
                                component: Modules
                            }, 
                            {
                                path: ':id',
                                component: Module,
                                children: [
                                    {
                                        path: 'index',
                                        component: Index
                                    },
                                    {
                                        path: 'assignments',
                                        
                                        children: [
                                            {
                                                path: '',
                                                component: AssignmentsPage,
                                            },
                                            {
                                                path: ':assignmentId',
                                                component: AssignmentPage
                                            }
                                        ]
                                    },

                                    {
                                        path: 'materials',
                                        component: MaterialsPage
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
]