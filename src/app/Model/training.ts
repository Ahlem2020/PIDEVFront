import { User } from './user';
import { Level } from './level';
import { Quiz } from 'src/app/Model/quiz';
import { Domain } from './domain';
export class Training{
    id:number;
    subject: String;
    description: String;
    startDate:Date;
    endDate: Date;
    nbreMax:number;
    nbreParticipation:number;
    note:number;
    nbEvaluation:number;
    domain:Domain;
    image:String;
    isCertified:boolean;
    trainerName:String;
    price:number;
    duration:number;
    level:Level;
    quiz:Quiz;
    learners:Array<User>;



}