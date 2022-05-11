import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Training } from '../Model/training';
import { TrainingService } from '../services/training.service';

@Component({
  selector: 'app-details-training',
  templateUrl: './details-training.component.html',
  styleUrls: ['./details-training.component.css']
})
export class DetailsTrainingComponent implements OnInit {

  listTrainings: Training[] = [];
  training:Training=new Training();

  constructor(private _service: TrainingService, private router:Router, private rout: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.rout.snapshot.paramMap.get('id');
    this._service.getTrainingById(+id).subscribe(training => this.training = training);
    console.log(this.training.id);
  }

}
