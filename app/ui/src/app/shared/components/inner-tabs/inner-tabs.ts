import { Component, inject, Inject, Input } from '@angular/core';
import { TabData } from '~/shared/utils/type';
import { LucideAngularModule } from "lucide-angular";
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-inner-tabs',
  imports: [LucideAngularModule],
  templateUrl: './inner-tabs.html',
  styleUrl: './inner-tabs.css',
})
export class InnerTabs {

  @Input() tabsData: TabData[] = [];

  router = inject(Router);

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

  isTab(path: string): boolean {
  const currentUrl = this.current.split('?')[0]; 

    return currentUrl.startsWith(path);
}

  toggleTab(path: string) {
    this.router.navigateByUrl(path);
  }


}
