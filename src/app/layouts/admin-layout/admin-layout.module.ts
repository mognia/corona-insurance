import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {ClaimComponent} from '../../pages/claim/claim.component';
import {RateUsersComponent} from '../../pages/rate-users/rate-users.component';
import {AdminPanelComponent} from '../../pages/admin-panel/admin-panel.component';
import { ContractDataComponent } from '../../pages/contract-data/contract-data.component';
import { PayDemandComponent } from '../../pages/pay-demand/pay-demand.component';
import {TranslateModule} from '@ngx-translate/core';
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatStepperModule,
        MatTooltipModule,
        TranslateModule,
    ],
  declarations: [
    DashboardComponent,
    ClaimComponent,
    RateUsersComponent,
    AdminPanelComponent,
    PayDemandComponent,
    ContractDataComponent
  ]
})

export class AdminLayoutModule {}
