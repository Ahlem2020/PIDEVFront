import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import  { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Condidacy } from '../module/condidacy';
import { Module } from '../module/Module';
import { Partner } from '../module/Parter';
import { User } from '../module/User';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  url:string='http://localhost:8083/women/partner/'
  constructor(private condidacy:HttpClient) { }

  public fetchAll():Observable<Partner[]>{
    return this.condidacy.get<Partner[]>(this.url+'retrieve-partner')
  }

  public filter(name:string):Observable<Partner[]>{

return this.condidacy.get<Partner[]>('http://localhost:8083/women/module/filter-module/'+name);


  }

  public suggestion(id:number):Observable<Partner[]>{

    return this.condidacy.get<Partner[]>(this.url+'suggestion/'+id);
      }

      public addCondidacy(id:number,m:Module):Observable<Condidacy>{
        return this.condidacy.post<Condidacy>('http://localhost:8083/women/condidacy/add-condidacy/'+id,m);
      }

      

 
      public findUserById(id:number):Observable<User>{
        return this.condidacy.get<User>('http://localhost:8083/women/user/get-UsersById/'+id);

      }



    public modulePartner(id:number):Observable<Module[]>{
   return this.condidacy.get<Module[]>('http://localhost:8083/women/module/module-partner/'+id);
}


   public findPartnerById(id:number):Observable<Partner>{
      return this.condidacy.get<Partner>(this.url+'find-partner-id/'+id);
}


public updRating(id:number,rate:number):Observable<number>{
  return this.condidacy.put<number>(this.url+'rate/'+id+'/'+rate,null);
}

public sendNotification(id:number):Observable<Object>{
  let NotificationData={
    "notification" :{
      "title":"Condidacy added",
      "body":"Aded succesfully !",
      "icon":"./assets/img/logo1.png"
  },
  "to":"etetxXORfA_nr-2Nc-W0ok:APA91bF5IJXkRRrDZ6WJ4M3-72Px0yUJkQD48Jyg2sIDZW61nvBnitcEwuvSYOrR3_-JQfYnT4Dn5AoDkgrsCL5jVEPcA9q6h_LOlIx-rH_BrIJWl1Buuj5mp1ZQwmuKfzUrBneLmhu8"
  }

  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'key=AAAAuYOk9mc:APA91bGOY-vsOOdxVSIqATYUmaXFwdR5BcBJYpXxlNcdj5y_XGAwBDIJxOdz0JJY8XoTh5lmIp22cZ_y8-6bvJQMk-_ptorMoo3plr0FtbZJbbs30xy75JrcFK7w84at3WpEsL7dJ8E9' });
let options = { headers: headers };
  return this.condidacy.post<Object>('https://fcm.googleapis.com/fcm/send',NotificationData,options);
}




  public getRate(id:number):Observable<number>{
    return this.condidacy.get<number>(this.url+'rating/'+id);
  }
}
