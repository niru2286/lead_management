import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NotificationService } from 'src/app/notification.service';
import { TblTeam } from 'src/app/shared/models/team';
import { SourcesService } from 'src/app/shared/services/sources.services';
import { environment } from 'src/environments/environment';
import { TeamsService } from 'src/app/shared/services/teams.services';

@Component({
  selector: 'app-view-edit-teams',
  templateUrl: './view-edit-teams.component.html',
  styleUrls: ['./view-edit-teams.component.css']
})
export class ViewEditTeamsComponent implements OnInit {

  model: TblTeam;
  isEditing:boolean;
  boxTitle:string;
  team_id:number;
  editDataAvbl:boolean;
  @Output() action = new EventEmitter();
  constructor(private _teamServices:TeamsService,
    private notifyService : NotificationService,
    public modalRef: BsModalRef) { }

  ngOnInit(): void {
    this.model=new TblTeam();
    this.editDataAvbl=true;
    if(this.isEditing)
    {
      debugger
      this.boxTitle="Edit Team";
       this._teamServices.getById(environment.accountId,this.team_id)
      .subscribe(
        resp=>{
          this.model=resp;
        },
        (error: HttpErrorResponse) => {
          this.editDataAvbl=false;
        });
      }
    else{
      this.boxTitle="Add New Team";
    }
  }
  validateForm():boolean{
    if(!this.model.name){
      this.notifyService.showError("Name can not be empty!", "Error");
      return false;
    }
    else {
      return true;
    }
  }
  create_edit(){

    if(!this.validateForm()){
      return;
    }

    if(this.isEditing){
      if(this.model.status==0){
        this.notifyService.showError("Select Status!", "Error");
        return;
      }
      this.model.modifiedOn=new Date().toISOString();
      this.model.accountId=environment.accountId;
      this._teamServices.update(this.model).subscribe(resp=>{
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
      this._teamServices.create(this.model).subscribe(resp=>{
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
