import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

 @Injectable({
  providedIn: 'root'
 })

export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const verbs = [
      { id:1, 
        verb:{
          present:"be",
          past: "was/were",
          past_part:"been"
        },
        url:"video/img.src"
      }
    ]
    return verbs;
  }
}