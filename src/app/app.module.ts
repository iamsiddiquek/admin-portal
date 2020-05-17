import { BrowserModule, HammerModule} from '@angular/platform-browser';

import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login/login.service';


@NgModule({
  /*This is for #Components*/
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent
  ],
  imports: [
    /*This is for angular modules*/
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDividerModule,
    MatButtonModule,
    MatToolbarModule
  ],
  /*This is for services*/
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
