import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Verb } from './verb';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerbService {
  
  
  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }
  private verbsUrl = "api/verbs";
  constructor(private http: HttpClient) { }


  getVerb(id: number): Observable<Verb>{
    const url =`${this.verbsUrl}`;
    return this.http.get<Verb>(url);
  }
}
