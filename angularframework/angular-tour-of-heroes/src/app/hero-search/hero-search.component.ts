import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import{
  debounceTime, distinctUntilChanged, switchMap
}from 'rxjs/operators';

import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  heroes$!: Observable<Hero[]>
  //Subject can act as both observable & an observer.
  //please see this page 
  // https://www.tektutorialshub.com/angular/subjects-in-angular/
  private searchTerms = new Subject<string>();


  constructor(private heroService: HeroService) { }

  search(term: string): void{
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      //wait  300ms after each keystroke before considering the term
      debounceTime(300),

      //ignore new term if same as previous form
      distinctUntilChanged(),

      //switch to new search observable each time the term changes
      //whit switchMap i can make a many request but it all return the result
      // of the most recent http method call. Result from prior calls  are canceled and discared
      switchMap((term: string) => this.heroService.searchHeroes(term)),

    )
  }

}
