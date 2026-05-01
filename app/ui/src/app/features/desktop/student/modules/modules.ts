import { Component } from '@angular/core';
import { ChannelType } from '../types';
import { ChannelCard } from "~/shared/components/channel-card/channel-card";
import { channels } from '../data';
import { ZardBreadcrumbComponent, ZardBreadcrumbItemComponent } from "~/shared/components/breadcrumb";


@Component({
  selector: 'app-modules',
  imports: [ChannelCard, ZardBreadcrumbComponent, ZardBreadcrumbItemComponent],
  templateUrl: './modules.html',
  styleUrl: './modules.css',
})
export class Modules {

  readonly modules = channels;

    breadCrumbData = [
    {
      label: "Módulos",
      path: '/student/modules/'
    },
    {
      label: "",
      path: '/student/modules/'
    },
  ]
}
