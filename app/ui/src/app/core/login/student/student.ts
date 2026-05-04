import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { GraduationCapIcon, LoaderCircleIcon, LoaderIcon, LucideAngularModule } from 'lucide-angular';
import { ZardCardComponent } from "~/shared/components/card";
import { ZardDividerComponent } from "~/shared/components/divider";
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms'
import { ZardButtonComponent } from '~/shared/components/button';
import { ZardInputDirective } from '~/shared/components/input';
import { ZardFormImports } from '~/shared/components/form';
import { Router, RouterLink } from '@angular/router';
import { toast } from 'ngx-sonner';
import { ErrorCard } from '~/shared/components/error-card/error-card';
import { AuthStore } from '~/core/auth/auth-store';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


export const loginPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$|^\d{4}\.\d{1}\.\d{3}\.\d{3}$/;

export interface StudentFormData {
  login: string
  password: string
}

@Component({
  selector: 'app-student',
  imports: [LucideAngularModule, ZardCardComponent,
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
export class Student implements OnInit {
  cap = GraduationCapIcon;
  load = LoaderCircleIcon;

  private readonly builder = inject(FormBuilder);
  private readonly auth = inject(AuthStore);
  private readonly router = inject(Router);

  isMobile: boolean = false;


  readonly showSuccess = signal(false);
  readonly isSubmiting = signal(false);
  readonly breakpointObserver = inject(BreakpointObserver);
  readonly studentForm = this.builder.nonNullable.group({
    login: ['', [Validators.required, Validators.pattern(loginPattern)]],
    password: ['', [Validators.required]]
  });


   ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isMobile = result.matches;
      });
  }

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
 
    const { login, password } = this.studentForm.getRawValue();

    const isValid =
    login === 'aluno@ads.fiponline.edu.br' &&
    password === 'fip2026';

    if(!isValid) {
      this.studentForm.reset();
      toast.error("Dados inválidos ou incorretos", {
          component: ErrorCard,
          componentProps: {"message": "Dados Inválidos" }
      });
      this.isSubmiting.set(false);
      return;
    }

    this.isSubmiting.set(false);
    
    this.showSuccess.set(true);
 
    this.auth.login({ id: 'user-2', username: "Mauricio Gama", roles: ["STUDENT"] });
    if (this.isMobile) {
      this.router.navigateByUrl("/m/student");
      
    }
    else {
      this.router.navigateByUrl("/student");
    }

    setTimeout(() => {
      this.showSuccess.set(false);
    }, 5000);
  }
 
  resetForm(): void {
    this.studentForm.reset();
    this.showSuccess.set(false);
  }

}
