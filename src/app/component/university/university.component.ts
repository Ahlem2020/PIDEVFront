import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Partner } from 'src/app/module/Parter';
import { UniversityService } from 'src/app/services/university.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {

  constructor(private condidacyService:UniversityService,private router:Router) { }
 listOfPartner:Partner[];
 max = 5;
 isReadonly = false;
 rate:number;
  ngOnInit(): void {
  
   this.condidacyService.fetchAll().subscribe(Partner=>this.listOfPartner=Partner);

  }

 
  
  filter(name){
    if(name=="All"){
      this.condidacyService.fetchAll().subscribe(Partner=>this.listOfPartner=Partner);
    }
    else{

      this.condidacyService.filter(name).subscribe(Partner=>this.listOfPartner=Partner);
      // this.listTrainings=this.listTrainings.filter(res=>{ return res.domain==e
      // });  
    }
  }
  
  detailUniversity(){
    this.router.navigate(['/detailUniversity']);
  }

}
