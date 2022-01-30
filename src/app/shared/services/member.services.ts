import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs/internal/Observable";
import { TblMember } from "../models/member";
import { catchError } from 'rxjs/operators';
import { ExceptionHandler } from "./errorhandler";

@Injectable({
  providedIn: "root",
})
export class MemberServices {
  private serviceRoot = `${environment.serviceRoot}/members`;
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  constructor(
    private http: HttpClient,
    private ehandler:ExceptionHandler
  ) { }

  getAll(accountId: number): Observable<TblMember[]> {
    const endPoint = `${this.serviceRoot}/selectall?accountId=${accountId}`;
    return this.http.post<TblMember[]>(endPoint, '', this.options)
    .pipe(catchError(this.ehandler.errorHandler));
  }

  getAllByStatus(accountId: number, status:number): Observable<TblMember[]> {
    const endPoint = `${this.serviceRoot}/selectall?accountId=${accountId}&status=${status}`;
    return this.http.post<TblMember[]>(endPoint, '', this.options).pipe(catchError(this.ehandler.errorHandler));
  }

  getById(accountId: number, memberId:number): Observable<TblMember> {
    const endPoint = `${this.serviceRoot}/selectbyid?accountId=${accountId}&memberId=${memberId}`;
    return this.http.post<TblMember>(endPoint, '', this.options).pipe(catchError(this.ehandler.errorHandler));
  }

  create(data:TblMember):Observable<any>{
    const endPoint = `${this.serviceRoot}/create`;
    return this.http.post<any>(endPoint, JSON.stringify(data),this.options).pipe(catchError(this.ehandler.errorHandler));
  }

  update(data:TblMember):Observable<any>{
    const endPoint = `${this.serviceRoot}/update`;
    return this.http.post<any>(endPoint, JSON.stringify(data),this.options).pipe(catchError(this.ehandler.errorHandler));
  }



}
