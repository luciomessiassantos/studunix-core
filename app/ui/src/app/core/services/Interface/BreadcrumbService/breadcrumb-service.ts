import { Injectable, signal } from '@angular/core';

export type BreadcrumbType = {
  label: string
  path: string
}

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
 
  breadcrumbData = signal<BreadcrumbType[]>([])

  addBreadcrumbData(data: BreadcrumbType) {
    this.breadcrumbData.update(prev => [...prev, data]);
  }

  setBreadcrumbData(d: BreadcrumbType[]) {
    this.breadcrumbData.set(d);
  }

  clean() {
    this.breadcrumbData.set([]);
  }

  removeLast() {
    this.breadcrumbData.update(prev => prev.slice(0, -1));
  }

  addLastWithMax(d: BreadcrumbType, max: number) {
    while (this.breadcrumbData().length >= max) {
      this.removeLast();
    }
    this.addBreadcrumbData(d);
  }


}
