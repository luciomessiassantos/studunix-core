import { Component, OnInit, signal } from '@angular/core';
import { ZardCardComponent } from '~/shared/components/card';
import { WeekSchedule } from '../../../types';



@Component({
  selector: 'app-schedules',
  imports: [ZardCardComponent],
  templateUrl: './schedules.html',
  styleUrl: './schedules.css',
})
export class Schedules implements OnInit {

  readonly schedules: WeekSchedule[] = [
    {
      day: 'Seg',
      dayIndex: 2,
      schedules: [
        {
          id: 'bd-h',
          moduleName: 'Banco de Dados I',
          professor: 'Aislânnia',
          room: 'H08',
          weekDayIndex: 2,
          startTime: { hours: 18, minutes: 50 },
          endTime: { hours: 21, minutes: 50 }
        }
      ]
    },
    {
      day: 'Ter',
      dayIndex: 3,
      schedules: [
        {
          id: 'web-1',
          moduleName: 'Web I',
          professor: 'Matheus',
          room: 'H08',
          weekDayIndex: 3,
          startTime: { hours: 18, minutes: 50 },
          endTime: { hours: 20, minutes: 50 }
        },
        {
          id: 'lab-1',
          moduleName: 'Laboratório de Redes e Computadores',
          professor: 'José Neto',
          room: 'H08',
          weekDayIndex: 3,
          startTime: { hours: 20, minutes: 50 },
          endTime: { hours: 21, minutes: 50 }
        }
      ]
    }
  ] 

  todayDate = signal<Date>(new Date());
  schedule = signal<WeekSchedule | undefined>(undefined)

  ngOnInit(): void {
    // const weekIndex = this.todayDate().getDay();

    const weekIndex = 3;
    this.schedule.set(this.schedules.find(s => s.dayIndex == weekIndex));
  }

}
