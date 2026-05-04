import { Component, Input, OnInit } from '@angular/core';
import { AssignmentStudent } from '../../../types';
import { ZardBadgeComponent } from "~/shared/components/badge";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-assignment-card',
  imports: [ZardBadgeComponent, RouterLink],
  templateUrl: './assignment-card.html',
  styleUrl: './assignment-card.css',
})
export class AssignmentCard implements OnInit {


  @Input() data: AssignmentStudent | undefined;
  @Input() routePrefix: string = "";

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
