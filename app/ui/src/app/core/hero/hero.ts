import { Component, inject } from '@angular/core';
import { GraduationCap, LogIn, LucideAngularModule } from 'lucide-angular';

import { Router } from '@angular/router';
import { ZardButtonComponent } from '~/shared/components/button';

@Component({
  selector: 'app-hero',
  imports: [LucideAngularModule, ZardButtonComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  GraduationCap = GraduationCap;
  login = LogIn

  router = inject(Router);

  redirect() {
    this.router.navigate(["login", "student"]);
  }

}
