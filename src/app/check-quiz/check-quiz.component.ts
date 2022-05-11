
import { FormBuilder, FormGroup } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';


import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Quiz } from 'src/app/Model/quiz';
import { Question } from '../Model/question';
import { QuizService } from '../services/quiz.service';
import { QuestionService } from '../services/question.service';
import { FLAGS } from 'html2canvas/dist/types/dom/element-container';
import { FLOAT } from 'html2canvas/dist/types/css/property-descriptors/float';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';


@Component({
  selector: 'app-check-quiz',
  templateUrl: './check-quiz.component.html',
  styleUrls: ['./check-quiz.component.css']
})
export class CheckQuizComponent implements OnInit {
  temps: any = 0;
  quizForm: FormGroup;
  quiz: Quiz = new Quiz();
  quiz1: Quiz = new Quiz();
  quiz1qsts: Question[] = [];
  qt1: Question = new Question();
  ques: String[];
  qsts: Question[] = [];
  i: number = 0;
  quizs: Quiz[] = [];
  nbrQ: number = 2;
  compt: number;
  q: Question = new Question();
  termine: boolean = false;
  note: any = 0;
  sum: any = 0;

  constructor(private _service: QuizService, private serviceQuestion: QuestionService, private router: Router, private rout: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.createForm();
    this.cursor(30);
    console.log("temps" + this.quiz.timing);

    this.nbrQ = 2;

    this.compt = 10;

    const id = this.rout.snapshot.paramMap.get('id');
    this._service.getQuizById(+id).subscribe(quiz => this.quiz = quiz);
    //this.quiz.questions.forEach(a => this.sum += 2);

    // const obs = interval(30000);

    // obs.subscribe((d) =>{
    //  if(this.i < this.nbrQ ){
    //    this.compt=0;
    //     this.i++;
    //  }
    // });

  }

  startCountdown(seconds) {
    let counter = seconds;

    const interval = setInterval(() => {
      console.log(counter);
      if (counter >= 0) {
        counter--;
      }


      if (counter < 0) {

      }
    }, 1000);
  }


  back() {
    this.router.navigate(['/trainings'])
  }


  detailsQuiz(id: number) {
    this._service.getQuizById(id).subscribe(quiz => this.quiz = quiz);
    this.router.navigate(['/-quiz', id]);
  }

  getQuiz(n: number) {
    this._service.getQuizById(n).subscribe(quiz => this.quiz = quiz);
    return this.quiz;
  }

  rep(e) {

    this.nbrQ = this.quiz.questions.length;
    console.log(this.nbrQ);
    this.quiz.questions[this.i].writedResponse = e;


    if (this.quiz.questions[this.i].reponse == e) {
      this.note += this.quiz.questions[this.i].note;
    }

    if (this.i + 1 == this.nbrQ) {
      console.log(" final at " + this.i);
    }

  }

  cursor(e) {
    this.nbrQ = e;


  }





  valider() {

    this._service.doQuiz(1, this.quiz).subscribe((response) => { console.log(response) });
    this.termine = true;

  }

  next() {
    this.nbrQ = this.quiz.questions.length;
    if (this.i + 1 < this.nbrQ)
      this.i++;

  }

  prev() {
    // this.nbrQ=this.quiz.questions.length;
    if (this.i > 0)
      this.i--;

  }


  mv() {
    console.log("okkk");
  }

  onTimerFinished() {
    
      console.log(this.quiz.timing);
    const obs = interval(1000);

    obs.subscribe((d) => {
      if (this.temps < this.quiz.timing) {
        this.temps++;
        console.log(this.temps);
      }
      if (this.temps == this.quiz.timing) {
        this.termine = true;
      }
    });
  }

  generatePDF() {
    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      var imgWidth = 208;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4');
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('newPDF.pdf');
    });
  }

}
