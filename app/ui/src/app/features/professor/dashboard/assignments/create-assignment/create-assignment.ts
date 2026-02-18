import { ChangeDetectionStrategy, Component, inject, signal, ViewEncapsulation } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AssignmentInput, FastModule } from '~/features/professor/shared/types';

@Component({
  selector: 'app-create-assignment',
  imports: [ReactiveFormsModule],
  templateUrl: './create-assignment.html',
  styleUrl: './create-assignment.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class CreateAssignment {

  private readonly builder = inject(FormBuilder);

  loading = signal(false);

  modules: FastModule[] = [
    {
      id: 'p1',
      name: 'Programação Orientada a Objetos'
    },
    {
      id: 'p2',
      name: 'Banco de Dados'
    }
  ]
  

  readonly form = this.builder.nonNullable.group({
    title: ['', Validators.required, Validators.minLength(3)],
    description: [''],
    module: [this.modules[0].id, Validators.required]
  });


}
