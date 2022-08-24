import { Component, OnInit,Input } from '@angular/core';
import { Verb } from '../verb';

@Component({
  selector: 'app-verb',
  templateUrl: './verb.component.html',
  styleUrls: ['./verb.component.css']
})
export class VerbComponent implements OnInit {
  verb:Verb;

  constructor() { }


  ngOnInit(): void {

  }

}
