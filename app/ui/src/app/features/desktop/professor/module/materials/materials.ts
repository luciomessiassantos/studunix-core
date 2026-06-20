import { Component, inject, OnInit, signal } from '@angular/core';
import { FoldersIcon, GroupIcon, ListFilterIcon, LucideAngularModule, PlusIcon, SearchIcon } from 'lucide-angular';
import { BreadcrumbService } from '~/core/services/Interface/BreadcrumbService/breadcrumb-service';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { ZardSelectImports } from '~/shared/components/select';
import { ZardButtonComponent } from '~/shared/components/button';
import { ZardSkeletonComponent } from "~/shared/components/skeleton";
import getMaterialsByChannelId from '~/features/desktop/student/data';
import { Material } from '~/features/desktop/student/types';
import { MaterialsTree } from "~/features/desktop/student/shared/components/materials-tree/materials-tree";

@Component({
  selector: 'app-materials',
  imports: [LucideAngularModule, RouterLink, ZardSelectImports, ZardButtonComponent, ZardSkeletonComponent, MaterialsTree],
  templateUrl: './materials.html',
  styleUrl: './materials.css',
})
export class Materials implements OnInit {
  folders = FoldersIcon
  search = SearchIcon
  filter = ListFilterIcon
  plus = PlusIcon

  route = inject(ActivatedRoute);
  moduleId: string | null = null;
  loading = signal<boolean>(true);
  materialsData = signal<Material[]>([]);

  breadcrumbService = inject(BreadcrumbService);
  filters = signal<string[]>([]);

  ngOnInit(): void {


    this.route.parent?.paramMap.subscribe(params => {

      this.moduleId = params.get('id');
      console.log('ID via subscribe:', this.moduleId);
      
    });

    this.breadcrumbService.addLastWithMax({ label: "Materiais", path: "materials" }, 3);
    if(this.moduleId) this.materialsData.set(getMaterialsByChannelId(this.moduleId));

    setTimeout(() => {
      this.loading.set(false);
    }, 1000);
  }
}
