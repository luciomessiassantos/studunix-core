import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { ChevronLeftIcon, ChevronRightIcon, LucideAngularModule } from 'lucide-angular';
import dateUtils, { AcademicReminder, CalendarDay, GenerateCalendar } from '~/shared/utils/dateUtils';
import { generateCalendarDays } from '../calendar';
import { DayCard } from "./day-card/day-card";
import { ZardButtonComponent } from '../button';
import { TitleCasePipe } from '@angular/common';
import { academicReminders } from '~/shared/utils/common-data';
import { ZardDialogService } from '../dialog';
import { DayDialog } from './day-dialog/day-dialog';

@Component({
  selector: 'app-academic-calendar',
  imports: [LucideAngularModule, DayCard, ZardButtonComponent, TitleCasePipe],
  templateUrl: './academic-calendar.html',
  styleUrl: './academic-calendar.css',
})
export class AcademicCalendar implements OnInit {

  
  left = ChevronLeftIcon;
  right = ChevronRightIcon;
  days = signal<CalendarDay[]>([]);
  month = signal<number>(new Date().getMonth());
  year = signal<number>(new Date().getFullYear());

  ngOnInit(): void {
    this.loadDays();
  }

  weekdays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

legend = [
  { label: 'Avaliação', color: '#378ADD' },
  { label: 'Entrega', color: '#BA7517' },
  { label: 'Acadêmico', color: '#639922' },
  { label: 'Aula', color: '#7F77DD' },
  { label: 'Feriado', color: '#E24B4A' },
];

goToToday(): void {
  this.month.set(new Date().getMonth());
  this.year.set(new Date().getFullYear());
  this.loadDays();
}

  loadDays(): void {
    // Cria uma data com o mês atual (o ano pode mudar automaticamente)
    const date = new Date();
    date.setMonth(this.month()); 
    this.year.set(date.getFullYear());
    this.month.set(date.getMonth()); 

    const days = GenerateCalendar(this.month(), academicReminders); 
    console.log('Generated days:', days.length, days);
    this.days.set(days);

  }

  increaseMonth(): void {
    this.month.update(m => m + 1);
    this.loadDays();
  }

  decreaseMonth(): void {
    this.month.update(m => m - 1);
    this.loadDays();
  }

  get monthName(): string {
    return new Date(this.year(), this.month(), 1).toLocaleString('pt-BR', { month: 'long' });
  }

  trackByDate(index: number, day: CalendarDay): string {
    return day.date.toISOString();
  }

}
