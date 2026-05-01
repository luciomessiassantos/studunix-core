import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DevicedetectionService {
  private userAgent: string = '';
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    
    if (this.isBrowser) {
      this.userAgent = navigator.userAgent;
    }
  }

  // Detecção baseada em User Agent
  isMobile(): boolean {
    if (!this.isBrowser) return false; // Default para SSR
    
    const mobileRegex = /Mobile|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return mobileRegex.test(this.userAgent);
  }

  isTablet(): boolean {
    if (!this.isBrowser) return false;
    
    const tabletRegex = /iPad|Android(?!.*Mobile)/i;
    return tabletRegex.test(this.userAgent);
  }

  isDesktop(): boolean {
    if (!this.isBrowser) return true; // Default para SSR
    
    return !this.isMobile() && !this.isTablet();
  }

  // Detecção baseada em Screen Width (pode ser combinada)
  getScreenType(): 'mobile' | 'tablet' | 'desktop' {
    if (!this.isBrowser) return 'desktop';
    
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
  }

  // Observable para mudanças de tamanho de tela
  getScreenTypeChanges() {
    return new Observable<'mobile' | 'tablet' | 'desktop'>(observer => {
      if (!this.isBrowser) {
        observer.next('desktop');
        return;
      }

      const checkSize = () => observer.next(this.getScreenType());
      
      checkSize();
      window.addEventListener('resize', checkSize);
      
      return () => window.removeEventListener('resize', checkSize);
    });
  }
}
