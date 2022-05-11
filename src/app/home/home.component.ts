import { Component, OnInit } from '@angular/core';
import { Partner } from '../module/Parter';
import { UniversityService } from '../services/university.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private condidacyService:UniversityService) { 
    
  }
  listOfPartner:Partner[];

  ngOnInit(): void {

    this.condidacyService.suggestion(1).subscribe(Partner=>this.listOfPartner=Partner);
  }

}
