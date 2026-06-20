import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { AcademicReminder, CalendarDay } from '~/shared/utils/dateUtils';
import { ZardDialogService } from '../../dialog';
import { DayDialog } from '../day-dialog/day-dialog';
import { colorClassesAlt, CommomColors } from '~/shared/utils/colorUtils';

@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.html',
  styleUrl: './day-card.css',
  imports: []
})
export class DayCard {
  @Input() data: CalendarDay | undefined;
  @Input() index: number = 0;

  dayDialog = inject(ZardDialogService);

  today = new Date();

  get isOtherMonth(): boolean {
    const today = new Date();
    return this.data?.date.getMonth() !== today.getMonth();
  }
  
  get isLastColumn(): boolean {
    return (this.index + 1) % 7 === 0;
  }

  getTheme(c: CommomColors) {
    return colorClassesAlt[c];
  }

  OnDayClick(d?: CalendarDay) {
    this.dayDialog.create({
      zContent: DayDialog,
      zData: d,
      zHideFooter: true,
      zWidth: '1500px',
      zCustomClasses: 'md:min-w-200 min-w-90 '
    });
  }

  get row(): number {
    return Math.floor(this.index / 7);
  }

  get col(): number {
    return this.index % 7;
  }
  
}
