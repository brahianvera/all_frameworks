import { Component, OnInit } from '@angular/core';
import { VerbService } from '../verb.service';
import { Verb } from '../verb';

@Component({
  selector: 'app-verbs-list',
  templateUrl: './verbs-list.component.html',
  styleUrls: ['./verbs-list.component.css']
})

export class VerbsListComponent implements OnInit {

  verbs: Verb[] = [];
  //inject code in the constructor, dependency injection
  constructor(
    private verbService: VerbService
  ) { }

  ngOnInit(): void {

  }

  getVerbs(): void{
    this.verbService.getVerbs().subscribe(Verbs => this.verbs = Verbs);
  }

}
