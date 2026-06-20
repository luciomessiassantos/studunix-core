import { Component, inject } from '@angular/core';
import { Z_MODAL_DATA } from '../../dialog';
import { AcademicReminder, CalendarDay } from '~/shared/utils/dateUtils';
import { colorClassesAlt, CommomColors } from '~/shared/utils/colorUtils';
import { ReminderCard } from "./reminder-card/reminder-card";
import { ZardInputDirective } from '../../input';
import { ZardButtonComponent } from '../../button';
import { CalendarOffIcon, LucideAngularModule } from 'lucide-angular';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-day-dialog',
  imports: [ReminderCard, ZardInputDirective, ZardButtonComponent,
            LucideAngularModule, DatePipe, TitleCasePipe, FormsModule],
  templateUrl: './day-dialog.html',
})
export class DayDialog {
  data = inject(Z_MODAL_DATA) as CalendarDay;
  calendarOff = CalendarOffIcon;

  form = {
    name: '',
    date: '',
    description: '',
    color: 'pastel-blue' as CommomColors,
  };

  colors: { value: CommomColors; hex: string }[] = [
    { value: 'pastel-blue',   hex: '#378ADD' },
    { value: 'pastel-green',  hex: '#3DB83D' },
    { value: 'pastel-purple', hex: '#7C6BD9' },
    { value: 'pastel-yellow', hex: '#F4A623' },
    { value: 'pastel-red',    hex: '#E45C5C' },
    { value: 'pastel-pink',   hex: '#E45CA0' },
    { value: 'pastel-cyan',   hex: '#20B2AA' },
    { value: 'pastel-peach',  hex: '#FFA07A' },
  ];

  createReminder(): void {
    if (!this.form.name || !this.form.date) return;
    const reminder: AcademicReminder = {
      id: crypto.randomUUID(),
      name: this.form.name,
      description: this.form.description,
      color: this.form.color,
      date: new Date(this.form.date),
      isAcademic: false,
    };
    this.data.reminders.push(reminder);
    this.form = { name: '', date: '', description: '', color: 'pastel-blue' };
  }
}
