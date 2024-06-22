import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<{initialInvestment:number,duration:number,annualInvestment:number,expectedReturn:number}>()
  enteredInitialInvestment:string = '0';
  enteredAnnualInterest:string = '0';
  enteredExpectedReturn:string = '5';
  enteredDuration:string = '10';
  onSubmit(){
  this.calculate.emit({
    initialInvestment:+this.enteredInitialInvestment,
    annualInvestment: + this.enteredAnnualInterest,
    expectedReturn: + this.enteredExpectedReturn,
    duration:+ this.enteredDuration,
  });
  }
}
