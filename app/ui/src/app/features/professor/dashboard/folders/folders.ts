import { Component, inject, OnInit, signal, TemplateRef, ViewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DownloadIcon, EllipsisVerticalIcon, InfoIcon, LucideAngularModule, Trash2Icon } from 'lucide-angular';
import { tap } from 'rxjs';
import { FileStorageService } from '~/core/services/FileStorageService/file-storage-service';
import { Metadata } from '~/core/types';
import { ColumnDef } from '~/shared/components/data-table/types';
import { formatBytes, getMetadataIcon } from '~/shared/utils/filesFolderUtils';
import { DataTable } from "~/shared/components/data-table/data-table";
import { ZardDropdownDirective, ZardDropdownImports } from '~/shared/components/dropdown';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-folders',
  imports: [LucideAngularModule, DataTable, ZardDropdownDirective, ZardDropdownImports],
  templateUrl: './folders.html',
  styleUrl: './folders.css',
})
export class Folders implements OnInit{

  readonly service = inject(FileStorageService);

  more = EllipsisVerticalIcon;
  trash = Trash2Icon;
  download = DownloadIcon;
  info = InfoIcon;


  data = toSignal(
    this.service.getAllContentByOwnerId("o1")
    .pipe(tap((d) => console.log(d)))
  );

  delete(f: Metadata) {
    if (f.type == "FOLDER") {
      toast.message("Pasta deletada com sucesso");
    }
    if (f.type == "FILE") {
      toast.message("Arquivo deletado com sucesso");
    }
  }


  metadataColumnDef = signal<ColumnDef<Metadata>[]>([]);

  iconMapper = getMetadataIcon

  @ViewChild('iconTemplate', { static: true })
  iconTemplate!: TemplateRef<any>;

  @ViewChild('moreOptions', { static: true })
  optionsTemplate!: TemplateRef<any>;

  ngOnInit(): void {
    this.metadataColumnDef.set([
      {
        id: 'icon',
        header: '#',
        template: this.iconTemplate
      },
      {
        id: 'name',
        header: 'Nome',
        accessor: 'name'
      },
      {
        id: 'size',
        header: 'Tamanho',
        cell: (row) => formatBytes(row.size)
      },
      {
        id: 'created',
        header: 'Criação',
        cell: (row) => row.created_at.toLocaleDateString('pt-BR', {
          day: 'numeric', month: 'short', hour: 'numeric', minute: 'numeric'
        })
      },
      {
        id: 'modified',
        header: 'Modificação',
        cell: (row) => row.modified_at.toLocaleDateString('pt-BR', {
          day: 'numeric', month: 'short', hour: 'numeric', minute: 'numeric'
        })
      },
      {
        id: 'options',
        header: '',
        template: this.optionsTemplate
      }
    ])
  }

}
