import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniversityComponent } from './component/university/university.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddCondidacyComponent } from './component/add-condidacy/add-condidacy.component';
import { DetailUniversityComponent } from './component/detail-university/detail-university.component';
import { FooterComponent } from './component/footer/footer.component';
import { ShowCondidacyComponent } from './component/show-condidacy/show-condidacy.component';
import { DetailCondidacyComponent } from './component/detail-condidacy/detail-condidacy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RatingModule } from 'ngx-bootstrap/rating';


import { environment } from "../environments/environment";
import { initializeApp } from 'firebase/app';
initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    UniversityComponent,
    AddCondidacyComponent,
    DetailUniversityComponent,
    FooterComponent,
    ShowCondidacyComponent,
    DetailCondidacyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RatingModule.forRoot()
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
