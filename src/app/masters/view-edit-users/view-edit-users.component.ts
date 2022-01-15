import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NotificationService } from 'src/app/notification.service';
import { TblMember } from 'src/app/shared/models/member';
import { MemberServices } from 'src/app/shared/services/member.services';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-edit-users',
  templateUrl: './view-edit-users.component.html',
  styleUrls: ['./view-edit-users.component.css']
})
export class ViewEditUsersComponent implements OnInit {

  model: TblMember;
  isEditing:boolean;
  boxTitle:string;
  user_id:number;
  editDataAvbl:boolean;
  @Output() action = new EventEmitter();
  constructor(private _memberServices:MemberServices,
    private notifyService : NotificationService,
    public modalRef: BsModalRef) { }

  ngOnInit(): void {
    this.model=new TblMember();
    this.editDataAvbl=true;
    if(this.isEditing)
    {
      this.boxTitle="Edit Member";
       this._memberServices.getById(environment.accountId,this.user_id)
      .subscribe(
        resp=>{
          this.model=resp;
        },
        (error: HttpErrorResponse) => {
          this.editDataAvbl=false;
        });
      }
    else{
      this.boxTitle="Add New Member";
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
      this._memberServices.update(this.model).subscribe(resp=>{
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
      this._memberServices.create(this.model).subscribe(resp=>{
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
