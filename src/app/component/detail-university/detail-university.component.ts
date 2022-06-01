import { ParseError } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Condidacy } from 'src/app/module/condidacy';
import { Partner } from 'src/app/module/Parter';
import { CondidacyService } from 'src/app/services/condidacy.service';
import { UniversityService } from 'src/app/services/university.service';
import { UniversityComponent } from '../university/university.component';

@Component({
  selector: 'app-detail-university',
  templateUrl: './detail-university.component.html',
  styleUrls: ['./detail-university.component.css']
})
export class DetailUniversityComponent implements OnInit {

  
  constructor(private condidacyService:UniversityService,private router:Router) { 
    
  }

  max = 5;
  rate:number;
  
  isReadonly = false;
  partner:Partner=new Partner();
  listOfPartner:Partner[];
  

  ngOnInit(): void {

    this.condidacyService.findPartnerById(6).subscribe(partner=>this.partner=partner);
    this.condidacyService.suggestion(1).subscribe(Partner=>this.listOfPartner=Partner);
   
     }

  




  addC(){
    this.router.navigate(['/addC']);
  }

  detailUniversity(){
    this.router.navigate(['/detailUniversity']);
   
  }

  

  note(rate:number){
    this.condidacyService.updRating(1,rate).subscribe((response) =>{console.log(response)});
    console.log("kkk");
    this.ngOnInit();
  }


}
