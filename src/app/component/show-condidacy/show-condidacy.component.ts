import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Condidacy } from 'src/app/module/condidacy';
import { Partner } from 'src/app/module/Parter';
import { CondidacyService } from 'src/app/services/condidacy.service';

@Component({
  selector: 'app-show-condidacy',
  templateUrl: './show-condidacy.component.html',
  styleUrls: ['./show-condidacy.component.css']
})
export class ShowCondidacyComponent implements OnInit {

  constructor(private condidacyService:CondidacyService,private router:Router) { }
partner:Partner=new Partner();
  listOfCondidacy:Condidacy[];
  ngOnInit(): void {
    this.condidacyService.fetchCondidacy(2).subscribe(Partner=>this.listOfCondidacy=Partner);
     
  }

  detailC(){
    this.router.navigate(['/detailCondidacy']);
  }



}
