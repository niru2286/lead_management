import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NotificationService } from 'src/app/notification.service';
import { TblSource } from 'src/app/shared/models/source';
import { SourcesService } from 'src/app/shared/services/sources.services';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-edit-sources',
  templateUrl: './view-edit-sources.component.html',
  styleUrls: ['./view-edit-sources.component.css']
})
export class ViewEditSourcesComponent implements OnInit {

  model: TblSource;
  isEditing:boolean;
  boxTitle:string;
  sources_id:number;
  editDataAvbl:boolean;
  @Output() action = new EventEmitter();
  constructor(private _sourcesServices:SourcesService,
    private notifyService : NotificationService,
    public modalRef: BsModalRef) { }

  ngOnInit(): void {
    this.model=new TblSource();
    this.editDataAvbl=true;
    if(this.isEditing)
    {
      this.boxTitle="Edit Source";
       this._sourcesServices.getById(environment.accountId,this.sources_id)
      .subscribe(
        resp=>{
          this.model=resp;
        },
        (error: HttpErrorResponse) => {
          this.editDataAvbl=false;
        });
      }
    else{
      this.boxTitle="Add New Source";
    }
  }

  create_edit(){
    if(this.isEditing){
      if(this.model.status==0){
        this.notifyService.showError("Select Status!", "Error");
        return;
      }
      this.model.modifiedOn=new Date().toISOString();
      this.model.accountId=environment.accountId;
      this._sourcesServices.update(this.model).subscribe(resp=>{
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
      this._sourcesServices.create(this.model).subscribe(resp=>{
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
