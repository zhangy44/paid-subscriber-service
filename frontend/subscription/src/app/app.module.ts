import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { GridsysComponent } from './gridsys/gridsys.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavcontentComponent } from './sidenavcontent/sidenavcontent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GridsysComponent,
    SidenavComponent,
    SidenavcontentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
