import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './Components/error-page/error-page.component';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import { NavmenuComponent } from './Components/navmenu/navmenu.component';
import {MenubarModule} from 'primeng/menubar';
import { SidemenuComponent } from './Components/sidemenu/sidemenu.component';
import { BreadcrumbDateComponent } from './Components/breadcrumb-date/breadcrumb-date.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ToastrModule} from "ngx-toastr";
import { DebitComponent } from './Components/debit/debit.component';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './Components/login/login.component';
import { HardwareComponent } from './Components/hardware/hardware.component';
import { TodoComponent } from './Components/todo/todo.component';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {MenuItem} from 'primeng/api';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    NavmenuComponent,
    SidemenuComponent,
    BreadcrumbDateComponent,
    DashboardComponent,
    DebitComponent,
    LoginComponent,
    HardwareComponent,
    TodoComponent,
    

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    ButtonModule,
    RippleModule,
    BreadcrumbModule,
    TableModule,
    HttpClientModule,
    MenubarModule,
    DropdownModule,
    NgxEchartsModule.forRoot({
      echarts:()=> import ('echarts'),
    }),
   ToastrModule.forRoot(
     {
      positionClass:"toast-top-right"
     }
   ),
   AppRoutingModule
   
  ],
  providers: [{ provide: "url", useValue: "https://localhost:44324/" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
