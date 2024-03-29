import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Verb } from '../verb';
import { VerbService } from '../verb.service';

@Component({
  selector: 'app-verb',
  templateUrl: './verb.component.html',
  styleUrls: ['./verb.component.css']
})
export class VerbComponent implements OnInit {
  @Input() verb?: Verb;
  verbs: Verb[]  = [];

  constructor(
    private route: ActivatedRoute,
    private verbService: VerbService
  ) { }


  ngOnInit(): void {
    this.getVerb();
  }


  getVerb(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // the word "verb" before at the equal an lower sing means that is a parameter of a arrow function
    // the this.verb is a verb of this class 
    // the last verb is the parameter previously give to function arrow
    this.verbService.getVerb(id).subscribe(verb => this.verb = verb);
  }

}
