import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Material, TFolder } from '../../../types';
import type { TreeNode } from '~/shared/components/tree/tree.types'
import { ZardTreeComponent } from "~/shared/components/tree";
import { provideIcons } from '@ng-icons/core';
import { lucideFile, lucideFolder } from '@ng-icons/lucide';

@Component({
  selector: 'app-materials-tree',
  imports: [ZardTreeComponent],
  templateUrl: './materials-tree.html',
  styleUrl: './materials-tree.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [provideIcons({ lucideFolder, lucideFile })],
})
export class MaterialsTree implements OnInit {

  @Input() folder!: TFolder

  fileSystem: TreeNode<TFolder>[] | undefined;

  ngOnInit(): void {
      this.fileSystem = [
        {
        key: this.folder.id,
        label: this.folder.name,
        icon: 'lucideFolder',
        children: this.folder.files.map<TreeNode<TFolder>>((f) => {
          return { 
            key: f.modified_at.toLocaleDateString(), 
            label: f.name, 
            icon: 'lucideFile', 
            leaf: true , 
            

          }
        })
      }
    ]
  }

}
