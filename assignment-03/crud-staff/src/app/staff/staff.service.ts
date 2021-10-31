import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Staff} from "../mock/staff";
import {catchError, tap} from "rxjs/operators";
import {ErrorHandlerService} from "../error-handler/error-handler.service";

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  // private staffUrl : string = "api/staff"
  private staffUrl : string = "http://localhost:4000/Users"
  private httpOptions = {
    headers : new HttpHeaders({'Content-Type' : 'application/json'})
  };

  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlerService) { }

  getAllStaff() : Observable<Staff[]> {
    return this.http.get<Staff[]>(this.staffUrl, this.httpOptions)
      .pipe(
        catchError(this.errorHandler.handleError<Staff[]>([]))
      );
  }

  getStaff(id : number) : Observable<Staff> {
    const url = `${this.staffUrl}/${id}`;
    return this.http.get<Staff>(url, this.httpOptions)
      .pipe(
        catchError(this.errorHandler.handleError<Staff>())
      );
  }

  updateStaff (staff : Staff) : Observable<any> {
    const newUrl = `${this.staffUrl}/${staff.id}`
    return this.http.put(newUrl, staff, this.httpOptions)
      .pipe(
        catchError(this.errorHandler.handleError<any>())
      );
  }

  deleteStaff(id : number) : Observable<any> {
    const newUrl = `${this.staffUrl}/${id}`
    return this.http.delete(newUrl, this.httpOptions)
      .pipe(
        catchError(this.errorHandler.handleError<any>())
      );
  }

  createStaff(staff: Staff) : Observable<Staff>{
    return this.http.post<Staff>(this.staffUrl, staff, this.httpOptions)
      .pipe(
        catchError(this.errorHandler.handleError<Staff>())
      );
  }
}
