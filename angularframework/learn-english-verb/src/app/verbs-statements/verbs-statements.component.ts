import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-verbs-statements',
  templateUrl: './verbs-statements.component.html',
  styleUrls: ['./verbs-statements.component.css']
})
export class VerbsStatementsComponent implements OnInit {

  @Input() staments?: {
    past: string,
    present: string,
    past_part: string
  };

  constructor() { }

  ngOnInit(): void {

  }

}
