import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LucideAngularModule, UploadIcon, FileIcon } from 'lucide-angular';
import { BreadcrumbService } from '~/core/services/Interface/BreadcrumbService/breadcrumb-service';
import { channels, materials } from '~/features/desktop/student/data';
import { ZardButtonComponent } from '~/shared/components/button';
import { ZardFormImports } from '~/shared/components/form';
import { ZardInputDirective } from '~/shared/components/input';
import { AssignmentInput } from '../../shared/types';
import { ClassLetter } from '../../shared/types.dto';
import { ZardSelectImports } from '~/shared/components/select';
import { ZardSwitchComponent } from '~/shared/components/switch';

@Component({
  selector: 'app-create-assignment',
  imports: [
    ReactiveFormsModule, RouterLink, LucideAngularModule,
    ZardButtonComponent, ZardInputDirective, ZardFormImports,
    ZardSelectImports, ZardSwitchComponent
  ],
  templateUrl: './create-assignment.html',
})
export class CreateAssignment implements OnInit {

  
  readonly breadcrumbService = inject(BreadcrumbService);
  readonly router = inject(Router);

  upload   = UploadIcon;
  fileIcon = FileIcon;

  selectedFiles = signal<File[]>([]);

  modules = channels.map(c => ({ id: c.id, name: c.name }));
  isReusable = false;

  availableFolders = computed(() => {
    const id = this.form.get('moduleId')?.value;
    if (!id) return [];
    return materials.find(m => m.channelId === id)?.folders
      .map(f => ({ id: f.id, name: f.name })) ?? [];
  });

  form = new FormGroup({
    title: new FormControl('',  [Validators.required]),
    details: new FormControl(''),
    moduleId: new FormControl('',  [Validators.required]),
    folderId: new FormControl('',  [Validators.required]),
    period: new FormControl('',  [Validators.required]),
    classLetter: new FormControl<ClassLetter | ''>('', [Validators.required]),
    points: new FormControl<number | null>(null, [Validators.required, Validators.min(0)]),
    tries: new FormControl<number | null>(null, [Validators.required, Validators.min(1), Validators.max(10)]),
    deadline: new FormControl('',  [Validators.required]),
    isReusable: new FormControl(false),
  });

  ngOnInit(): void {
    this.breadcrumbService.addBreadcrumbData({ label: 'Nova Tarefa', path: '' });

    // limpa pasta ao trocar disciplina
    this.form.get('moduleId')?.valueChanges.subscribe(() => {
      this.form.get('folderId')?.reset('');
    });
  }

  field(name: string) {
    return this.form.get(name)!;
  }

  toggleReusable(): void {
    const ctrl = this.form.get('isReusable')!;
    ctrl.setValue(!ctrl.value);
  }

  fileInput(): void {
    document.getElementById('file-input')?.click();
  }

  onFilesChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) this.selectedFiles.set(Array.from(input.files));
  }

  formatBytes(bytes: number): string {
    if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.value;
    const module = this.modules.find(m => m.id === v.moduleId);
    const folder = this.availableFolders().find(f => f.id === v.folderId);

    const payload: AssignmentInput = {
      title: v.title!,
      details:v.details ?? undefined,
      module: module!,
      folder: folder!,
      period: v.period!,
      classLetter: v.classLetter as ClassLetter,
      points: v.points!,
      tries: v.tries!,
      created_at: new Date(),
      deadline: new Date(v.deadline!),
      isReusable: this.isReusable ?? false,
      files: this.selectedFiles(),
    };

    console.log('AssignmentInput:', payload);
    // this.assignmentService.create(payload).subscribe(...)
    this.router.navigate(['..']);
  }
}
