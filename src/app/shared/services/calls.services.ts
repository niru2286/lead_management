import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs/internal/Observable";
import { TblCall } from "../models/call";

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
    return this.http.post<TblCall[]>(endPoint, '', this.options);
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

}
