import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { NotificationService } from 'src/app/notification.service';
import { TblLead } from 'src/app/shared/models/leads';
import { TblProduct } from 'src/app/shared/models/product';
import { ProductsService } from 'src/app/shared/services/products.services';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-edit-products',
  templateUrl: './view-edit-products.component.html',
  styleUrls: ['./view-edit-products.component.css']
})
export class ViewEditProductsComponent implements OnInit {

  model: TblProduct;
  isEditing:boolean;
  boxTitle:string;
  prod_id:number;
  editDataAvbl:boolean;
  @Output() action = new EventEmitter();
  constructor(private _productServices:ProductsService,
    private notifyService : NotificationService,
    public modalRef: BsModalRef) { }

  ngOnInit(): void {
    this.model=new TblProduct();
    this.editDataAvbl=true;
    if(this.isEditing)
    {
      this.boxTitle="Edit product";
       this._productServices.getById(environment.accountId,this.prod_id)
        .subscribe(
          resp=>{
            this.model=resp;
          },
          (error: HttpErrorResponse) => {
            this.editDataAvbl=false;
          });
      }
    else{
      this.boxTitle="Add New Product";
    }
  }

  create_edit(){
    if(this.isEditing){
      if(this.model.status==0){
        this.notifyService.showError("Select Status!", "Error");
        return;
      }
      if(this.model.name==""){
        this.notifyService.showError("Enter name!", "Error");
        return;
      }
      this.model.modifiedOn=new Date().toISOString();
      this.model.accountId=environment.accountId;
      this._productServices.update(this.model).subscribe(resp=>{
        if(resp.status==1){
          this.notifyService.showSuccess("Updated Successfully!", "Success");
          this.modalRef.hide();
          this.action.emit(true);
        }
        else{
          this.notifyService.showError(resp.message, "Error")
        }
      });
    }
    else{
      this.model.createdOn=new Date().toISOString();
      this.model.modifiedOn=new Date().toISOString();
      this.model.accountId=environment.accountId;
      this.model.status=1;
      this._productServices.create(this.model).subscribe(resp=>{
        if(resp.status==1){
          this.notifyService.showSuccess("Saved Successfully!", "Success");
          this.modalRef.hide();
          this.action.emit(true);
        }
        else{
          this.notifyService.showError(resp.message, "Error")
        }
      });
    }
  }
}
