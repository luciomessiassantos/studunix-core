import { Component, inject, OnInit, signal } from '@angular/core';
import { ZardAccordionImports } from "~/shared/components/accordion";
import { GroupIcon, ListFilterIcon, LucideAngularModule, MoonIcon, PlusIcon, SearchIcon, SunIcon } from "lucide-angular";
import { ZardButtonComponent } from '~/shared/components/button';
import { BreadcrumbService } from '~/core/services/Interface/BreadcrumbService/breadcrumb-service';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { ZardSelectImports } from '~/shared/components/select';
import { AssignmentProfessor } from '../../shared/types';
import { AssignmentCardProfessor } from "~/shared/components/assignment-card-professor/assignment-card-professor";
import { getAssignmentsProfessorByChannelId } from '../../shared/data-mock';

@Component({
  selector: 'app-assignments',
  imports: [ZardAccordionImports, LucideAngularModule, ZardButtonComponent, RouterLink,
    ZardSelectImports, AssignmentCardProfessor],
  templateUrl: './assignments.html',
  styleUrl: './assignments.css',
})
export class Assignments implements OnInit {

  plus = PlusIcon
  group = GroupIcon
  sun = SunIcon
  moon = MoonIcon
  search = SearchIcon
  filter = ListFilterIcon

  filters = signal<string[]>([]);
  breadcrumbService = inject(BreadcrumbService);
  route = inject(ActivatedRoute);
  moduleId: string | null = null;

  assignments = signal<AssignmentProfessor[]>([]);

  ngOnInit(): void {

    this.route.parent?.parent?.paramMap.subscribe(param => {
      this.moduleId = param.get("id")
      console.log(this.moduleId)
      
    });

    if (this.moduleId) {
      this.assignments.set(getAssignmentsProfessorByChannelId(this.moduleId));
    }

    this.breadcrumbService.addLastWithMax({ label: "Tarefas", path: "assignment" }, 3)
  }

}
