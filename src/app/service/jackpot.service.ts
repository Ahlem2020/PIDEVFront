import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { Jackpot } from '../Model/jackpot';

@Injectable({
  providedIn: 'root'
})
export class JackpotService {

  constructor(private http:HttpClient) { }


  public fetchencours():Observable<Jackpot[]>{

    return  this.http.get<Jackpot[]>('http://localhost:8083/women/jackpot/jackpots-encours');
    
  }
  public fetchALL():Observable<Jackpot[]>{

    return  this.http.get<Jackpot[]>('http://localhost:8083/women/jackpot/jackpots');
    
  }


  public fetchsimple():Observable<Jackpot[]>{

    return  this.http.get<Jackpot[]>('http://localhost:8083/women/jackpot/sjackpots');
    
  }
  public fetchlowerjacks():Observable<Jackpot[]>{

    return  this.http.get<Jackpot[]>('http://localhost:8083/women/jackpot/lowerjack');
    
  }

  public reasearch(des:string):Observable<Jackpot[]>{

    return  this.http.get<Jackpot[]>('http://localhost:8083/women/jackpot/resbydes/'+des);
    
  }


 
}
