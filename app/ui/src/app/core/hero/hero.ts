import { AfterViewInit, Component, ElementRef, inject } from '@angular/core';
import { ArrowRight, CloudUploadIcon, GraduationCap, LayersIcon, LogIn, LucideAngularModule, NotebookPenIcon, TrendingUp, UniversityIcon, Zap,
} from 'lucide-angular';
import { Router, RouterLink } from '@angular/router';
import { Footer } from '~/shared/components/footer/footer';
import { ZardBadgeComponent } from "~/shared/components/badge";
 


@Component({
  selector: 'app-hero',
  imports: [LucideAngularModule, Footer, RouterLink, ZardBadgeComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements AfterViewInit {

  GraduationCap = GraduationCap;
  university = UniversityIcon;
  notebook = NotebookPenIcon;
  cloud = CloudUploadIcon;
  login = LogIn;
  ArrowRight = ArrowRight;
  Zap = Zap;
  layers = LayersIcon;
  TrendingUp = TrendingUp;
 
  alunoFeatures = ['Matrícula online', 'Contratos financeiros', 'Notas e frequência', 'Entrega de tarefas'];
  professorFeatures = ['Gerenciamento de notas', 'Registro de aulas', 'Canais de disciplinas', 'Arquivos em nuvem'];
 

  private readonly router = inject(Router);
  private readonly elementRef = inject(ElementRef);
 
  redirect() {
    this.router.navigate(['login', 'student']);
  }
 
  ngAfterViewInit() {
    const elements: HTMLElement[] = this.elementRef.nativeElement.querySelectorAll('.opacity-0');
 
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.replace('opacity-0', 'enter-bottom');
            observer.unobserve(el);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px',
      }
    );
 
    elements.forEach((el) => observer.observe(el));
  }
}
 

