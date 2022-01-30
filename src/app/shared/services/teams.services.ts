import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs/internal/Observable";
import { TblTeam } from "../models/team";
import { ExceptionHandler } from "./errorhandler";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  private serviceRoot = `${environment.serviceRoot}/teams`;
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  constructor(
    private http: HttpClient,
    private ehandler:ExceptionHandler
  ) { }

  getAll(accountId: number): Observable<TblTeam[]> {
    const endPoint = `${this.serviceRoot}/selectall?accountId=${accountId}`;
    return this.http.post<TblTeam[]>(endPoint, '', this.options)
    .pipe(catchError(this.ehandler.errorHandler));
  }

  getAllByStatus(accountId: number, status:number): Observable<TblTeam[]> {
    const endPoint = `${this.serviceRoot}/selectallbystatus?accountId=${accountId}&status=${status}`;
    return this.http.post<TblTeam[]>(endPoint, '', this.options)
    .pipe(catchError(this.ehandler.errorHandler));
  }

  getById(accountId: number, sourceId:number): Observable<TblTeam> {
    const endPoint = `${this.serviceRoot}/selectbyid?accountId=${accountId}&sourceId=${sourceId}`;
    return this.http.post<TblTeam>(endPoint, '', this.options)
    .pipe(catchError(this.ehandler.errorHandler));
  }

  create(data:TblTeam):Observable<any>{
    const endPoint = `${this.serviceRoot}/create`;
    return this.http.post<any>(endPoint, JSON.stringify(data),this.options)
    .pipe(catchError(this.ehandler.errorHandler));
  }

  update(data:TblTeam):Observable<any>{
    const endPoint = `${this.serviceRoot}/update`;
    return this.http.post<any>(endPoint, JSON.stringify(data),this.options)
    .pipe(catchError(this.ehandler.errorHandler));
  }
}
