import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment:string = '0';
  enteredAnnualInterest:string = '0';
  enteredExpectedReturn:string = '5';
  enteredDuration:string = '10';
  onSubmit(){
console.log(this.enteredInitialInvestment);
console.log(this.enteredAnnualInterest);
console.log(this.enteredExpectedReturn);
console.log(this.enteredDuration);
  }
}
