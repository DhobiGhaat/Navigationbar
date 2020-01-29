import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminloginComponent} from './adminlogin/adminlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderstatusComponent } from './orderstatus/orderstatus.component';

const routes: Routes = [
  {path:'adminlogin', component:AdminloginComponent},
  {path:'customer', component:CustomerComponent},
  {path:'dashboard/:admin', component:DashboardComponent},
  {path:'orderstatus', component:OrderstatusComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
