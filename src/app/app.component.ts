import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTitle = "Simran";
  hindi:      number = 0;
  english:    number = 0;
  math:       number = 0;
  science:    number = 0;
  punjabi:    number = 0;
  total:      number = 0;
  percentage: number = 0;
  maxMarks:   number = 500;
  message:    any;
  ngOnInit(){
    this.hindi = 50;
    this.english = 90;
    this.math = 70;
    this.science = 50;
    this.punjabi = 42;
    
    this.setMarks(this.hindi, this.english, this.math, this.science, this.punjabi);
    this.calcPercentage();
    this.message = this.displayMessage();

  }
  setMarks(hindi:number, english:number, math:number, science:number, punjabi:number){
    this.total = hindi + english + math + science + punjabi;
  }

  calcPercentage(){
    this.percentage = this.total / 100 * this.maxMarks;
  }

  displayMessage(){
    return "Your Total Marks= " + this.total + "and your percentage is " +  this.percentage
  }
  
  
}
