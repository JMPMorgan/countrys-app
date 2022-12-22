import { Component } from '@angular/core';
import { CountryService } from '../../services/country-service.service';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-per-country',
  templateUrl: './per-country.component.html'
})
export class PerCountryComponent {
  term:string=''
  hasError:boolean=false;
  countries:Country[]=[];

  constructor(private countryService:CountryService){

  }
  search(term:string){
    this.hasError=false;
    this.term=term;
    this.countryService.searchCoutry(this.term)
    .subscribe((countries:Country[])=>{
      this.hasError=false;
      this.countries=countries;
    },(err)=>{
      console.log(err);
      this.hasError=true;
      this.countries=[];
    });
  }

  suggestions(term:string){
    
  }
}
