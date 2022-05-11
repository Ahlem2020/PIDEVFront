import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonationSpaceComponent } from './Component/donation-space/donation-space.component';
import { DonersComponent } from './Component/doners/doners.component';
import { EventComponent } from './Component/event/event.component';
import { JackpotComponent } from './Component/jackpot/jackpot.component';
import { SilderComponent } from './Component/silder/silder.component';
import { SuggestedComponent } from './Component/suggested/suggested.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { 
    path:'DonSpace',
    component: DonationSpaceComponent,
   },
   { 
    path:'',
    component: HomeComponent,
   },
   { 
    path:'home',
    component: HomeComponent,
   },
   { 
    path:'jackpot',
    component: JackpotComponent,
   }
,
{ 
  path:'event',
  component: EventComponent,
 }
 ,
{ 
  path:'doners',
  component: DonersComponent,
 }
 ,
 { 
   path:'suggj',
   component: SuggestedComponent,
  },
  { 
    path:'slider',
    component: SilderComponent,
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
