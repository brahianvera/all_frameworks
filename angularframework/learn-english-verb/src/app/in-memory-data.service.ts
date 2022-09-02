import { Injectable } from '@angular/core';
import { Verb } from './verb';

 @Injectable({
  providedIn: 'root'
 })

export class InMemoryDataService {

  constructor() { }

  createDb(){
    const verbs = [
      { id:1, 
        times:{
          present:"BE",
          past: "was/were",
          past_part:"been"
        },
        statments:{
          past: "i was in paris france",
          present: "i am in paris france",
          past_part:"i have been in paris france"
        },
        url:"../assets/img/verbs/be.png"
      },
      { id:2, 
        times:{
          present:"play",
          past: "played",
          past_part:"played"
        },
        statments:{
          past: "i played soccer with my brothers",
          present: "i play soccer every sunday",
          past_part:"i have been playing soccer with my brothers"
        },
        url:"video/played.src"
      }
    ]
    return {verbs:verbs};
  }
  
  //gEN
  genId(verbs: Verb[]): number{
    // ...verbs, the three point indicates that is an spreed operator
    // In the next line on the part of Math.max the fist step is get all verb.id on array 
    // and after make it spread
    return verbs.length > 0 ? Math.max(...verbs.map(Verb =>Verb.id)) + 1 : 11; 
  }

}