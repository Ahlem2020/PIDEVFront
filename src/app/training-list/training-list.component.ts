import { User } from './../Model/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Training } from 'src/app/Model/training';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { Domain } from '../Model/domain';
import { TrainingService } from '../services/training.service';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent implements OnInit {

  user:User= new User();
  training:Training;
  sh_cat:boolean=false;
  sh_dur:boolean=false;
  listTrainings: Training[] = [];
  category:Domain;
  search_Text:any;
  domains = [ 'Couture',
    'Coiffure',
    'Cuisine',
    'Informatique',
    'Entreprenariat',
    'Architacture',
    'Marketing',
    'Sante',
    'Economie',
    'Communication',
   'Mecanique'];

  constructor(public  _service:TrainingService, private router:Router) { }

  ngOnInit(): void {
    this.user.id=1;
    this._service.fetchAll().subscribe((response) => {this.listTrainings = response; });
  
  }

  show_cat(){
    this.sh_cat=!this.sh_cat;
  }

  sh_duration(){
    this.sh_dur=!this.sh_dur;
  }

//   onItemChange(e){
//     this.category= e.target.value;
//     console.log(this.category);
//  }

private getTrainings(){
  this._service.fetchAll().subscribe(training => this.listTrainings = training);
}

 search(){
  if(this.search_Text== ""){
    this.ngOnInit();
  }
  else{
    this._service.search(this.user.id, this.search_Text.toLocaleLowerCase()).subscribe(training => this.listTrainings = training);
    // this._service.fetchAll().subscribe(training => this.listTrainings = training);
    //console.log(this.search_Text);
    // this.listTrainings=this.listTrainings.filter(res=>{ return res.subject.toLocaleLowerCase().match(this.search_Text.toLocaleLowerCase());
    // });      
  }      
}

onItemChange(e){
  this.category= e.target.value;
  if(this.category.toString()==""){
    this.ngOnInit();
  }
  else{
    console.log(this.category);
    this.listTrainings=this.listTrainings.filter(res=>{ return res.domain==this.category
    });      
  }      
}

showDetails(id:number){
    this.router.navigate(['/info', id]);
  }


  // filter(){
  //   this.listTrainings.filterPredicate = function(data, filter: string): boolean {
  //     return data.name.toLowerCase().includes(filter) || data.symbol.toLowerCase().includes(filter) || data.position.toString().includes(filter);
  // };
  // }

  filter(e){
    if(e=="All"){
      this._service.fetchAll().subscribe(training => this.listTrainings = training);
    }
    else{

      this._service.findByDomain(e).subscribe(training => this.listTrainings = training);
       
    }
  }



}
