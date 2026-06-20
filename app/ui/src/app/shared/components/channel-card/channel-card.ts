import { Component, Input, OnInit } from '@angular/core';
import { EllipsisVerticalIcon, InfoIcon, LucideAngularModule, LucideIconData } from 'lucide-angular';
import { ChannelType } from '~/features/desktop/student/types';
import { colorClassesAlt, Theme } from '~/shared/utils/colorUtils'
import { getAcademicIcon } from '~/shared/utils/iconUtils'
import { ZardButtonComponent } from "../button";
import { ZardDropdownDirective, ZardDropdownMenuContentComponent, ZardDropdownMenuItemComponent } from "../dropdown";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-channel-card',
  imports: [LucideAngularModule, ZardDropdownMenuContentComponent, ZardDropdownDirective, ZardDropdownMenuItemComponent, RouterLink],
  templateUrl: './channel-card.html',
  styleUrl: './channel-card.css',
})
export class ChannelCard implements OnInit {

  readonly ellipses = EllipsisVerticalIcon
  readonly info = InfoIcon

  @Input() _data!: ChannelType
  @Input() prefix: string = ''

  data: ChannelType | undefined;

  theme: Theme | undefined;
  icon: LucideIconData | undefined

  ngOnInit(): void {
    this.data = this._data;
    if (!this.data) {
      throw new Error("No data channel");
    }
    this.theme = colorClassesAlt[this.data.color];
    this.icon = getAcademicIcon(this.data.icon);
  }

  


}
