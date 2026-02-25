import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Metadata } from '~/core/types';

@Injectable({
  providedIn: 'root',
})
export class FileStorageService {
  

  getAllContentByOwnerId(id: string): Observable<Metadata[]> {
    const now = new Date();

    const mock: Metadata[] = [
      // ===== FOLDERS =====
      {
        id: 'folder-1',
        name: 'Matemática 2026.1',
        size: 1250000,
        folder_root_id: 'root',
        created_at: now,
        modified_at: now,
        type: 'FOLDER'
      },
      {
        id: 'folder-2',
        name: 'Direito Constitucional',
        size: 840000,
        folder_root_id: 'root',
        created_at: now,
        modified_at: now,
        type: 'FOLDER'
      },
      {
        id: 'folder-3',
        name: 'Projetos ADS',
        size: 2300000,
        folder_root_id: 'root',
        created_at: now,
        modified_at: now,
        type: 'FOLDER'
      },

      // ===== FILES =====
      {
        id: 'file-1',
        name: 'lista-exercicios.pdf',
        size: 350000,
        folder_id: 'folder-1',
        mime_type: 'application/pdf',
        created_at: now,
        modified_at: now,
        type: 'FILE'
      },
      {
        id: 'file-2',
        name: 'resumo-aula.docx',
        size: 210000,
        folder_id: 'folder-2',
        mime_type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        created_at: now,
        modified_at: now,
        type: 'FILE'
      },
      {
        id: 'file-3',
        name: 'diagramas.png',
        size: 480000,
        folder_id: 'folder-3',
        mime_type: 'image/png',
        created_at: now,
        modified_at: now,
        type: 'FILE'
      },
      {
        id: 'file-4',
        name: 'api-collection.json',
        size: 125000,
        folder_id: 'folder-3',
        mime_type: 'application/json',
        created_at: now,
        modified_at: now,
        type: 'FILE'
      },
    ];

    return of(mock);
  }

}
