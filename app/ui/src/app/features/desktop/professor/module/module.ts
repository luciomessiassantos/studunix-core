import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionCard } from '~/shared/components/action-card/action-card';
import { ZardTableImports } from '~/shared/components/table';
import { ZardTabGroupComponent, ZardTabComponent } from "~/shared/components/tabs";
import { LucideAngularModule, ArrowLeft, MoonIcon, SunIcon, FoldersIcon, FolderIcon, PlusIcon, GroupIcon, UserPlusIcon } from "lucide-angular";
import { Location } from '@angular/common';
import { ZardButtonComponent } from "~/shared/components/button";
import { ZardAccordionImports } from '~/shared/components/accordion';
import { ZardDialogComponent, ZardDialogService } from '~/shared/components/dialog';

@Component({
  selector: 'app-module',
  imports: [ZardTabGroupComponent, ZardTabComponent, ZardTableImports, LucideAngularModule, ZardButtonComponent,
    ZardAccordionImports, ZardDialogComponent
  ],
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

  private readonly dialogService = inject(ZardDialogService);
  location = inject(Location);
  route = inject(ActivatedRoute);
  moduleId: string | null = null;

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {

      this.moduleId = params.get('id');
      console.log('ID via subscribe:', this.moduleId);
      
    });
  }

  goBack() {
    this.location.back(); // Navigates back one step in history
  }
 
}
