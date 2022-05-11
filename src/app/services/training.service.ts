import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Training } from 'src/app/Model/training';
import { Domain } from '../Model/domain';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  choixmenu : string  = 'A';
  public dataForm:  FormGroup;
  url: string = 'http://localhost:8083/women/training/'
  constructor(private http: HttpClient) { }

  public fetchAll(): Observable<Training[]> {
    return this.http.get<Training[]>(this.url + 'retrieve-all-training');
  }

  createData(t: Training):Observable<Object> {
    return this.http.post(this.url + 'save', t);
  }
  createData1(formData: FormData): Observable<any> {
    return this.http.post(this.url+'articles' , formData);
  }

  getTrainingById(id:number): Observable<Training>{
    return this.http.get<Training>(this.url + 'retrieveById/' + id);
  }

  getTrainingSuggestion(idUser:number): Observable<Training[]>{
    return this.http.get<Training[]>(this.url + 'suggestion/' + idUser);
  }


  GetByLearner(idUser:number): Observable<Training[]>{
    return this.http.get<Training[]>(this.url + 'GetByLearner/' + idUser);
  }



  updateTraining(t: Training): Observable<Training>{
    return this.http.put<Training>(this.url + 'change', t);
  }

  // addFile(id:number): Observable<Training>{
  //   return this.http.put<Training>(this.url + 'change', id);
  // }

  deleteTraining(id:number): Observable<Training>{
    return this.http.delete<Training>(this.url + 'delete/' + id);
  }

  participate(u:number, t:number): Observable<Training>{
    return this.http.post<Training>("http://localhost:8083/women/training/participe/" + u +"/" + t,null);
  }

  evaluate(u:number, t:number, ev:number): Observable<number>{
    return this.http.put<number>("http://localhost:8083/women/training/evaluate/" + u +"/" + t+"/" +ev,null);
  }

  departicipate(u:number, t:number): Observable<Training>{
    return this.http.put<Training>("http://localhost:8083/women/training/departicipe/" + u +"/" + t,null);
  }

  chechPerticipation(u:number, t:number): Observable<boolean>{
    return this.http.get<boolean>("http://localhost:8083/women/training/checkParticipation/" + u +"/" + t);
  }


  // search(idUser:number, txt: String): Observable<Training[]> {
  //   return this.http.get<Training[]>(this.url + 'searchTraining/'+idUser+'/'+txt);
  // }



  public upload(formData) {
    console.log("upload service function is called")
    console.log(formData)
    return this.http.post<FormData>(this.url, formData, {  
        reportProgress: true,  
        observe: 'events'  
      });  
  }

  saveT(formData: FormData): Observable<any>{
    return this.http.post(this.url+'saveT', formData);
  }


  public findByDomain(domain:Domain): Observable<Training[]> {
    return this.http.get<Training[]>(this.url + 'findByDomain/'+domain);
  }


  public search(idUser:number, str:String): Observable<Training[]> {
    return this.http.get<Training[]>(this.url + 'searchTraining/'+idUser+'/'+str);
  }



}
