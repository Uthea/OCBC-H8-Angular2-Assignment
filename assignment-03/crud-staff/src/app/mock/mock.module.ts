import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InMemoryDataService} from "./in-memory-data.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers : [
    InMemoryDataService
  ]
})
export class MockModule { }
