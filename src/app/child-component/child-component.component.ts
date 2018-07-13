import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  template: `
    <h1>Counter : {{counter}}</h1>
  `
})
export class ChildComponentComponent implements OnInit {

  constructor() { }

  @Input() counter: number;

  ngOnInit() {
  }

}
