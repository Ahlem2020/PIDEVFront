import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DonationSpaceComponent } from './Component/donation-space/donation-space.component';
import { JackpotComponent } from './Component/jackpot/jackpot.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventComponent } from './Component/event/event.component';
import { DonersComponent } from './Component/doners/doners.component';
import { SuggestedComponent } from './Component/suggested/suggested.component';
import { NgToastModule } from 'ng-angular-popup';
import { SilderComponent } from './Component/silder/silder.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DonationSpaceComponent,
    JackpotComponent,
    EventComponent,
    DonersComponent,
    SuggestedComponent,
    SilderComponent
  ],
  imports: [
    BrowserModule   ,
    AppRoutingModule,
    HttpClientModule ,
    NgToastModule ,
    ReactiveFormsModule,
    
    FormsModule,
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
