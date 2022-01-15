import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs/internal/Observable";
import { TblMember } from "../models/member";
import { TblLeadStatu } from "../models/leadstatus";

@Injectable({
  providedIn: "root",
})
export class LeadStatusServices {
  private serviceRoot = `${environment.serviceRoot}/leadStatus`;
  constructor(
    private http: HttpClient
  ) { }

  getAll(accountId: number, status:number): Observable<TblLeadStatu[]> {
    const endPoint = `${this.serviceRoot}/selectall?accountId=${accountId}&status=${status}`;
    return this.http.post<TblLeadStatu[]>(endPoint, '', {});
  }

  getById(accountId: number, statusId:number): Observable<TblLeadStatu> {
    const endPoint = `${this.serviceRoot}/selectbyid?accountId=${accountId}&statusId=${statusId}`;
    return this.http.post<TblLeadStatu>(endPoint, '', {});
  }

  create(data:TblLeadStatu):Observable<any>{
    const endPoint = `${this.serviceRoot}/create`;
    return this.http.post<any>(endPoint, JSON.stringify(data));
  }

  update(data:TblLeadStatu):Observable<any>{
    const endPoint = `${this.serviceRoot}/update`;
    return this.http.post<any>(endPoint, JSON.stringify(data));
  }

}
