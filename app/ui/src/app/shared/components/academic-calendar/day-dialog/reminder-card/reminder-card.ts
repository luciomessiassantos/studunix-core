import { DatePipe } from '@angular/common';
import { Component, Input, OnInit, signal } from '@angular/core';
import { colorClassesAlt, Theme } from '~/shared/utils/colorUtils';
import { AcademicReminder } from '~/shared/utils/dateUtils';

@Component({
  selector: 'app-reminder-card',
  imports: [DatePipe],
  templateUrl: './reminder-card.html',
  styleUrl: './reminder-card.css',
})
export class ReminderCard implements OnInit {

  @Input() reminder!: AcademicReminder;

  theme = signal<Theme | undefined>(undefined);

  ngOnInit(): void {
    this.theme.set(colorClassesAlt[this.reminder.color]);
  }

}
