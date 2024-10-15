import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RolesComponent } from './Component/roles/roles.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RolesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Employee-Management-System';
}
