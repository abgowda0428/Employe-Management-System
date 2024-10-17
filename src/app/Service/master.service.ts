import { HttpClient } from '@angular/common/http';
import { APP_ID, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIget } from '../Component/model/interface/Role';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  

  constructor(private http:HttpClient) { }

  getDesignation():Observable<APIget>{
    return this.http.get<APIget>("https://freeapi.miniprojectideas.com/api/EmployeeApp/GetAllDesignation")
  }
}
