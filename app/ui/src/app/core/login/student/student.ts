import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal, ViewEncapsulation } from '@angular/core';
import { GraduationCapIcon, LoaderCircleIcon, LoaderIcon, LucideAngularModule } from 'lucide-angular';
import { ZardCardComponent } from "~/shared/components/card";
import { ZardDividerComponent } from "~/shared/components/divider";
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms'
import { ZardButtonComponent } from '~/shared/components/button';
import { ZardInputDirective } from '~/shared/components/input';
import { ZardFormImports } from '~/shared/components/form';
import { RouterLink } from '@angular/router';

export const loginPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$|^\d{4}\.\d{1}\.\d{3}\.\d{3}$/;

export interface StudentFormData {
  login: string
  password: string
}

@Component({
  selector: 'app-student',
  imports: [LucideAngularModule, ZardCardComponent, ZardDividerComponent,
    ReactiveFormsModule,
    ZardButtonComponent,
    ZardInputDirective,
    ZardFormImports,
    RouterLink
  ],
  templateUrl: './student.html',
  styleUrl: './student.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class Student {
  cap = GraduationCapIcon;
  load = LoaderCircleIcon;

  private readonly builder = inject(FormBuilder);
  private readonly destroyRef = inject(DestroyRef);


  readonly showSuccess = signal(false);
  readonly isSubmiting = signal(false);

  readonly studentForm = this.builder.nonNullable.group({
    login: ['', [Validators.required, Validators.pattern(loginPattern)]],
    password: ['', [Validators.required]]
  });


 
  isFieldInvalid(fieldName: keyof StudentFormData): boolean {
    const field = this.studentForm.get(fieldName);
    return !!(field?.invalid && (field?.dirty || field?.touched));
  }

  getLoginError(): string {
    const login = this.studentForm.get('login');
    if (login?.hasError('required')) {
        return 'preencha o campo Email ou Matrícula';
      }
      if (login?.hasError('pattern')) {
      return 'Insira um email ou matrícula válidos';
    }
    return 'Erro desconhecido';
  }


  private simulateApiCall(): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, 1000));
  }

  async handleSubmit(): Promise<void> {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
      return;
    }
 
    this.isSubmiting.set(true);
 
    await this.simulateApiCall();
 
    this.isSubmiting.set(false);
    this.showSuccess.set(true);
 
    console.log('Form submitted:', this.studentForm.getRawValue());
 
    setTimeout(() => {
      this.showSuccess.set(false);
    }, 5000);
  }
 
  resetForm(): void {
    this.studentForm.reset();
    this.showSuccess.set(false);
  }

}
