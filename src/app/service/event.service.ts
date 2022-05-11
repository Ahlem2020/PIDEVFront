import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evenement } from '../Model/event';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }

  
public fetch(x:string):Observable<Evenement[]>{
  return  this.http.get<Evenement[]>('http://localhost:8083/women/event/get-eventbydesc/'+x);
}

public fetchAll():Observable<Evenement[]>{
  return  this.http.get<Evenement[]>('http://localhost:8083/women/event/get-eventsc');
}
public participate(id_u:number,id_e:number)
{
  return this.http.post<Evenement>("http://localhost:8083/women/event/partipatee_evente/"+id_e + "/"+id_u ,null);

}

public incoming():Observable<Evenement[]>{
  return  this.http.get<Evenement[]>('http://localhost:8083/women/event/get-incoming');
}
}
