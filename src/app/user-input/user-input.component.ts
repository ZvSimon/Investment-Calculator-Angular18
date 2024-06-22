import {Component,output,signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InvestmentInputModel} from "../model/investment-input.model";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  calculate = output<InvestmentInputModel>();
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');       // 10 years
  onSubmit(){
  this.calculate.emit({
    initialInvestment:Number(this.enteredInitialInvestment()),
    annualInvestment: Number(this.enteredAnnualInvestment()),
    expectedReturn: Number(this.enteredExpectedReturn()),
    duration:Number(this.enteredDuration()),
  });
  }



}
