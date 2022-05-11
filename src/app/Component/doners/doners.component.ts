import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/user';
import { DonService } from 'src/app/service/don.service';

@Component({
  selector: 'app-doners',
  templateUrl: './doners.component.html',
  styleUrls: ['./doners.component.css']
})
export class DonersComponent implements OnInit {

  constructor(private don:DonService) { }
  listofdons:User[];

  ngOnInit(): void {
    this.don.bestvolunter().subscribe(evenement => this.listofdons = evenement);
  }

}
