import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl:string='https://restcountries.com/v3.1';

  constructor(private http:HttpClient) { }

  searchCoutry(country:string):Observable<Country[]>{
    const url=`${this.apiUrl}/name/${country}`;
    return this.http.get<Country[]>(url);
  }

  searchCapital(capital:string):Observable<Country[]>{
    const url=`${this.apiUrl}/capital/${capital}`;
    return this.http.get<Country[]>(url);
  }
}
