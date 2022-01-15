import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs/internal/Observable";
import { TblProduct } from "../models/product";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  private serviceRoot = `${environment.serviceRoot}/product`;
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  constructor(
    private http: HttpClient
  ) { }

  getAll(accountId: number): Observable<TblProduct[]> {
    const endPoint = `${this.serviceRoot}/selectall?accountId=${accountId}`;
    return this.http.post<TblProduct[]>(endPoint, '', this.options);
  }

  getAllByStatus(accountId: number, status:number): Observable<TblProduct[]> {
    const endPoint = `${this.serviceRoot}/selectallbystatus?accountId=${accountId}&status=${status}`;
    return this.http.post<TblProduct[]>(endPoint, '', this.options);
  }

  getById(accountId: number, productId:number): Observable<TblProduct> {
    const endPoint = `${this.serviceRoot}/selectbyid?accountId=${accountId}&productId=${productId}`;
    return this.http.post<TblProduct>(endPoint, '', this.options);
  }

  create(data:TblProduct):Observable<any>{
    const endPoint = `${this.serviceRoot}/create`;
    return this.http.post<any>(endPoint, JSON.stringify(data),this.options);
  }

  update(data:TblProduct):Observable<any>{
    const endPoint = `${this.serviceRoot}/update`;
    return this.http.post<any>(endPoint, JSON.stringify(data),this.options);
  }

}
