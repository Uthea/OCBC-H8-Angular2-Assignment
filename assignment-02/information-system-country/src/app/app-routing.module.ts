import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AllCountriesComponent} from "./all-countries/all-countries.component";
import {CountryDetailComponent} from "./country-detail/country-detail.component";

const routes : Routes = [
  {path: "", component : HomeComponent},
  {path: "all", component: AllCountriesComponent},
  {path: `detail/:id`, component: CountryDetailComponent}
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
