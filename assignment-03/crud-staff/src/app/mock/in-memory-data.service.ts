import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Staff} from "./staff";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const staff  : Staff[] = [
      {id: 1, title : "Software Engineer", firstName : "John", lastName: "Peter",  role : "Admin", email: "pantera@gmail.com", password : "test", confirmPassword : "test"}
    ]

    return {staff};
  }

}
