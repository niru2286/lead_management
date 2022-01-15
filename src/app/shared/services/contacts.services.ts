import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs/internal/Observable";
import { TblContact } from "../models/contact";

@Injectable({
  providedIn: "root",
})
export class ContactsService {
  private serviceRoot = `${environment.serviceRoot}/contacts`;
  constructor(
    private http: HttpClient
  ) { }

  getAll(accountId: number,leadId : number, status:number): Observable<TblContact[]> {
    const endPoint = `${this.serviceRoot}/selectall?accountId=${accountId}&leadId=${leadId}&status=${status}`;
    return this.http.post<TblContact[]>(endPoint, '', {});
  }

  getById(accountId: number, contactId:number): Observable<TblContact> {
    const endPoint = `${this.serviceRoot}/selectbyid?accountId=${accountId}&contactId=${contactId}`;
    return this.http.post<TblContact>(endPoint, '', {});
  }

  create(data:TblContact):Observable<any>{
    const endPoint = `${this.serviceRoot}/create`;
    return this.http.post<any>(endPoint, JSON.stringify(data));
  }

  update(data:TblContact):Observable<any>{
    const endPoint = `${this.serviceRoot}/update`;
    return this.http.post<any>(endPoint, JSON.stringify(data));
  }

}
