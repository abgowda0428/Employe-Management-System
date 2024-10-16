import { HttpClient } from '@angular/common/http';
import { Component ,inject,OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Irole } from '../model/interface/Role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{

   rolelist : Irole [] = []

  http = inject(HttpClient)


  ngOnInit(): void {
    this.getallRoles
  }

  getallRoles(){
    this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:any)=>{
      this.rolelist = res.data;

    })

  }














































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
