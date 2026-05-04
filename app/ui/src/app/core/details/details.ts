import { Component, computed, inject, OnInit, Signal, signal } from '@angular/core';
import { AuthStore } from '../auth/auth-store';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProfessorDetailsDto, StudentDetailsDto, User, UserDetailsDto } from '../types';
import { UserDetailsService } from '../services/UserDetailsService/user-details-service';
import { ChevronLeftIcon, ImageIcon, LucideAngularModule } from 'lucide-angular';
import { ZardButtonComponent } from "~/shared/components/button";
import { DatePipe, Location } from '@angular/common';
import { ZardBadgeComponent } from "~/shared/components/badge";


@Component({
  selector: 'app-details',
  imports: [LucideAngularModule, ZardButtonComponent, DatePipe, ZardBadgeComponent],
  templateUrl: './details.html',
})
export class Details {
  image = ImageIcon;
  chevronLeft = ChevronLeftIcon;

  private readonly route = inject(ActivatedRoute);
  private readonly location = inject(Location);
  private readonly auth = inject(AuthStore);
  private readonly service = inject(UserDetailsService);

  type = toSignal(this.route.queryParamMap,
    { initialValue: this.route.snapshot.queryParamMap });

  readonly userType = computed(() =>
    this.type().get('type') as 'STUDENT' | 'PROFESSOR'
  );

  user = signal<User | undefined>(this.auth.user());
  lastLoginData = signal<Date>(this.auth.LastLogin());

  userDetails = toSignal(
  this.service.getUserDetails(this.user()?.id!, this.userType())
) as Signal<UserDetailsDto | undefined>;

studentDetails = computed(() =>
  this.userType() === 'STUDENT'
    ? this.userDetails() as StudentDetailsDto
    : undefined
);

professorDetails = computed(() =>
  this.userType() === 'PROFESSOR'
    ? this.userDetails() as ProfessorDetailsDto
    : undefined
);

initials = computed(() => {
  const d = this.userDetails();
  if (!d) return '?';
  return `${d.firstName[0]}${d.lastName[0]}`.toUpperCase();
});

  back(): void { this.location.back(); }
}