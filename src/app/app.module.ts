import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {AppComponent} from "./app.component";
import {UserInputComponent} from "./user-input/user-input.component";
import {FormsModule} from "@angular/forms";

import {BrowserModule} from "@angular/platform-browser";
import {InvestmentResultsComponent} from "./investment-results/investment-results.component";

@NgModule({
  declarations: [HeaderComponent,AppComponent,UserInputComponent,InvestmentResultsComponent],

  imports : [BrowserModule,FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
