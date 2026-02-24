import { TemplateRef, Type } from "@angular/core"

export interface ColumnDef<T> {
  id: string;
  header: string;
  accessor?: keyof T;
  cell?: (row: T) => string | number;
  template?: TemplateRef<any>;
  
  component?: Type<any>;

  componentInputs?: (row: T) => Record<string, any>;
}