import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CondidancyModule } from '../model/condidancy/condidancy.module';

@Injectable({
  providedIn: 'root'
})
export class JobCondServiceService {
  url:string='http://localhost:8083/women/condidacy/'
  constructor(private http:HttpClient              ) { }
  public fetchAll():Observable<CondidancyModule[]>{
    return this.http.get<CondidancyModule[]>(this.url+ '/retrieve-condidacy');
}
public addCondidancy (condidancy:CondidancyModule){

  return this.http.post<CondidancyModule>(this.url+'add-condidacy',condidancy);
}

public deleteCondidancy (id:number){

  return this.http.delete<CondidancyModule>(this.url+'/delete-condidacy'+id);
}
}
