import { Component, Input } from '@angular/core';
import { ColumnDef } from './types';
import { ZardTableHeaderComponent, ZardTableBodyComponent, ZardTableRowComponent, ZardTableCellComponent } from "../table";
import { NgTemplateOutlet, NgComponentOutlet } from '@angular/common';


@Component({
  selector: 'app-data-table',
  imports: [ZardTableHeaderComponent, ZardTableBodyComponent, ZardTableRowComponent, NgTemplateOutlet, NgComponentOutlet, ZardTableCellComponent],
  templateUrl: './data-table.html',
  styleUrl: './data-table.css',
})
export class DataTable<T> {

  @Input() data: T[] | undefined = [];
  @Input() columns: ColumnDef<T>[] = [];

}
