import { Component, inject } from '@angular/core';
import { AuthStore } from '../auth/auth-store';

@Component({
  selector: 'app-layout',
  imports: [],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

  readonly auth = inject(AuthStore);

}
