import { Component, inject, OnInit, signal } from '@angular/core';
import getMaterialsByChannelId, { getAssignmentsByChannelId } from '../../../data';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '~/core/services/Interface/BreadcrumbService/breadcrumb-service';
import { AssignmentStudent, Material } from '../../../types';
import { SearchIcon, ListFilterIcon, LucideAngularModule } from 'lucide-angular';
import { MaterialsTree } from "../../../shared/components/materials-tree/materials-tree";
import { ZardSkeletonComponent } from "~/shared/components/skeleton";
import { ZardSelectImports } from '~/shared/components/select';

@Component({
  selector: 'app-materials-page',
  imports: [LucideAngularModule, MaterialsTree, ZardSkeletonComponent, ZardSelectImports],
  templateUrl: './materials-page.html',
  styleUrl: './materials-page.css',
})
export class MaterialsPage implements OnInit {

  readonly search = SearchIcon;
  readonly filter = ListFilterIcon;

  route = inject(ActivatedRoute);
  moduleId: string | null = null;
  materialsData = signal<Material[]>([]);

  filters = signal<string[]>([]);

  loading = signal<boolean>(true);

  readonly breadcrumbService = inject(BreadcrumbService);

  ngOnInit(): void {
      this.route.parent?.paramMap.subscribe(params => {

      this.moduleId = params.get('id');
      console.log('ID via subscribe:', this.moduleId);
      
    });

    this.breadcrumbService.addLastWithMax({ label: "Materiais", path: "materials" }, 3);
    if(this.moduleId) this.materialsData.set(getMaterialsByChannelId(this.moduleId));
    console.log(this.materialsData());
    
    setTimeout(() => {
      this.loading.set(false);
    }, 1000);

  }
}
