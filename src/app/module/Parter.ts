import { JobOffer } from "./JobOffer";

export class Partner
{
   
    id:number;
     name:string;
     email:string;
     password:string;
     note:number;
     address:string;
     logo:string;
     subscriptionDate:Date;
     type:string;
     disponible:boolean;
     desactivate:boolean;
     jobOffer:JobOffer[];
     description:String;
    
}