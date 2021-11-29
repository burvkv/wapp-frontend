import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DebitComponent } from './Components/debit/debit.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginComponent } from './Components/login/login.component';
import { AppComponent } from './app.component';
import { HardwareComponent } from './Components/hardware/hardware.component';
import { TodoComponent } from './Components/todo/todo.component';


const routes:Routes=[
  {path:"",pathMatch:"full",component:DashboardComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"debits",component:DebitComponent},
  {path:"login", component:LoginComponent},
  {path:"hardwares", component:HardwareComponent},
  {path:"todos", component:TodoComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
