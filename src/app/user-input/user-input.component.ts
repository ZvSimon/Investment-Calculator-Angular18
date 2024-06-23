import {Component,signal} from '@angular/core';

import {InvestmentService} from "../services/investment.services";


@Component({
  selector: 'app-user-input',
  standalone: false,

  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');       // 10 years
constructor (private investmentService: InvestmentService){}
  onSubmit() {
    this.investmentService.calculateInvestmentResults({
        initialInvestment: Number(this.enteredInitialInvestment()),
        annualInvestment: Number(this.enteredAnnualInvestment()),
        expectedReturn: Number(this.enteredExpectedReturn()),
        duration: Number(this.enteredDuration())
      }
    );
  this.enteredInitialInvestment.set('0');
  this.enteredAnnualInvestment.set('0');
  this.enteredExpectedReturn.set('5');
  this.enteredDuration.set('10');
  }



}
