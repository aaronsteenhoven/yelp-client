import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { MaterialModule } from './../material'
import { MatIconModule, MatSidenavModule, MatButtonModule, MatListModule } from '@angular/material';
import { DataService } from '../services/data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MaterialModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ 
    HttpClient,
    DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
