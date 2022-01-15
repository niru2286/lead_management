import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs/internal/Observable";
import { TblSource } from "../models/source";

@Injectable({
  providedIn: "root",
})
export class SourcesService {
  private serviceRoot = `${environment.serviceRoot}/sources`;
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  constructor(
    private http: HttpClient
  ) { }

  getAll(accountId: number): Observable<TblSource[]> {
    const endPoint = `${this.serviceRoot}/selectall?accountId=${accountId}`;
    return this.http.post<TblSource[]>(endPoint, '', this.options);
  }

  getAllByStatus(accountId: number, status:number): Observable<TblSource[]> {
    const endPoint = `${this.serviceRoot}/selectallbystatus?accountId=${accountId}&status=${status}`;
    return this.http.post<TblSource[]>(endPoint, '', this.options);
  }

  getById(accountId: number, sourceId:number): Observable<TblSource> {
    const endPoint = `${this.serviceRoot}/selectbyid?accountId=${accountId}&sourceId=${sourceId}`;
    return this.http.post<TblSource>(endPoint, '', this.options);
  }

  create(data:TblSource):Observable<any>{
    const endPoint = `${this.serviceRoot}/create`;
    return this.http.post<any>(endPoint, JSON.stringify(data),this.options);
  }

  update(data:TblSource):Observable<any>{
    const endPoint = `${this.serviceRoot}/update`;
    return this.http.post<any>(endPoint, JSON.stringify(data),this.options);
  }

}
