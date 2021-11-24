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



@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    NavmenuComponent,
    SidemenuComponent,
    BreadcrumbDateComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    ButtonModule,
    RippleModule,
    MenubarModule,
    NgxEchartsModule.forRoot({
      echarts:()=> import ('echarts'),
    }),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
