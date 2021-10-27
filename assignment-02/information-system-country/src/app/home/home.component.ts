import {Component, OnInit} from '@angular/core';
import {CountryService} from "../country.service";
import {Country} from "../country";
import {DecimalPipe} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countryByPopulation: Country[] = [];
  countryByArea: Country[] = [];

  constructor(public countryService: CountryService) {
  }

  ngOnInit(): void {
    this.getCountryByArea(3);
    this.getCountryByPopulation(3);
  }

  getCountryByPopulation(n: number): void {
    this.countryService.getMostPopulatedCountries(n)
      .subscribe(countries => this.countryByPopulation = countries);
  }
  getCountryByArea(n: number): void {
    this.countryService.getLargestCountries(n)
      .subscribe(countries => this.countryByArea = countries);
  }


}
