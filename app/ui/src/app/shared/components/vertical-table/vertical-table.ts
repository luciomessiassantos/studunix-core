import { Component, Input, OnInit, signal, TemplateRef } from '@angular/core';
import { ZardTableBodyComponent, ZardTableRowComponent, ZardTableCellComponent } from "~/shared/components/table";
import { ZardBadgeComponent } from "~/shared/components/badge";
import { ColumnDef } from '../data-table/types';
import { StudentRecord } from '~/features/desktop/student/types';
import { ZardSkeletonComponent } from "../skeleton";

@Component({
  selector: 'app-vertical-table',
  imports: [ZardTableBodyComponent, ZardTableRowComponent, ZardTableCellComponent, ZardBadgeComponent, ZardSkeletonComponent],
  templateUrl: './vertical-table.html',
  styleUrl: './vertical-table.css',
})
export class VerticalTable implements OnInit {

  // @Input() colDef!: ColumnDef<T>[];
  // @Input() data!: T[]
  // @Input() label: TemplateRef<any> | undefined

  @Input() recordData!: StudentRecord[];

  loading = signal(true)
  loaded = signal(false);

ngOnInit(): void {
  console.log('Iniciando ngOnInit', { loading: this.loading(), loaded: this.loaded() });
  
  if (!this.loaded()) {
    setTimeout(() => {
      this.loading.set(false);
      this.loaded.set(true);
      console.log('Timeout executado', { loading: this.loading(), loaded: this.loaded() });
    }, 4000);
  }
}

}
