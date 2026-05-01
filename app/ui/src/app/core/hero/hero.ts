import { AfterViewInit, Component, ElementRef, inject } from '@angular/core';
import { CloudUploadIcon, FolderIcon, GraduationCap, LogIn, LucideAngularModule, NotebookPenIcon, UniversityIcon } from 'lucide-angular';
import { Router, RouterLink } from '@angular/router';
import { ZardButtonComponent } from '~/shared/components/button';
import { Footer } from "~/shared/components/footer/footer";


@Component({
  selector: 'app-hero',
  imports: [LucideAngularModule, ZardButtonComponent, Footer, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements AfterViewInit {
  GraduationCap = GraduationCap;
  university = UniversityIcon
  folder = FolderIcon;
  notebook = NotebookPenIcon
  cloud = CloudUploadIcon

  login = LogIn

  router = inject(Router);

  elementRef = inject(ElementRef);

  redirect() {
    this.router.navigate(["login", "student"]);
  }


  ngAfterViewInit() {

    const elements = this.elementRef.nativeElement.querySelectorAll('.opacity-0');

    const observer = new IntersectionObserver((entries) => {

      entries.forEach((entry, index) => {

        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;

          element.style.animationDelay = `${index * 0.3}s`;
          element.classList.replace('opacity-0', 'enter-in');
        }

      });

    }, {
      threshold: 0.2,
      rootMargin: "0px 0px -180px 0px"
    });

    elements.forEach((el: Element) => observer.observe(el));

  }

}
