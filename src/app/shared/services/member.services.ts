import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs/internal/Observable";
import { TblMember } from "../models/member";

@Injectable({
  providedIn: "root",
})
export class MemberServices {
  private serviceRoot = `${environment.serviceRoot}/members`;
  constructor(
    private http: HttpClient
  ) { }

  getAll(accountId: number): Observable<TblMember[]> {
    const endPoint = `${this.serviceRoot}/selectall?accountId=${accountId}`;
    return this.http.post<TblMember[]>(endPoint, '', {});
  }

  getAllByStatus(accountId: number, status:number): Observable<TblMember[]> {
    const endPoint = `${this.serviceRoot}/selectall?accountId=${accountId}&status=${status}`;
    return this.http.post<TblMember[]>(endPoint, '', {});
  }

  getById(accountId: number, memberId:number): Observable<TblMember> {
    const endPoint = `${this.serviceRoot}/selectbyid?accountId=${accountId}&memberId=${memberId}`;
    return this.http.post<TblMember>(endPoint, '', {});
  }

  create(data:TblMember):Observable<any>{
    const endPoint = `${this.serviceRoot}/create`;
    return this.http.post<any>(endPoint, JSON.stringify(data));
  }

  update(data:TblMember):Observable<any>{
    const endPoint = `${this.serviceRoot}/update`;
    return this.http.post<any>(endPoint, JSON.stringify(data));
  }

}
