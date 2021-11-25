import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DebitComponent } from './Components/debit/debit.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginComponent } from './Components/login/login.component';


const routes:Routes=[
  {path:"",pathMatch:"full",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"debits",component:DebitComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
