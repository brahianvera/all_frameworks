import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-verbs-times',
  templateUrl: './verbs-times.component.html',
  styleUrls: ['./verbs-times.component.css']
})
export class VerbsTimesComponent implements OnInit {

  @Input() times = {};
  
  constructor() { }

  ngOnInit(): void {
  }

}
