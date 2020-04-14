import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import {ClaimComponent} from '../../pages/claim/claim.component';
import {RateUsersComponent} from '../../pages/rate-users/rate-users.component';
import {AddDoctorComponent} from '../../pages/add-doctor/add-doctor.component';


export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard',      component: DashboardComponent },
    {path: 'claim' , component: ClaimComponent},
    {path: 'rate' , component: RateUsersComponent},
    {path: 'add-doc' , component: AddDoctorComponent},
];
