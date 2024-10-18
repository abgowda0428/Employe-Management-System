import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RolesComponent } from './Component/roles/roles.component';
import { MasterComponent } from "./Component/master/master.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MasterComponent,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Employee-Management-System';
}
