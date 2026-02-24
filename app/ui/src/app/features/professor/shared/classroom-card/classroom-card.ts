import { Component, Input, OnInit, signal } from '@angular/core';
import { Classroom } from '../types';
import { colorClassesAlt, Theme } from '~/shared/utils/colorUtils';
import { EllipsisVerticalIcon, LucideAngularModule, SquarePenIcon } from "lucide-angular";
import { ZardDropdownDirective, ZardDropdownImports } from '~/shared/components/dropdown';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-classroom-card',
  imports: [LucideAngularModule, ZardDropdownImports, ZardDropdownDirective, RouterLink],
  templateUrl: './classroom-card.html',
  styleUrl: './classroom-card.css',
})
export class ClassroomCard implements OnInit {
  @Input() data!: Classroom;


  edit = SquarePenIcon;
  ellipse = EllipsisVerticalIcon
  theme = signal<Theme | undefined>(undefined);

  ngOnInit(): void {
    while(!this.data) {
      
    }
    this.theme.set(colorClassesAlt[this.data.color]);
  }

}
