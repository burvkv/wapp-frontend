import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ErrorPageComponent } from './Components/error-page/error-page.component';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import { NavmenuComponent } from './Components/navmenu/navmenu.component';
import {MenubarModule} from 'primeng/menubar';
import { SidemenuComponent } from './Components/sidemenu/sidemenu.component';



@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    NavmenuComponent,
    SidemenuComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    RippleModule,
    MenubarModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
