import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Condidacy } from 'src/app/module/condidacy';
import { Module } from 'src/app/module/Module';
import { User } from 'src/app/module/User';
import { UniversityService } from 'src/app/services/university.service';

@Component({
  selector: 'app-add-condidacy',
  templateUrl: './add-condidacy.component.html',
  styleUrls: ['./add-condidacy.component.css']
})
export class AddCondidacyComponent implements OnInit {

  constructor(private condidacyService:UniversityService ,private fb: FormBuilder) { }
  condidacyForm: FormGroup;
  u:User;
  listOfModule:Module[];
  ngOnInit(): void {
    this.condidacyService.findUserById(1).subscribe(module => this.u = module);

    this.condidacyService.modulePartner(6).subscribe(module=>this.listOfModule=module);
    this.condidacyForm = this.fb.group({
      module: ['']
     
    });

  }
  

  handelSubmit() {
    this.condidacyService.addCondidacy(1,this.condidacyForm.value).subscribe();
    console.log(this.condidacyForm.value);
    
    
    this.ngOnInit();
  }

 

  
  

}
