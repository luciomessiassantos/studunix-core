import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '~/core/services/Interface/BreadcrumbService/breadcrumb-service';
import { ZardTableImports } from '~/shared/components/table';
import { findChannelById, getAssignmentsByChannelId } from '../../../data';
import { ChannelType } from '../../../types';
import { Location } from '@angular/common';

@Component({
  selector: 'app-index',
  imports: [ZardTableImports],
  templateUrl: './index.html',
  styleUrl: './index.css',
})
export class Index implements OnInit {

  location = inject(Location);
  route = inject(ActivatedRoute);
  moduleId: string | null = null;
  data = signal<ChannelType | undefined>(undefined);

  readonly breadcrumbService = inject(BreadcrumbService);


  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {

      this.moduleId = params.get('id');
      console.log('ID via subscribe:', this.moduleId);
      
    });

    if (this.moduleId != null) {

      this.data.set(findChannelById(this.moduleId));
      
    }

    if (this.breadcrumbService.breadcrumbData().length >= 3) this.breadcrumbService.removeLast();
    
  }

}
