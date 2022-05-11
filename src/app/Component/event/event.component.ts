import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Evenement } from 'src/app/Model/event';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(private event:EventService,private router: Router,private toast: NgToastService) {

  }

  listofevent:Evenement[];
  listofincomingevents:Evenement[];


loadeven(event:any){
  this.event.fetch(event.target.value).subscribe(evenement => this.listofevent = evenement);
  
}
  ngOnInit(): void {
    this.event.fetchAll().subscribe(evenement => this.listofevent = evenement);
    this.event.incoming().subscribe(evenement => this.listofincomingevents = evenement);
  }

  public participate(id_u:number,id_e:number) {
    if(this.event.participate(id_u,id_e).subscribe())
    this.toast.success({detail:"SUCCESS",summary:'Participation done',duration:5000});
    
    this.router.navigate(['/event']);
   
    window.location.reload();
  }
  incom(){
    
  
  }

}
