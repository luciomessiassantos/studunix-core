import { DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import { AssignmentProfessor } from '~/features/professor/shared/types.dto';
import { ZardCardComponent } from '~/shared/components/card';
import { Z_MODAL_DATA } from '~/shared/components/dialog';

@Component({
  selector: 'app-delete-confirm',
  imports: [ZardCardComponent, MarkdownComponent, DatePipe],
  templateUrl: './delete-confirm.html',
  styleUrl: './delete-confirm.css',
})
export class DeleteConfirm implements OnInit {

  data = inject(Z_MODAL_DATA) as AssignmentProfessor;

  ngOnInit(): void {
    console.log(this.data);
    
  }

}
