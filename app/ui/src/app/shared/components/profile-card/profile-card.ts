import { Component, inject, OnInit, signal } from '@angular/core';
import { AuthStore } from '~/core/auth/auth-store';
import { ZardSkeletonComponent } from "../skeleton";

@Component({
  selector: 'app-profile-card',
  imports: [ZardSkeletonComponent],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css',
})
export class ProfileCard implements OnInit {

  readonly auth = inject(AuthStore);

  readonly user = this.auth.user()

  initial = this.user?.username.charAt(0);
  loading = signal(true);

  ngOnInit(): void {
    setTimeout(() => {
      this.loading.set(false);
    }, 3000);
  }

}
