import { Component, inject, OnInit, signal } from '@angular/core';
import { AuthStore } from '../auth/auth-store';
import { HouseIcon, LayoutDashboard, LucideIconData, Users, LucideAngularModule, BellIcon, CircleQuestionMarkIcon, UserIcon, LogOutIcon, Presentation } from 'lucide-angular';
import { LayoutImports } from '~/shared/components/layout';
import { ZardButtonComponent } from '~/shared/components/button';
import { ZardSkeletonComponent } from '~/shared/components/skeleton';
import { User } from '../types';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { ZardDropdownImports, ZardDropdownMenuContentComponent } from "~/shared/components/dropdown";
import { ZardMenuImports } from '~/shared/components/menu';
import { Notification } from "~/shared/components/notification/notification";
import { ZardToastComponent } from "~/shared/components/toast";
import { ZardDialogService } from '~/shared/components/dialog';
import { HelpDialog } from '../help-dialog/help-dialog';

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
      },
      {
        id: '/professor/lectures',
        label: "Aulas e frequência",
        icon: Presentation,
        path: "/professor/lectures"
      }
    ]
  }
]

@Component({
  selector: 'app-layout',
  imports: [LayoutImports, ZardButtonComponent, LucideAngularModule,
    RouterOutlet, ZardDropdownMenuContentComponent, ZardMenuImports, ZardDropdownImports, Notification, ZardToastComponent],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout implements OnInit{

  bellIcon = BellIcon;
  helpIcon = CircleQuestionMarkIcon;
  user = UserIcon
  logout = LogOutIcon

  readonly auth = inject(AuthStore);

  readonly currentRole = this.auth.user()?.roles;
  readonly sidebarCollapsed = signal(false);
  private readonly dialogService = inject(ZardDialogService);

  readonly sections = this.currentRole?.includes('PROFESSOR') ? ProfessorPages : null; 
  readonly router = inject(Router);

  displayDialog() {
    this.dialogService.create({
      zHideFooter: true,
      zContent: HelpDialog,
      zData: this.currentRole,
      zCustomClasses: 'min-w-250 min-h-120',
      zTitle: 'Ajuda'
    });
  }


  current: string = '';

    constructor() {
    
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
  const currentUrl = this.current.split('?')[0]; 

  if (path === '/professor') {
    return currentUrl === '/professor';
  }

  return currentUrl.startsWith(path);
}

  account = this.auth.user();

  goToDetails() {
      this.router.navigate(['/details'], {
      queryParams: {
        type: this.account?.roles
      }
    })
  }

  logOut() {
    this.auth.logout();
    
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
