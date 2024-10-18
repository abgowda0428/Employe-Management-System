import { Component, inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { MasterService } from '../../Service/master.service';
import { APIget, IdedignationRoles } from '../model/interface/Role';
@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {

  Masterservice = inject(MasterService)

  isloder:boolean = true;

  DesignationList : IdedignationRoles[] =[];

  ngOnInit(): void {
    this.Masterservice.getDesignation().subscribe((res:APIget)=>{

      this.DesignationList = res.data,this.isloder = false;
      
    },error=>{
      alert("API Error / Network Down"),
      this.isloder = false
    })
  }

}
