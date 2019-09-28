import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  // Import it up here
import { Observable, throwError } from 'rxjs';
import { Branch } from '../models/Branch';
import { retry, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

    apiURL = 'http://localhost:8080/branch';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  addBranch(branch:Branch): Observable<Branch> {
    return this.http.post<Branch>(this.apiURL + '/addBranch', JSON.stringify(branch), this.httpOptions)
    .pipe(
        tap(_ => console.log('Category is stored!!!')),
        catchError(this.handleError)
    )
  }

  getListBranches(): Observable<Branch[]> {
    return this.http.get<Branch[]>(this.apiURL + '/getListBranches', this.httpOptions)
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