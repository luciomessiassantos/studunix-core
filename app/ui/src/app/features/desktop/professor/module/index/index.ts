import { Component, inject, OnInit } from '@angular/core';
import { BreadcrumbService } from '~/core/services/Interface/BreadcrumbService/breadcrumb-service';
import { ZardTableImports } from '~/shared/components/table';

@Component({
  selector: 'app-index',
  imports: [ZardTableImports],
  templateUrl: './index.html',
  styleUrl: './index.css',
})
export class Index implements OnInit {

  breadcrumbService = inject(BreadcrumbService);
  

  ngOnInit(): void {
    if (this.breadcrumbService.breadcrumbData().length > 2) this.breadcrumbService.removeLast();
  }

}
