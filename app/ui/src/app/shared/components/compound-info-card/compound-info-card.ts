import { Component, Input } from '@angular/core';
import { LucideIconData, LucideAngularModule } from 'lucide-angular';
import { ZardCardComponent } from "../card";
import { CommomColors } from '~/shared/utils/colorUtils';
import { InnerCard } from "./inner-card/inner-card";

export type InfoCardSection = {
  label: string
  data: string
  icon: LucideIconData
  color: CommomColors
}

@Component({
  selector: 'app-compound-info-card',
  imports: [ZardCardComponent, LucideAngularModule, InnerCard],
  templateUrl: './compound-info-card.html',
  styleUrl: './compound-info-card.css',
})
export class CompoundInfoCard {

  @Input() data: InfoCardSection[] = [];



}
