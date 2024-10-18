import { Routes } from '@angular/router';
import { MasterComponent } from './Component/master/master.component';
import { EmployeeComponent } from './Component/employee/employee.component';
import { ClientComponent } from './Component/client/client.component';

export const routes: Routes = [

    {
        path:"",
        redirectTo:"master",
        pathMatch:"full"
    },

    {
        path:"master",
        component:MasterComponent
    },

    {
        path:"emplyoe",
        component:EmployeeComponent
    },

    {
        path:"client",
        component:ClientComponent
    }
];
