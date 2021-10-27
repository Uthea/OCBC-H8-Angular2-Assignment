import { Component, OnInit } from '@angular/core';
import {CountryService} from "../country.service";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {Country} from "../country";

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  country? : Country;
  constructor(
    private countryService: CountryService,
    private location : Location,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCountry();
  }

  getCountry() : void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.countryService.getCountry(id)
      .subscribe(country => this.country = country);
  }

  goBack() {
    this.location.back();
  }
}
