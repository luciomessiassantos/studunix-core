import { Component } from '@angular/core';
import { LucideAngularModule, SquarePenIcon } from 'lucide-angular';
import { ZardButtonComponent } from '~/shared/components/button';
import { ZardTableImports } from '~/shared/components/table';

@Component({
  selector: 'app-grades-table',
  imports: [LucideAngularModule, ZardTableImports, ZardButtonComponent],
  templateUrl: './grades-table.html',
  styleUrl: './grades-table.css',
})
export class GradesTable {

  edit = SquarePenIcon;


  
}
