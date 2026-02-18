import { Component, inject, OnInit, signal } from '@angular/core';
import { AuthStore } from '../auth/auth-store';
import { HouseIcon, LayoutDashboard, LucideIconData, Users, LucideAngularModule, BellIcon, CircleQuestionMarkIcon } from 'lucide-angular';
import { LayoutImports } from '~/shared/components/layout';
import { ZardButtonComponent } from '~/shared/components/button';
import { ZardSkeletonComponent } from '~/shared/components/skeleton';
import { User } from '../types';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

export type SideBarItems = {
  id: string,
  label: string
  icon: LucideIconData,
  path: string
}

export type SectionItems = {
  id: string
  title: string
  pages: SideBarItems[]
}

export const ProfessorPages: SectionItems[] = [
  {
    id: 's1',
    title: "Principal",
    pages: [
      {
        id: '/professor',
        label: "Início",
        icon: HouseIcon,
        path: "/professor"
      },
      {
        id: '/professor/dashboard',
        label: "Dashboard",
        icon: LayoutDashboard,
        path: "/professor/dashboard/assignments"
      },
      {
        id: '/professor/students',
        label: "Alunos",
        icon: Users,
        path: "/professor/students"
      }
    ]
  }
]

@Component({
  selector: 'app-layout',
  imports: [LayoutImports, ZardButtonComponent, LucideAngularModule,
    RouterOutlet
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout implements OnInit{

  bellIcon = BellIcon;
  helpIcon = CircleQuestionMarkIcon;


  readonly auth = inject(AuthStore);

  readonly currentRole = this.auth.user()?.role;
  readonly sidebarCollapsed = signal(false);

  readonly sections = this.currentRole === 'PROFESSOR' ? ProfessorPages : null; 

  current: string = '';

    constructor(private router: Router) {
    
    this.current = this.router.url;
    console.log('Initial URL:', this.current);

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.current = event.url;
      console.log('Updated URL:', this.current);
    });

  }

  isPage(path: string): boolean {
  const currentUrl = this.current.split('?')[0]; // remove query params

  // Caso especial: página inicial
  if (path === '/professor') {
    return currentUrl === '/professor';
  }

  return currentUrl.startsWith(path);
}


  toggleSidebar() {
    this.sidebarCollapsed.update(collapsed => !collapsed);
  }
 
  onCollapsedChange(collapsed: boolean) {
    this.sidebarCollapsed.set(collapsed);
  }

  navigatePage(url: string) {
    this.router.navigateByUrl(url);
  }

  ngOnInit(): void {
    console.log(this.current);
    
  }

}
