import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Country} from "./country";
import {COUNTRIES} from "./mock-contries";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  getCountry(id : number) : Observable<Country> {
    const country = COUNTRIES.find(c => c.id == id)!;
    return of(country);
  }

  getCountries() : Observable<Country[]> {
    return of(COUNTRIES);
  }

  getMostPopulatedCountries(n : number) : Observable<Country[]> {
    return of(
      COUNTRIES.sort((a, b) => b.population - a.population)
        .slice(0, n)
    )
  }

  getLargestCountries(n : number) : Observable<Country[]> {
    return of(
      COUNTRIES.sort((a, b) => b.area - a.area)
        .slice(0, n)
    )
  }

}
