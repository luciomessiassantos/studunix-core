import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssignmentProfessor } from '../../../shared/types';
import { getAssignmentById } from '../../../shared/data-mock';
import { BreadcrumbService } from '~/core/services/Interface/BreadcrumbService/breadcrumb-service';
import { ChevronRightIcon, PencilLineIcon, DownloadIcon, FolderIcon, FileIcon, LucideAngularModule } from 'lucide-angular';
import { ZardButtonComponent } from '~/shared/components/button';
import { ZardBadgeComponent } from '~/shared/components/badge';
import { formatBytes } from '~/shared/utils/filesFolderUtils';

@Component({
  selector: 'app-assignment-detail',
  imports: [LucideAngularModule, ZardButtonComponent, ZardBadgeComponent],
  templateUrl: './assignment-detail.html',
  styleUrl: './assignment-detail.css',
})
export class AssignmentDetail implements OnInit {


  chevron  = ChevronRightIcon;
  pencil   = PencilLineIcon;
  download = DownloadIcon;
  folder   = FolderIcon;
  fileIcon = FileIcon;

  route = inject(ActivatedRoute);
  assignmentId: string | null = null;
  data = signal<AssignmentProfessor | undefined>(undefined)
  breadcrumbService = inject(BreadcrumbService);

  showAll   = signal(false);

  createdDate  = '';
  deadlineDate = '';

  readonly PREVIEW_LIMIT = 5;

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.assignmentId = param.get("assignmentId");

      const id = param.get('assignmentId');
      if (id) this.data.set(getAssignmentById(id));

      const d = this.data();
      if (!d) return;
      const opts: Intl.DateTimeFormatOptions = {
        day: 'numeric', month: 'long', weekday: 'long'
      };
      this.createdDate  = d.created_at.toLocaleDateString('pt-BR', opts);
      this.deadlineDate = d.deadline.toLocaleDateString('pt-BR', opts);
    });


    if (this.assignmentId) this.data.set(getAssignmentById(this.assignmentId));
    this.breadcrumbService.addBreadcrumbData({ label: this.data()?.title ?? "", path: ''})

    

  }

  formatBytes = formatBytes;

}
