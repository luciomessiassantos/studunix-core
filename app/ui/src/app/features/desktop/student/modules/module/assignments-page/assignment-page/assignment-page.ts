import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CircleCheckIcon, FileIcon, LucideAngularModule, PaperclipIcon, UploadIcon } from 'lucide-angular';
import { BreadcrumbService } from '~/core/services/Interface/BreadcrumbService/breadcrumb-service';
import { channels, getAssignmentById } from '~/features/desktop/student/data';
import { AssignmentStudent } from '~/features/desktop/student/types';
import { ZardBadgeComponent } from "~/shared/components/badge";
import { ZardButtonComponent } from '~/shared/components/button';
import { ZardTableImports } from '~/shared/components/table';
import { formatBytes } from '~/shared/utils/filesFolderUtils';

@Component({
  selector: 'app-assignment-page',
  imports: [ZardBadgeComponent, ZardButtonComponent, LucideAngularModule],
  templateUrl: './assignment-page.html',
})
export class AssignmentPage implements OnInit {
  readonly route             = inject(ActivatedRoute);
  readonly breadcrumbService = inject(BreadcrumbService);

  upload = UploadIcon;
  fileIcon = FileIcon;
  checkCircle = CircleCheckIcon;
  attachment = PaperclipIcon;

  assignmentId = signal<string | null>(null);
  assignmentData = signal<AssignmentStudent | undefined>(undefined);

  createdDate = '';
  deadlineDate = '';
  submissionDate = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('assignmentId');
      this.assignmentId.set(id);

      if (id) {
        const data = getAssignmentById(id)[0];
        this.assignmentData.set(data);

        if (data) {
          const opts: Intl.DateTimeFormatOptions = {
            day: 'numeric', month: 'long', weekday: 'long'
          };
          this.createdDate  = data.created_at.toLocaleDateString('pt-BR', opts);
          this.deadlineDate = data.deadline.toLocaleDateString('pt-BR', opts);
          if (data.submission)
            this.submissionDate = data.submission.date.toLocaleDateString('pt-BR', opts);

          this.breadcrumbService.addBreadcrumbData({
            label: data.title,
            path: id,
          });
        }
      }
    });
  }

  moduleName = computed(() => {
    const id = this.assignmentData()?.module;
    return channels.find(c => c.id === id)?.name ?? id ?? '—';
  });

  triesArray = computed(() =>
    Array.from({ length: this.assignmentData()?.tries ?? 0 }, (_, i) => i + 1)
  );

  usedTries = computed(() =>
    this.assignmentData()?.submission ? 1 : 0
  );

  canResubmit = computed(() => {
    const d = this.assignmentData();
    if (!d) return false;
    return d.status !== 'EXPIRED' && this.usedTries() < d.tries;
  });

  taskFiles = computed(() => {
    return (this.assignmentData() as any)?.taskFiles ?? [];
  });

  fileInput(): void {
    document.getElementById('file-input')?.click();
  }

  formatBytes = formatBytes;

}

