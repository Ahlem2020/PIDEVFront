import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
show=false;


  ngOnInit(): void {
  }
  
showdrop()
{
  this.show= !this.show ;
}

  

}
