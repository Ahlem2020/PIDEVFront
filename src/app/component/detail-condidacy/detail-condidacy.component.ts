import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Condidacy } from 'src/app/module/condidacy';
import { Partner } from 'src/app/module/Parter';
import { CondidacyService } from 'src/app/services/condidacy.service';

@Component({
  selector: 'app-detail-condidacy',
  templateUrl: './detail-condidacy.component.html',
  styleUrls: ['./detail-condidacy.component.css']
})
export class DetailCondidacyComponent implements OnInit {

  constructor(private condidacyService:CondidacyService,private router:Router) { 
    
  }
  max = 5;
  rate:number;
  
  isReadonly = false;
  partner:Condidacy=new Condidacy();
  listOfPartner:Partner[];

  ngOnInit(): void {

    this.condidacyService.fetchOneCondidacy(4).subscribe(partner=>this.partner=partner);
    this.condidacyService.suggestion(1).subscribe(Partner=>this.listOfPartner=Partner);
  }


  addC(){
    this.router.navigate(['/addC']);
  }

  detailUniversity(){
    this.router.navigate(['/detailUniversity']);
  }

  


  delete(id: number) {
    this.condidacyService.delete(id).subscribe();
    this.router.navigate(['/showC']);
 }

}
