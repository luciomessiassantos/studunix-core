import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbService, BreadcrumbType } from '~/core/services/Interface/BreadcrumbService/breadcrumb-service';
import { ZardBreadcrumbComponent, ZardBreadcrumbItemComponent } from "~/shared/components/breadcrumb";

@Component({
  selector: 'app-modules-layout',
  imports: [ZardBreadcrumbComponent, ZardBreadcrumbItemComponent, RouterOutlet],
  templateUrl: './modules-layout.html',
  styleUrl: './modules-layout.css',
})
export class ModulesLayout implements OnInit {

  readonly breadcrumbService = inject(BreadcrumbService);
  data = signal<BreadcrumbType[]>([]);


  ngOnInit(): void {
    this.breadcrumbService.addBreadcrumbData({ label: "Módulos", path: "/student/modules" })

  }

}
