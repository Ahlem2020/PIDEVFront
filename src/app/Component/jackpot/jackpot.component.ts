import { Component, EventEmitter, OnInit, Output   } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Jackpot } from 'src/app/Model/jackpot';
import { JackpotService } from 'src/app/service/jackpot.service';

@Component({
  selector: 'app-jackpot',
  templateUrl: './jackpot.component.html',
  styleUrls: ['./jackpot.component.css']
})
export class JackpotComponent implements OnInit {

  constructor(private jackpotservice: JackpotService,private router: Router,private toast: NgToastService) { }
 
  listofjackpots: Jackpot[];
  x:number;
  ngOnInit(): void {
    this.jackpotservice.fetchsimple().subscribe(jackpot => this.listofjackpots = jackpot);

  }


  donate(id:number)
  {

     
   
    this.router.navigate(['/DonSpace']);
    console.log(id);
    console.log("aaa");
  }

  
loadeven(event:any){
  this.jackpotservice.reasearch(event.target.value).subscribe(jackpot => this.listofjackpots = jackpot);

}

}
