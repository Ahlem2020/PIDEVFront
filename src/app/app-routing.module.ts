import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCondidacyComponent } from './component/add-condidacy/add-condidacy.component';
import { DetailCondidacyComponent } from './component/detail-condidacy/detail-condidacy.component';
import { DetailUniversityComponent } from './component/detail-university/detail-university.component';
import { ShowCondidacyComponent } from './component/show-condidacy/show-condidacy.component';
import { UniversityComponent } from './component/university/university.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path: 'university' , component: UniversityComponent,
   },

   {
    path: 'home' , component: HomeComponent,
   },
   {
    path: 'addC' , component: AddCondidacyComponent,
   },

   {
    path: 'detailUniversity' , component: DetailUniversityComponent
   },
   {
    path: 'showC' , component: ShowCondidacyComponent
   },
   
   {
    path: 'detailCondidacy' , component: DetailCondidacyComponent
   }

  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
