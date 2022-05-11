import { MyTrainingsComponent } from './my-trainings/my-trainings.component';

import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingListComponent } from './training-list/training-list.component';
import { TrainingInfoComponent } from './training-info/training-info.component';
import { CheckQuizComponent } from './check-quiz/check-quiz.component';
import { EvaluateComponent } from './evaluate/evaluate.component';
import { DetailsTrainingComponent } from './details-training/details-training.component';
import { PdfQuizComponent } from './pdf-quiz/pdf-quiz.component';

const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  // Training
  {path: 'trainings' , component: TrainingListComponent},
  {path: 'info/:id' , component: TrainingInfoComponent},
  {path: '-quiz/:id' , component: CheckQuizComponent},
  {path: 'evaluate/:id' , component: EvaluateComponent},
  {path: 'details/:id', component: DetailsTrainingComponent},
  {path: 'my-trainings', component: MyTrainingsComponent},
  {path: 'pdf' , component: PdfQuizComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
