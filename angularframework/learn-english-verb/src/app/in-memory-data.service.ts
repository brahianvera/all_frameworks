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
          present_perfec:"been"
        },
        statments:{
          past: "i was in paris france",
          present: "i am in paris france",
          present_perfec:"i have been in paris france since 1984"
        },
        url:"../assets/img/verbs/be.png"
      },
      { id:2, 
        times:{
          present:"play",
          past: "played",
          present_perfec:"played"
        },
        statments:{
          past: "he played soccer with my brothers last sunday",
          present: "he plays soccer every sunday",
          present_perfec:"he has been played soccer with my brothers"
        },
        url:"../assets/img/verbs/play.jpg"
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