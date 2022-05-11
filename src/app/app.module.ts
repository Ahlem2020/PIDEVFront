import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CountdownModule } from 'ngx-countdown';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TrainingListComponent } from './training-list/training-list.component';
import { TrainingInfoComponent } from './training-info/training-info.component';
import { CheckQuizComponent } from './check-quiz/check-quiz.component';
import { EvaluateComponent } from './evaluate/evaluate.component';
import { DetailsTrainingComponent } from './details-training/details-training.component';
import { MyTrainingsComponent } from './my-trainings/my-trainings.component';
import { PdfQuizComponent } from './pdf-quiz/pdf-quiz.component';
import { FooterComponent } from './footer/footer.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RatingModule } from 'ngx-bootstrap/rating';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TrainingListComponent,
    TrainingInfoComponent,
    CheckQuizComponent,
    EvaluateComponent,
    DetailsTrainingComponent,
    MyTrainingsComponent,
    PdfQuizComponent,
    FooterComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    CountdownModule,
    NgxStarRatingModule,
    BrowserAnimationsModule,
    RatingModule.forRoot(),
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
