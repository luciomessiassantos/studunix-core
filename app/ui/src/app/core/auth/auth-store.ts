import { computed, Injectable, signal } from '@angular/core';
import { User } from '../types';

@Injectable({
  providedIn: 'root',
})
export class AuthStore {

  private readonly _user = signal<User | undefined>(undefined);

  readonly user = this._user.asReadonly();

  readonly isAuthenticated = computed(() => !!this._user())

  login(data: User) {
    this._user.set(data);
  }

  logout() {
    this._user.set(undefined);
  }

}
