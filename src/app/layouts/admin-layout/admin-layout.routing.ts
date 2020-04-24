import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import {ClaimComponent} from '../../pages/claim/claim.component';
import {RateUsersComponent} from '../../pages/rate-users/rate-users.component';
import {AdminPanelComponent} from '../../pages/admin-panel/admin-panel.component';
import { ContractDataComponent } from '../../pages/contract-data/contract-data.component';
import { PayDemandComponent } from '../../pages/pay-demand/pay-demand.component';
import {AdminGuard} from '../guards/admin.guard';
import {DoctorGuard} from '../guards/doctor.guard';
export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard',      component: DashboardComponent },
    {path: 'claim' , component: ClaimComponent},
    {path: 'rate' , component: RateUsersComponent , canActivate: [DoctorGuard, AdminGuard]},
    {path: 'admin-panel' , component: AdminPanelComponent, canActivate: [AdminGuard]},
    {path: 'contract-data' , component: ContractDataComponent},
    {path: 'pay-demand', component: PayDemandComponent}
];
