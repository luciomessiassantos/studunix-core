import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { ZardToastComponent } from "~/shared/components/toast";

@Component({
  selector: 'app-login',
  imports: [RouterOutlet, ZardToastComponent],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

}
