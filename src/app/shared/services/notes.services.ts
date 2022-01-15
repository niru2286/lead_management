import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs/internal/Observable";
import { TblNote } from "../models/note";

@Injectable({
  providedIn: "root",
})
export class NotesService {
  private serviceRoot = `${environment.serviceRoot}/notes`;
  constructor(
    private http: HttpClient
  ) { }

  getAll(accountId: number,leadId : number, status:number): Observable<TblNote[]> {
    const endPoint = `${this.serviceRoot}/selectall?accountId=${accountId}&leadId=${leadId}&status=${status}`;
    return this.http.post<TblNote[]>(endPoint, '', {});
  }

  getById(accountId: number, noteId:number): Observable<TblNote> {
    const endPoint = `${this.serviceRoot}/selectbyid?accountId=${accountId}&noteId=${noteId}`;
    return this.http.post<TblNote>(endPoint, '', {});
  }

  create(data:TblNote):Observable<any>{
    const endPoint = `${this.serviceRoot}/create`;
    return this.http.post<any>(endPoint, JSON.stringify(data));
  }

  update(data:TblNote):Observable<any>{
    const endPoint = `${this.serviceRoot}/update`;
    return this.http.post<any>(endPoint, JSON.stringify(data));
  }

}
