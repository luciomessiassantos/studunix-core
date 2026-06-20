import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { AuthStore } from './auth-store';

export const authGuardGuard: CanActivateChildFn = (route, state) => {
  const auth = inject(AuthStore);
  const router = inject(Router);

  if (!auth.isAuthenticated()) {
    router.navigate(['/login/student']);
    return false;
  }

  return true;
};
