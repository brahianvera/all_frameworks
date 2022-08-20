import { Component, OnInit } from '@angular/core';
import { Verb } from '../verb';

@Component({
  selector: 'app-verb',
  templateUrl: './verb.component.html',
  styleUrls: ['./verb.component.css']
})
export class VerbComponent implements OnInit {

  verb: Verb = {
      img:"hs",
      present:"how",
      past:"nice",
      past_part:"party"
  }

  constructor() { }


  ngOnInit(): void {

  }

}
