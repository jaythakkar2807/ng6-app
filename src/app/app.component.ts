import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(){}

  heros = [
    new Hero(1, "One"),
    new Hero(2, "Two")
  ];

  // implement OnInit's `ngOnInit` method
  ngOnInit() { this.logIt(`OnInit`); }
  ngOnChanges() { this.logIt(`ngOnChange`);}

  Counter = 5;

  increment() {
    this.Counter++;
  }
  decrement() {

    if(this.Counter == 0)
    {
      
    }
    else
    {
      this.Counter--;
    }

  }

  logIt(msg: string) {
    console.log(msg);
  }

  title = 'Tours of Heros';
  myHero = this.heros[0].name;
}
