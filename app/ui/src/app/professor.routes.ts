import { Routes } from "@angular/router";
import { HomeProfessor } from "./features/desktop/professor/home/home";
import { Dashboard } from "./features/desktop/professor/dashboard/dashboard";
import { Module } from "./features/desktop/professor/module/module";
import { Index } from "./features/desktop/professor/module/index";
import { Assignments } from "./features/desktop/professor/module/assignments/assignments";
import { Materials } from "./features/desktop/professor/module/materials/materials";
import { Students } from "./features/desktop/professor/module/students/students";
import { AssignmentDetail } from "./features/desktop/professor/module/assignments/assignment-detail/assignment-detail";
import { CreateAssignment } from "./features/desktop/professor/module/create-assignment/create-assignment";
import { StudentDetails } from "./features/desktop/professor/module/student-details/student-details";


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
                        path: 'module/:id',
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
                                        component: Assignments
                                    },
                                    {
                                        path: 'create',
                                        component: CreateAssignment
                                    },
                                    {
                                        path: ':assignmentId',
                                        component: AssignmentDetail
                                    }
                                ]
                            },
                            {
                                path: "materials",
                                component: Materials
                            },
                            {
                                path: 'students',
                                children: [
                                    {
                                        path: '',
                                        component: Students 
                                    },
                                    {
                                        path: ':studentId',
                                        component: StudentDetails 
                                    }
                                ]
                            }
                        ]
                    }
                    
                ]
            },
            
        ]
    }

]