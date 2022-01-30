import { Component, OnInit } from '@angular/core';
import { ProductsService } from "src/app/shared/services/products.services";
import { TblProduct } from "src/app/shared/models/product";
import { environment } from "src/environments/environment";
import { Observable } from 'rxjs';
import { BsModalRef,BsModalService } from 'ngx-bootstrap/modal';

import { ViewEditProductsComponent } from '../view-edit-products/view-edit-products.component';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-products-index',
  templateUrl: './products-index.component.html',
  styleUrls: ['./products-index.component.css']
})
export class ProductsIndexComponent implements OnInit {

  products: Observable<TblProduct[]>;
  modalRef: BsModalRef;
  constructor(private _prodcutServices : ProductsService,
    private modalService: BsModalService,
    private spinnerService:AppComponent ) {
  }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData(){
    this.spinnerService.spinnerStatus(true);
    this.products= this._prodcutServices.getAll(environment.accountId);
    this.spinnerService.spinnerStatus(false);
  }

  openAddNewBox(){
    this.modalRef = this.modalService.show(ViewEditProductsComponent);
  }

  editBox(id){
    const initialState = {
      isEditing: true ,
      prod_id:id
    };
    this.modalRef = this.modalService.show(ViewEditProductsComponent,{initialState});
  }
}
