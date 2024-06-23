import {Component, computed, inject} from '@angular/core';
import {CurrencyPipe} from "@angular/common";
import {InvestmentService} from "../services/investment.services";
@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
 private investmentService = inject(InvestmentService);
 results = computed(() => this.investmentService.resultsData());
}
