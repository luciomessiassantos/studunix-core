import { Routes } from "@angular/router";
import { HomeProfessor } from "./features/desktop/professor/home/home";
import { Dashboard } from "./features/desktop/professor/dashboard/dashboard";
import { Module } from "./features/desktop/professor/module/module";


export const professorRoutes: Routes = [
    {
        path: 'professor',
        children: [
            {
                path: '',
                component: HomeProfessor
            },
            {
                path: 'dashboard',
                children: [
                    {
                        path: '',
                        component: Dashboard
                    },
                    {
                        path: 'module',
                        children: [
                            {
                                path: ':id',
                                component: Module
                            }
                        ]
                    }
                    
                ]
            },
            
        ]
    }

]