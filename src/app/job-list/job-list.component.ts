import { JobofferModule } from './../model/joboffer/joboffer.module';
import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder} from '@angular/forms';

import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  listOfJobOffers : JobofferModule[];
  jobOfferForm : FormGroup;
  show = false;
  constructor(private httpService:HttpService ) { }

  ngOnInit(): void {
    
    this.httpService.fetchAll().subscribe(jobOffer =>this.listOfJobOffers =jobOffer);
    
  }



  deleteJobOffer(idJOffer:number){
    this.httpService.deleteJobOffer(idJOffer).subscribe();
    this.ngOnInit(); 
   }
   showAddJobOffer(){
    this.show = !this;
  }
}
