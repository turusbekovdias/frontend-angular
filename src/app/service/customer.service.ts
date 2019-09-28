import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  // Import it up here
import { Observable, throwError } from 'rxjs';
import { Customer } from '../models/Customer';
import { retry, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

    apiURL = 'http://localhost:8080/customer';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  addCustomer(customer:Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiURL + '/addCustomer', JSON.stringify(customer), this.httpOptions)
    .pipe(
        tap(_ => console.log('Category is stored!!!')),
        catchError(this.handleError)
    )
  }

  getListCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiURL + '/getListCustomers', this.httpOptions)
    .pipe(
        tap(_ => console.log('Category is stored!!!')),
        catchError(this.handleError)
    )
  } 

    handleError(error) {
        console.log(error);
        let errorMessage = '';
        if(error.error instanceof ErrorEvent) {
          // Get client-side error
          errorMessage = error.error.message;
        } else {
          // Get server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
     }
}