import { Component, inject, signal } from '@angular/core';
import { ZardCalendarComponent } from "../calendar";
import { ZardDividerComponent } from "../divider";
import { LucideAngularModule, PlusIcon } from "lucide-angular";
import { toSignal } from '@angular/core/rxjs-interop';
import { RemindersService } from '~/core/services/RemindersService/reminders-service';
import { tap } from 'rxjs';
import { ZardSkeletonComponent } from "../skeleton";
import { Reminder } from "./reminder/reminder";

@Component({
  selector: 'app-reminders-calendar',
  imports: [ZardCalendarComponent, ZardDividerComponent, LucideAngularModule, ZardSkeletonComponent, Reminder],
  templateUrl: './reminders-calendar.html',
  styleUrl: './reminders-calendar.css',
})
export class RemindersCalendar {

  plus = PlusIcon
  selected = signal<Date | Date[]>(new Date());

  service = inject(RemindersService)
  loading = signal(true);

  onChangeDate(date: Date | Date[]) {
    this.selected.set(date);
  }

  reminders = toSignal(
    this.service.getReminders()
    .pipe(tap((data) => {
      this.loading.set(false),
      console.log(data);
      
    })),  
    { initialValue: [] }
  );

}
