import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public clickCounter:number = 0;
  public name:string = '';

  constructor() { }

  ngOnInit() {
  }

  CountClick(){
    this.clickCounter++;
  }
  setClasses(){
    let myClasses = {
      active: this.clickCounter > 4, //true or false
      notActive: this.clickCounter <= 4,
    }
    return myClasses;
  }

}

//Service is a special reusable component to talk to the api 
