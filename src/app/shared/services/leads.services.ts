import { TblLead } from "../models/leads";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: "root",
})
export class LeadService {
  private serviceRoot = `${environment.serviceRoot}/leads`;
  constructor(
    private http: HttpClient
  ) { }

  getAll(accountId: number, status:number): Observable<TblLead[]> {
    const endPoint = `${this.serviceRoot}/selectall?accountId=${accountId}&status=${status}`;
    return this.http.post<TblLead[]>(endPoint, '', {});
  }

  getById(accountId: number, leadId:number): Observable<TblLead> {
    const endPoint = `${this.serviceRoot}/selectbyid?accountId=${accountId}&leadId=${leadId}`;
    return this.http.post<TblLead>(endPoint, '', {});
  }

  create(data:TblLead):Observable<any>{
    const endPoint = `${this.serviceRoot}/create`;
    return this.http.post<any>(endPoint, JSON.stringify(data));
  }

  update(data:TblLead):Observable<any>{
    const endPoint = `${this.serviceRoot}/update`;
    return this.http.post<any>(endPoint, JSON.stringify(data));
  }

}
