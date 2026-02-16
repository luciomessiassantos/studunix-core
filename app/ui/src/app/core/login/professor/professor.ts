import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { GraduationCapIcon, LoaderCircleIcon, LoaderIcon, LucideAngularModule } from 'lucide-angular';
import { ZardCardComponent } from "~/shared/components/card";
import { ZardDividerComponent } from "~/shared/components/divider";
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms'
import { ZardButtonComponent } from '~/shared/components/button';
import { ZardInputDirective } from '~/shared/components/input';
import { ZardFormImports } from '~/shared/components/form';
import { Router, RouterLink } from "@angular/router";
import { toast } from 'ngx-sonner';
import { CircleAlertIcon } from 'lucide-angular'
import { ErrorCard } from '~/shared/components/error-card/error-card';
import { AuthStore } from '~/core/auth/auth-store';


const loginPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$|^\d{4}\.\d{1}\.\d{3}\.\d{3}$/;

interface ProfessorFormData {
  login: string
  password: string
}
@Component({
  selector: 'app-professor',
  imports: [LucideAngularModule, ZardCardComponent, ZardDividerComponent,
    ReactiveFormsModule,
    ZardButtonComponent,
    ZardInputDirective,
    ZardFormImports, 
    RouterLink
  ],
  templateUrl: './professor.html',
  styleUrl: './professor.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class Professor implements OnInit {

  cap = GraduationCapIcon;
  load = LoaderCircleIcon;

  private readonly auth = inject(AuthStore);
  private readonly builder = inject(FormBuilder);
  private readonly router = inject(Router);

  readonly showSuccess = signal(false);
  readonly isSubmiting = signal(false);

  readonly professorForm = this.builder.nonNullable.group({
    login: ['', [Validators.required, Validators.pattern(loginPattern)]],
    password: ['', [Validators.required]]
  });


 
  isFieldInvalid(fieldName: keyof ProfessorFormData): boolean {
    const field = this.professorForm.get(fieldName);
    return !!(field?.invalid && (field?.dirty || field?.touched));
  }

  getLoginError(): string {
    const login = this.professorForm.get('login');
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
    if (this.professorForm.invalid) {
      this.professorForm.markAllAsTouched();
      return;
    }

    this.isSubmiting.set(true);
 
    await this.simulateApiCall();

    this.isSubmiting.set(false);

    const { login, password } = this.professorForm.getRawValue();

    const isValid =
    login === 'professor@ads.fiponline.edu.br' &&
    password === 'fip2026';

    if(!isValid) {
      this.professorForm.reset();
      toast.error("Dados inválidos ou incorretos", {
          component: ErrorCard,
          componentProps: {"message": "Dados Inválidos" }
      })
    }

    
    this.showSuccess.set(true);

    this.auth.login({ id: '1234qwert', username: "Nando Moura Araújo Júnior", role: "PROFESSOR" });
    this.router.navigateByUrl("/professor")
    

    setTimeout(() => {
      this.showSuccess.set(false);
    }, 5000);
  }
 
  resetForm(): void {
    this.professorForm.reset();
    this.showSuccess.set(false);
  }

  ngOnInit(): void {
    if (this.auth.isAuthenticated()) {
      console.log("ta certo ");
      
      if (this.auth.user()?.role == 'PROFESSOR') {
        this.router.navigateByUrl("/professor");
      }
    }  
  }


}
