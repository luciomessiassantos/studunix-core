import { Component, Input, OnChanges, signal, SimpleChanges } from '@angular/core';
import { InfoCardSection } from '../compound-info-card';
import { colorClasses, colorClassesAlt, Theme } from '~/shared/utils/colorUtils';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'app-inner-card',
  imports: [LucideAngularModule],
  templateUrl: './inner-card.html',
  styleUrl: './inner-card.css',
})
export class InnerCard implements OnChanges {

  @Input() cardData: InfoCardSection | undefined;
  @Input() lenght: number = 0;
  @Input() isLast = false;


  theme = signal<Theme | undefined>(undefined);
  width = signal<string>("");

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cardData'] && this.cardData) {
      this.theme.set(colorClassesAlt[this.cardData.color]);
    }
  }
}
