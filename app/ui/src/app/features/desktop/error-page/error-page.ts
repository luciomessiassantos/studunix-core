import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ArrowLeft, LucideAngularModule, SearchAlertIcon } from 'lucide-angular';
import { ZardButtonComponent } from '~/shared/components/button';

@Component({
  selector: 'app-error-page',
  imports: [LucideAngularModule, ZardButtonComponent],
  templateUrl: './error-page.html',
  styleUrl: './error-page.css',
})
export class ErrorPage {
  back = ArrowLeft;
  alert = SearchAlertIcon;

  location = inject(Location);


  backPage() {
    this.location.back();
  }
}
