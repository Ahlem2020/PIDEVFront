import { Training } from 'src/app/Model/training';
import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../services/training.service';
import { Router } from '@angular/router';
import { User } from '../Model/user';

@Component({
  selector: 'app-my-trainings',
  templateUrl: './my-trainings.component.html',
  styleUrls: ['./my-trainings.component.css']
})
export class MyTrainingsComponent implements OnInit {
  listTrainings: Training[] = [];
  user:User=new User();
  constructor(public  _service:TrainingService, private router:Router) { }

  ngOnInit(): void {
    this.user.id=1;
    this._service.GetByLearner(this.user.id).subscribe((response) => {this.listTrainings = response; });
  }

}
