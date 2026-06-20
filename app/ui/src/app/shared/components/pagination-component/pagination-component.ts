import {
  Component,
  input,
  output,
  computed,
  signal,
  effect,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatedData } from '~/core/types';


@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination-component.html',
  styleUrl: './pagination-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent<T> {

  paginatedData = input.required<PaginatedData<T>>();

  pageChange = output<number>();


  private _current = signal<number>(0);

  constructor() {
    effect(() => {
      this._current.set(this.paginatedData().currentPage);
    });
  }


  current = computed(() => this._current());
  total   = computed(() => this.paginatedData().totalPages);

  hasPrev = computed(() => this.paginatedData().hasPrevious);
  hasNext = computed(() => this.paginatedData().hasNext);


  pages = computed<(number | '...')[]>(() => {
    const total   = this.total();
    const current = this.current();

    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i);
    }

    const window = new Set<number>([
      0,
      total - 1,
      current - 1,
      current,
      current + 1,
    ].filter(p => p >= 0 && p < total));

    const sorted = [...window].sort((a, b) => a - b);
    const result: (number | '...')[] = [];

    for (let i = 0; i < sorted.length; i++) {
      if (i > 0 && sorted[i] - sorted[i - 1] > 1) {
        result.push('...');
      }
      result.push(sorted[i]);
    }

    return result;
  });

  
  goTo(page: number | '...'): void {
    if (page === '...') return;
    if (page < 0 || page >= this.total()) return;
    if (page === this.current()) return;

    this._current.set(page);
    this.pageChange.emit(page);
  }

  prev(): void {
    if (this.hasPrev()) this.goTo(this.current() - 1);
  }

  next(): void {
    if (this.hasNext()) this.goTo(this.current() + 1);
  }

  isEllipsis(p: number | '...'): p is '...' {
    return p === '...';
  }
}
