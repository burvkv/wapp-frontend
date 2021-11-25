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

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    NavmenuComponent,
    SidemenuComponent,
    BreadcrumbDateComponent,
    DashboardComponent,
    DebitComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    ButtonModule,
    RippleModule,
    TableModule,
    HttpClientModule,
    MenubarModule,
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
