import { Component, inject } from '@angular/core';
import { Z_MODAL_DATA } from '../../dialog';
import { CalendarDay } from '~/shared/utils/dateUtils';
import { colorClassesAlt } from '~/shared/utils/colorUtils';
import { ReminderCard } from "./reminder-card/reminder-card";
import { ZardInputDirective } from '../../input';
import { ZardButtonComponent } from '../../button';

@Component({
  selector: 'app-day-dialog',
  imports: [ReminderCard, ZardInputDirective, ZardButtonComponent],
  templateUrl: './day-dialog.html',
  styleUrl: './day-dialog.css',
})
export class DayDialog {


  data = inject(Z_MODAL_DATA) as CalendarDay;
  
}
