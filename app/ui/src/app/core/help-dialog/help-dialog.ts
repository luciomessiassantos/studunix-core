import { Component, inject } from '@angular/core';
import { Z_MODAL_DATA } from '~/shared/components/dialog';
import { ZardTabGroupComponent, ZardTabComponent } from "~/shared/components/tabs";

@Component({
  selector: 'app-help-dialog',
  imports: [ZardTabGroupComponent, ZardTabComponent],
  templateUrl: './help-dialog.html',
  styleUrl: './help-dialog.css',
})
export class HelpDialog {

  data = inject(Z_MODAL_DATA) as "STUDENT" | "PROFESSOR"[];
  role = this.data[0].toLowerCase();



}
