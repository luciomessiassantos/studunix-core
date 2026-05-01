import { Component, Input, OnInit } from '@angular/core';
import { AssignmentStudent } from '../../../types';
import { ZardAccordionComponent, ZardAccordionItemComponent } from "~/shared/components/accordion";
import { ZardTableBodyComponent, ZardTableRowComponent, ZardTableCellComponent } from "~/shared/components/table";
import { DatePipe } from '@angular/common';
import { ZardButtonComponent } from '~/shared/components/button';
import { ZardBadgeComponent } from "~/shared/components/badge";

@Component({
  selector: 'app-assignment-card',
  imports: [ZardAccordionComponent, ZardAccordionItemComponent, ZardTableBodyComponent, ZardTableRowComponent, ZardTableCellComponent, DatePipe,
    ZardButtonComponent, ZardBadgeComponent],
  templateUrl: './assignment-card.html',
  styleUrl: './assignment-card.css',
})
export class AssignmentCard implements OnInit {


  @Input() data: AssignmentStudent | undefined;

  expiresDate = "";
  createdDate = "";

  fileInput() {
    document.getElementById('file-input')?.click();
  }

  ngOnInit(): void {
    if (this.data) {
      this.expiresDate = this.data.deadline.toLocaleDateString("pt-BR", {
        month: 'long', day: 'numeric', weekday: 'long'
      })
      this.createdDate = this.data.created_at.toLocaleDateString("pt-BR", {
        month: 'long', day: 'numeric', weekday: 'long'
      })
    } 
  }
}
