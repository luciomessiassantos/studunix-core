import { Component, inject, OnInit, signal } from '@angular/core';
import { ListFilterIcon, LucideAngularModule, SearchIcon } from "lucide-angular";
import { AssignmentCard } from "../../../shared/components/assignment-card/assignment-card";
import { BreadcrumbService } from '~/core/services/Interface/BreadcrumbService/breadcrumb-service';
import { findChannelById, getAssignmentsByChannelId } from '../../../data';
import { AssignmentStudent } from '../../../types';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ZardSkeletonComponent } from "~/shared/components/skeleton";
import { ZardSelectImports } from '~/shared/components/select';

@Component({
  selector: 'app-assignments-page',
  imports: [LucideAngularModule, AssignmentCard, ZardSelectImports, ZardSkeletonComponent],
  templateUrl: './assignments-page.html',
  styleUrl: './assignments-page.css',
})
export class AssignmentsPage implements OnInit {

  readonly search = SearchIcon;
  readonly filter = ListFilterIcon;

  route = inject(ActivatedRoute);

  moduleId: string | null = null;

  assignments = signal<AssignmentStudent[]>([]);

  filters = signal<string[]>([]);

  readonly breadcrumbService = inject(BreadcrumbService);

  loading = signal<boolean>(true);

  ngOnInit(): void {

      this.route.parent?.parent?.paramMap.subscribe(params => {

      this.moduleId = params.get('id');
      console.log('ID via subscribe:', this.moduleId);
      
    });

    if (this.moduleId != null) {
      this.assignments.set(getAssignmentsByChannelId(this.moduleId));
    }

    this.breadcrumbService.addLastWithMax({ label: "Tarefas", path: `/student/modules/${this.moduleId}/assignments` }, 3);

    setTimeout(() => {
      this.loading.set(false);
    }, 1000);

  }


}
