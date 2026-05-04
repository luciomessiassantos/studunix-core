import { Location } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ArrowLeft, FolderIcon, HouseIcon, ListFilterIcon, LucideAngularModule, NotebookPenIcon, SearchIcon } from 'lucide-angular';
import { ZardTableImports } from '~/shared/components/table';
import { ZardTabGroupComponent, ZardTabComponent } from "~/shared/components/tabs";
import { AssignmentStudent, ChannelType } from '../../types';
import { findChannelById, getAssignmentsByChannelId } from '../../data';
import { AssignmentCard } from "../../shared/components/assignment-card/assignment-card";
import { ZardBreadcrumbComponent, ZardBreadcrumbItemComponent } from "~/shared/components/breadcrumb";
import { BreadcrumbService } from '~/core/services/Interface/BreadcrumbService/breadcrumb-service';
import { TabData } from '~/shared/utils/type';
import { InnerTabs } from "~/shared/components/inner-tabs/inner-tabs";


@Component({
  selector: 'app-module',
  imports: [LucideAngularModule, ZardTableImports, AssignmentCard, ZardBreadcrumbComponent, ZardBreadcrumbItemComponent, RouterOutlet, InnerTabs],
  templateUrl: './module.html',
  styleUrl: './module.css',
})
export class Module {

  readonly leftArrow = ArrowLeft;

  location = inject(Location);
  route = inject(ActivatedRoute);
  moduleId: string | null = null;
  data = signal<ChannelType | undefined>(undefined);

  readonly breadcrumbService = inject(BreadcrumbService);

  tabs: TabData[] = []

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {

      this.moduleId = params.get('id');
      console.log('ID via subscribe:', this.moduleId);
      
    });

    if (this.moduleId != null) {

      this.data.set(findChannelById(this.moduleId));
      
    }

    if (this.data()) {
      console.log(this.data()?.name);
      
    this.breadcrumbService.setBreadcrumbData(
      [
        {
          label: "Módulos",
          path: '/student/modules'
        },
        {
          label: this.data()?.name ?? "",
          path: `${this.moduleId}/index`
        }
      ]
    );

    }

    this.tabs = [
      {
        label: '#',
        path: `/student/modules/${this.moduleId}/index`,
        icon: HouseIcon
      },
      {
        label: "Tarefas",
        path: `/student/modules/${this.moduleId}/assignments`,
        icon: NotebookPenIcon
      },
      {
        label: "Materiais",
        path: `/student/modules/${this.moduleId}/materials`,
        icon: FolderIcon
      }
    ]
  }

}
