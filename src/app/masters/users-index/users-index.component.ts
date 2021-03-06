import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { TblMember } from 'src/app/shared/models/member';
import { MemberServices } from 'src/app/shared/services/member.services';
import { environment } from 'src/environments/environment';
import { ViewEditUsersComponent } from '../view-edit-users/view-edit-users.component';

@Component({
  selector: 'app-users-index',
  templateUrl: './users-index.component.html',
  styleUrls: ['./users-index.component.css']
})
export class UsersIndexComponent implements OnInit {

  members: Observable<TblMember[]>;
  modalRef: BsModalRef;
  constructor(private _memberServices : MemberServices,
    private modalService: BsModalService,
    private spinnerService: AppComponent ) {
  }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData(){
    this.spinnerService.spinnerStatus(true);
    this.members= this._memberServices.getAll(environment.accountId);
    this.spinnerService.spinnerStatus(false);
  }

  openAddNewBox(){
    this.spinnerService.spinnerStatus(true);
    this.modalRef = this.modalService.show(ViewEditUsersComponent);
    this.spinnerService.spinnerStatus(false);
  }

  editBox(id){
    const initialState = {
      isEditing: true ,
      user_id:id
    };
    this.modalRef = this.modalService.show(ViewEditUsersComponent,{initialState});
  }

}
