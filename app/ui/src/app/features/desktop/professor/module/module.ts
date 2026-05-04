import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ZardTableImports } from '~/shared/components/table';
import { LucideAngularModule, ArrowLeft, MoonIcon, SunIcon, FoldersIcon, FolderIcon, PlusIcon, GroupIcon, UserPlusIcon, HouseIcon, NotebookPenIcon, UsersRoundIcon } from "lucide-angular";
import { Location } from '@angular/common';
import { ZardAccordionImports } from '~/shared/components/accordion';
import { ZardDialogService } from '~/shared/components/dialog';
import { ChannelType, AssignmentStudent } from '../../student/types';
import { findChannelById, getAssignmentsByChannelId } from '../../student/data';
import { ZardBreadcrumbImports } from '~/shared/components/breadcrumb/breadcrumb.imports';
import { BreadcrumbService } from '~/core/services/Interface/BreadcrumbService/breadcrumb-service';
import { TabData } from '~/shared/utils/type';
import { InnerTabs } from "~/shared/components/inner-tabs/inner-tabs";

@Component({
  selector: 'app-module',
  imports: [ZardTableImports, LucideAngularModule,
    ZardAccordionImports, ZardBreadcrumbImports, InnerTabs, RouterOutlet],
  templateUrl: './module.html',
  styleUrl: './module.css',
})
export class Module implements OnInit {

  readonly leftArrow = ArrowLeft;
  readonly moon = MoonIcon;
  readonly sun = SunIcon;
  readonly folders = FoldersIcon;
  readonly folder = FolderIcon;
  readonly plus = PlusIcon;
  readonly group = UserPlusIcon;

  location = inject(Location);
  route = inject(ActivatedRoute);
  moduleId: string | null = null;
  data = signal<ChannelType | undefined>(undefined);
  assignments = signal<AssignmentStudent[]>([]);

  breadcrumbService = inject(BreadcrumbService);

  tabs: TabData[] = [];

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {

      this.moduleId = params.get('id');
      console.log('ID via subscribe:', this.moduleId);
      
    });


    if (this.moduleId != null) {
      this.data.set(findChannelById(this.moduleId));
      this.assignments.set(getAssignmentsByChannelId(this.moduleId));

      this.breadcrumbService.setBreadcrumbData([
        {
          label: 'Dashboard',
          path: '/professor/dashboard/'
        },
        {
          label: this.data()?.name ?? "",
          path: `/professor/dashboard/module/${this.moduleId}/index`
        }
      ])

      this.tabs = [
    {
      label: "",
      icon: HouseIcon,
      path: `/professor/dashboard/module/${this.moduleId}/index`
    },
    {
      label: "Tarefas",
      icon: NotebookPenIcon,
      path: `/professor/dashboard/module/${this.moduleId}/assignments`
    },
    {
      label: "Materiais",
      icon: FolderIcon,
      path: `/professor/dashboard/module/${this.moduleId}/materials`
    },
    {
      label: "Alunos",
      icon: UsersRoundIcon,
      path: `/professor/dashboard/module/${this.moduleId}/students`
    }
  ]


    }

  }

  goBack() {
    this.location.back(); 
  }
 
}
