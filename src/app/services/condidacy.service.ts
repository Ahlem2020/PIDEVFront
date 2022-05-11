import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Condidacy } from '../module/condidacy';
import { Partner } from '../module/Parter';

@Injectable({
  providedIn: 'root'
})
export class CondidacyService {

  url:string='http://localhost:8083/women/condidacy/'

  constructor(private condidacy:HttpClient) { }

  public fetchCondidacy(id:number):Observable<Condidacy[]>{
    return this.condidacy.get<Condidacy[]>(this.url+'retrieve-user-condidacy/'+id)
  }

  public fetchOneCondidacy(id:number):Observable<Condidacy>{
    return this.condidacy.get<Condidacy>(this.url+'find-by-id/'+id)
  }


  public suggestion(id:number):Observable<Partner[]>{

    return this.condidacy.get<Partner[]>('http://localhost:8083/women/partner/suggestion/'+id);
      }

      public delete(id: number) {
        return this.condidacy.delete<Condidacy>(this.url + 'delete-condidacy/' + id);
      }
}
