import { Component } from '@angular/core';
import { ZardDividerComponent } from "../divider";
import { Github, LucideAngularModule } from "lucide-angular";
import { ZardDialogComponent } from "../dialog";

@Component({
  selector: 'app-footer',
  imports: [ZardDividerComponent, LucideAngularModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  
}
