import { Component, Input } from '@angular/core';
import { ZardCardComponent } from "../card";
import { CircleAlertIcon, LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'app-error-card',
  imports: [ZardCardComponent, LucideAngularModule],
  templateUrl: './error-card.html',
  styleUrl: './error-card.css',
})
export class ErrorCard {
  alert = CircleAlertIcon;

  @Input() message: string = '';
}
