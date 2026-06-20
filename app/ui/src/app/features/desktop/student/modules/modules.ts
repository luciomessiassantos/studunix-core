import { Component, inject, OnInit } from '@angular/core';
import { ChannelType } from '../types';
import { ChannelCard } from "~/shared/components/channel-card/channel-card";
import { channels } from '../data';
import { ZardBreadcrumbComponent, ZardBreadcrumbItemComponent } from "~/shared/components/breadcrumb";
import { BreadcrumbService } from '~/core/services/Interface/BreadcrumbService/breadcrumb-service';


@Component({
  selector: 'app-modules',
  imports: [ChannelCard],
  templateUrl: './modules.html',
  styleUrl: './modules.css',
})
export class Modules implements OnInit {

  readonly modules = channels;

  readonly breadcrumbService = inject(BreadcrumbService);

  ngOnInit(): void {
    this.breadcrumbService.clean();
    this.breadcrumbService.addBreadcrumbData({ label: "Módulos", path: "/student/modules"})
    this.breadcrumbService.addBreadcrumbData({ label: "", path: "" })
  }
}
