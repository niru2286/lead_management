import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs/internal/Observable";
import { TblCall } from "../models/call";
import { catchError } from 'rxjs/operators';
import { throwError } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class NotesService {
  private serviceRoot = `${environment.serviceRoot}/calls`;
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  constructor(
    private http: HttpClient
  ) { }

  getAll(accountId: number,leadId : number, status:number): Observable<TblCall[]> {
    const endPoint = `${this.serviceRoot}/selectall?accountId=${accountId}&leadId=${leadId}&status=${status}`;
    return this.http.post<TblCall[]>(endPoint, '', this.options).pipe(catchError(this.errorHandler));
  }

  getById(accountId: number, callId:number): Observable<TblCall> {
    const endPoint = `${this.serviceRoot}/selectbyid?accountId=${accountId}&callId=${callId}`;
    return this.http.post<TblCall>(endPoint, '', this.options);
  }

  create(data:TblCall):Observable<any>{
    const endPoint = `${this.serviceRoot}/create`;
    return this.http.post<any>(endPoint, JSON.stringify(data),this.options);
  }

  update(data:TblCall):Observable<any>{
    const endPoint = `${this.serviceRoot}/update`;
    return this.http.post<any>(endPoint, JSON.stringify(data),this.options);
  }

  errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}
