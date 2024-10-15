import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {

  firstName : string = "Abhishek Gowda H C";
  angularVersion = "Angular 18";
  AngularVersioninNumber : number = 18;
  isValid : boolean = true;

  inputType : string = "checkbox";

  SelectedState :string = "";

  showWelcomealert(message:string){
    alert(message)

  }

  showWelcomealert2(){
    alert("Welcome to React")
  }

  showWelcomealert3(){
    alert("Welcome to Angular")
  }


}
