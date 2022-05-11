import { HttpClient ,HttpHeaders} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Don } from '../Model/don';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class DonService {

  constructor(private http:HttpClient) { }
 

  public adddon(don:Don,id_u:number,id_j:number){
    return this.http.post<Don>('http://localhost:8083/women/don/ajout-don/'+id_j+'/'+id_u , don );
  }

  public bestvolunter():Observable<User[]>{
    return this.http.get<User[]>('http://localhost:8083/women/don/bestdons');
  }
  chargeCard(token: string,amount:string) {
    const headers = new HttpHeaders({'token': token, 'amount': amount});
    headers.set("Access-Control-Allow-Origin","*");
    headers.set( "Access-Control-Allow-Headers", "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'");
    headers.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
 
    headers.set("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With, remember-me");

  headers.append('GET', 'POST');
    this.http.post('http://localhost:8083/women/don/charge', {}, {headers: headers})
      .subscribe(resp => {
        console.log(resp);
      })
  
}
}