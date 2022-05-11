import { ResumeComponent } from './resume/resume.component';
import { JobListComponent } from './job-list/job-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path :'JobList' , component : JobListComponent},
  {path :'Resume' , component: ResumeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule ]
})
export class AppRoutingModule { }
export const routingComponents =[JobListComponent,ResumeComponent];