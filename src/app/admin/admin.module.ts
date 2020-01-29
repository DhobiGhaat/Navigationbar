import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderstatusComponent } from './orderstatus/orderstatus.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdminloginComponent, DashboardComponent, CustomerComponent, OrderstatusComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
