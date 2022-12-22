import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountryService } from '../../services/country-service.service';

@Component({
  selector: 'app-per-capital',
  templateUrl: './per-capital.component.html'
})
export class PerCapitalComponent {
  term:string=''
  hasError:boolean=false;
  countries:Country[]=[];

  constructor(private countryService:CountryService){

  }
  search(term:string){
    this.hasError=false;
    this.term=term;
    this.countryService.searchCapital(this.term)
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
