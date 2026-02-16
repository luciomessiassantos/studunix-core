import { Component, inject } from '@angular/core';
import { GraduationCap, LucideAngularModule } from 'lucide-angular';

import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [LucideAngularModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  GraduationCap = GraduationCap;
  router = inject(Router);

  redirect() {
    this.router.navigate(["login", "student"]);
  }

}
