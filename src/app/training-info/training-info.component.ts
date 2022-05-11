import { Training } from 'src/app/Model/training';


import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { TrainingService } from '../services/training.service';
import { User } from '../Model/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-training-info',
  templateUrl: './training-info.component.html',
  styleUrls: ['./training-info.component.css']
})
export class TrainingInfoComponent implements OnInit {
  max = 5;
  rate = 2;
  isReadonly = false;
  eval: boolean;
  listTrainings: Training[] = [];
  training: Training = new Training();
  participated: boolean;
  user: User = new User();
  token: any = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhaG1lZGhhanNhaWRAZ21haWwuY29tIiwiaWF0IjoxNjUxNTQzMDE1LCJleHAiOjE2NTE2Mjk0MTV9.2Ff0lOzLo3a6D9M7Ks8um5EzkjhF5-JekVVDcJ-3rZ5q2giiwsHOpYWbSoEuUpME7uhmBwIafqSqBi_IItD9Dw";

  public form: FormGroup;
  rating3: any;
  showStars:boolean=false;


  constructor(private _service: TrainingService, private router: Router, private rout: ActivatedRoute, private fb: FormBuilder) {
    this.rating3 = 2;
    this.form = this.fb.group({
      rating: ['', Validators.required],
    })
  }
  
  ShowStars(){
    this.showStars=true;
  }


  ngOnInit(): void {
    console.log(this.training);
    this.user.id = 1;
    const id = this.rout.snapshot.paramMap.get('id');
    this.chekParicipation(this.user.id, +id);
    this._service.chechPerticipation(this.user.id, +id).subscribe(participated => this.participated = participated);
    this._service.getTrainingById(+id).subscribe(training => this.training = training);
    console.log(this.training);
this.rating3=this.training.note;
    this._service.getTrainingSuggestion(1).subscribe(listTrainings => this.listTrainings = listTrainings);
    if (this.listTrainings.length == 0) {
      this._service.fetchAll().subscribe(listTrainings => this.listTrainings = listTrainings);
    }

    this.rate=this.training.note;
    console.log(this.participated);

    console.log(this.training.subject);
    console.log(this.training.quiz);
  }


  chekParicipation(userId: number, trainingId: number) {

    this._service.chechPerticipation(userId, trainingId).subscribe(participated => this.participated = participated);

    // if(this.training.learners.length>0){
    // this.participated=true;
    // }
  }

  participate() {
    this._service.participate(this.user.id, this.training.id).subscribe((response) => { console.log(response) });
    this.participated = true;
  }

  departicipate() {
    this._service.departicipate(this.user.id, this.training.id).subscribe((response) => { console.log(response) });
    this.participated = false;
  }

  checkQuiz(id: number) {
    this.router.navigate(['/-quiz', id]);
  }

  evaluate(e) {
    this._service.evaluate(this.user.id, this.training.id, e).subscribe((response) => { console.log(response) });
    this.showStars=false;
    window.location.reload();
    

  }

 


}
