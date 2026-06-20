import { Component, inject, OnInit, signal } from '@angular/core';
import { AuthStore } from '../auth/auth-store';
import { HouseIcon, LayoutDashboard, LucideIconData, Users, LucideAngularModule, BellIcon, CircleQuestionMarkIcon, UserIcon, LogOutIcon, Presentation, ChartNoAxesColumnIncreasingIcon, UsersRoundIcon, WorkflowIcon, ClipboardIcon, ComponentIcon, MegaphoneIcon } from 'lucide-angular';
import { LayoutImports } from '~/shared/components/layout';
import { ZardButtonComponent } from '~/shared/components/button';
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
        path: "/professor/dashboard"
      },
    ]
  }
]

const StudentPages: SectionItems[] = [
  {
    id: 'sp-1',
    title: 'Principal',
    pages: [
      {
        id: '/student',
        label: 'Início',
        icon: HouseIcon,
        path: '/student'
      },
      {
        id: '/student/grades',
        label: 'Desempenho',
        icon: ChartNoAxesColumnIncreasingIcon,
        path: '/student/grades'
      },
      {
        id: '/student/modules',
        label: 'Módulos',
        icon: ComponentIcon,
        path: '/student/modules'
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
  megaphone = MegaphoneIcon

  readonly auth = inject(AuthStore);

  readonly currentRole = this.auth.user()?.roles;
  readonly sidebarCollapsed = signal(false);
  private readonly dialogService = inject(ZardDialogService);

  readonly sections = this.currentRole?.includes('PROFESSOR') ? ProfessorPages : StudentPages; 
  readonly router = inject(Router);

  initial = this.auth.user()?.username.charAt(0);

  displayDialog() {
    this.dialogService.create({
      zHideFooter: true,
      zContent: HelpDialog,
      zData: this.currentRole,
      zCustomClasses: 'md:min-w-250 md:min-h-120 min-w-100 min-h-200 bg-background text-foreground',
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

  if (path === '/student') {
    return currentUrl === '/student';
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
    if (this.account?.roles[0] == 'PROFESSOR') {
      this.router.navigateByUrl("/login/professor");
    }
    if (this.account?.roles[0] == 'STUDENT') {
      this.router.navigateByUrl("/login/student");
    }
    
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
