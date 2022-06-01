

import { JobOffer } from "./JobOffer";
import { Module } from "./Module";
import { User } from "./User";

enum Type{
    	JOB,
	EDUCATION
}

enum State{
	In_Progress,Accepted,Refused
}

export class Condidacy{
id:number;
created_at:Date;
state:State;
type:Type;
score:number;
interview_date:Date;
module:Module;
user:User;
jobOffer:JobOffer;


}