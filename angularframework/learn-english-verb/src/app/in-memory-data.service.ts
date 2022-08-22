import { Injectable, VERSION } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Verb } from './verb';

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
      },
      { id:2, 
        verb:{
          present:"play",
          past: "played",
          past_part:"played"
        },
        url:"video/played.src"
      }
    ]
    return verbs;
  }
  
  //gEN
  genId(verbs: Verb[]): number{
    // ...verbs, the three point indicates that is an spreed operator
    // In the next line on the part of Math.max the fist step is get all verb.id on array 
    // and after make it spread
    return verbs.length > 0 ? Math.max(...verbs.map(Verb =>Verb.id)) + 1 : 11; 
  }

}