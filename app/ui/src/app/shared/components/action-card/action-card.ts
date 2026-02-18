import { Component, Input } from '@angular/core';
import { ZardCardComponent } from '../card';
import { LucideIconData, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-action-card',
  imports: [ZardCardComponent, LucideAngularModule],
  templateUrl: './action-card.html',
  styleUrl: './action-card.css',
})
export class ActionCard {

  @Input() label: string | undefined;
  @Input() details: string | undefined;

  @Input() action: () => void = () => { }
  @Input() icon: LucideIconData | undefined;

  @Input() lenght = 1;

}
