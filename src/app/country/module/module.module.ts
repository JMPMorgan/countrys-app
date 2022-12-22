import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PerCapitalComponent } from '../pages/per-capital/per-capital.component';
import { PerCountryComponent } from '../pages/per-country/per-country.component';
import { PerRegionComponent } from '../pages/per-region/per-region.component';
import { CountryComponent } from '../pages/country/country.component';
import { RouterModule } from '@angular/router';
import { CountryTableComponent } from '../components/country-table/country-table.component';
import { CountryInputComponent } from '../components/country-input/country-input.component';



@NgModule({
  declarations: [
    PerCapitalComponent,
    PerCountryComponent,
    PerRegionComponent,
    CountryComponent,
    CountryTableComponent,
    CountryInputComponent
  ],
  exports:[
    PerCapitalComponent,
    PerCountryComponent,
    PerRegionComponent,
    CountryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class CountryModule { }
