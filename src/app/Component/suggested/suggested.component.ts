import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jackpot } from 'src/app/Model/jackpot';
import { JackpotService } from 'src/app/service/jackpot.service';

@Component({
  selector: 'app-suggested',
  templateUrl: './suggested.component.html',
  styleUrls: ['./suggested.component.css']
})
export class SuggestedComponent implements OnInit {

  constructor(private jackpotservice: JackpotService,private router: Router) { }
  listofjackpots: Jackpot[];
  ngOnInit(): void {
    this.jackpotservice.fetchlowerjacks().subscribe(jackpot => this.listofjackpots = jackpot);
  }

  donate(id:number)
  {

     
   
    this.router.navigate(['/DonSpace']);
    console.log(id);
    console.log("aaa");
  }


}
