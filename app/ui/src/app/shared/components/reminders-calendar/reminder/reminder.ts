import { Component, Input, OnChanges, signal, SimpleChanges } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ReminderDto } from '~/core/types';
import { colorClassesAlt, Theme } from '~/shared/utils/colorUtils';

@Component({
  selector: 'app-reminder',
  imports: [],
  templateUrl: './reminder.html',
  styleUrl: './reminder.css',
})
export class Reminder implements OnChanges{

  @Input() data!: ReminderDto;

  
  theme = signal<Theme | undefined>(undefined);

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && this.data) {
      this.theme.set(colorClassesAlt[this.data.color]);
    }
  }

}
