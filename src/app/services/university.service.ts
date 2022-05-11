import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


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

      public addCondidacy(id:number,idModule:number):Observable<Condidacy>{
        return this.condidacy.post<Condidacy>('http://localhost:8083/women/condidacy/add-condidacy/'+id+'/'+idModule,null);
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




  public getRate(id:number):Observable<number>{
    return this.condidacy.get<number>(this.url+'rating/'+id);
  }
}
