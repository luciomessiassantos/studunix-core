import { Component } from '@angular/core';
import { LockIcon, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-notification',
  imports: [LucideAngularModule],
  templateUrl: './notification.html',
  styleUrl: './notification.css',
})
export class Notification {

  lock = LockIcon

}
