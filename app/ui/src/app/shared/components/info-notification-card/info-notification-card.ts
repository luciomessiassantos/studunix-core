import { Component, Input, OnChanges, signal, SimpleChanges } from '@angular/core';
import { NotificationInlineCard } from '~/shared/utils/type';
import { ZardCardComponent } from "../card";
import { colorClassesAlt, Theme } from '~/shared/utils/colorUtils';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'app-info-notification-card',
  imports: [ZardCardComponent, LucideAngularModule],
  templateUrl: './info-notification-card.html',
  styleUrl: './info-notification-card.css',
})
export class InfoNotificationCard implements OnChanges {

  @Input() data: NotificationInlineCard | undefined;
  
  theme = signal<Theme | undefined>(undefined);

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && this.data) {
      this.theme.set(colorClassesAlt[this.data.color]);
    }
  }

}
