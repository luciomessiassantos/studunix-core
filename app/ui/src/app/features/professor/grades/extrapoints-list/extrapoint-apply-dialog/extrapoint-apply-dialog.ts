import { Component, inject, signal } from '@angular/core';
import { Z_MODAL_DATA } from '~/shared/components/dialog';
import { ZardTableComponent, ZardTableImports } from "~/shared/components/table";
import { CheckCheckIcon, CheckIcon, LucideAngularModule, PlusIcon } from 'lucide-angular';
import { ZardButtonComponent } from "~/shared/components/button";
import { StudentGrades } from '~/features/professor/shared/types.dto';

@Component({
  selector: 'app-extrapoint-apply-dialog',
  imports: [ZardTableImports, LucideAngularModule, ZardButtonComponent],
  templateUrl: './extrapoint-apply-dialog.html',
  styleUrl: './extrapoint-apply-dialog.css',
})
export class ExtrapointApplyDialog {

  plus = PlusIcon;
  check = CheckIcon
  data = inject(Z_MODAL_DATA) as StudentGrades;

  gradeApplied = signal<number | undefined>(undefined);

  apply(grade: number) {
    this.gradeApplied.set(grade);
  }

}
