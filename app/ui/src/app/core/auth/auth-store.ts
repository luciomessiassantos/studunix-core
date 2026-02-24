import { computed, Injectable, signal } from '@angular/core';
import { User } from '../types';

@Injectable({
  providedIn: 'root',
})
export class AuthStore {

  private readonly _user = signal<User | undefined>(
    this.loadUserFromStorage()
  );

  readonly user = this._user.asReadonly();

  readonly isAuthenticated = computed(() => !!this._user())

  readonly LastLogin = signal<Date>(new Date());


private loadUserFromStorage() {
  const stored = localStorage.getItem('user');
  if (!stored) return;

  try {
    const parsed = JSON.parse(stored) as User;
    return parsed;
  } catch {
    localStorage.removeItem('user');
  }

  return undefined;
}

  login(data: User) {
    this._user.set(data);
    localStorage.setItem('user', JSON.stringify(this._user()));
    this.LastLogin.set(new Date());
  }

  logout() {
    this._user.set(undefined);
    localStorage.removeItem('user');
  }

}
