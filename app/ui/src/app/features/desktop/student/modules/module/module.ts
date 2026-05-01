import { Location } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArrowLeft, ListFilterIcon, LucideAngularModule, SearchIcon } from 'lucide-angular';
import { ZardTableImports } from '~/shared/components/table';
import { ZardTabGroupComponent, ZardTabComponent } from "~/shared/components/tabs";
import { AssignmentStudent, ChannelType } from '../../types';
import { findChannelById, getAssignmentsByChannelId } from '../../data';
import { AssignmentCard } from "../../shared/components/assignment-card/assignment-card";
import { ZardBreadcrumbComponent, ZardBreadcrumbItemComponent } from "~/shared/components/breadcrumb";

@Component({
  selector: 'app-module',
  imports: [ZardTabGroupComponent, LucideAngularModule, ZardTabComponent, ZardTableImports, AssignmentCard, ZardBreadcrumbComponent, ZardBreadcrumbItemComponent],
  templateUrl: './module.html',
  styleUrl: './module.css',
})
export class Module {

  readonly leftArrow = ArrowLeft;
  readonly search = SearchIcon;
  readonly filter = ListFilterIcon;

  location = inject(Location);
  route = inject(ActivatedRoute);
  moduleId: string | null = null;
  data = signal<ChannelType | undefined>(undefined);
  assignments = signal<AssignmentStudent[]>([]);

  breadCrumbData = [
    {
      label: "Módulos",
      path: '/student/modules/'
    },
  ]


  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {

      this.moduleId = params.get('id');
      console.log('ID via subscribe:', this.moduleId);
      
    });

    if (this.moduleId != null) {

      this.data.set(findChannelById(this.moduleId));
      this.assignments.set(getAssignmentsByChannelId(this.moduleId));
      
    }

    if (this.data()) this.breadCrumbData.push({
      label: this.data()?.name ?? "",
      path: ''
  })
  }

  addAssignmentsPath() {
      this.breadCrumbData.push({
        label: 'tarefas',
        path: ''
      });
  }

  addMaterialsPath() {
      this.breadCrumbData.push({
        label: 'materiais',
        path: ''
    });
  }

  goBack() {
    this.location.back(); 
  }

}
