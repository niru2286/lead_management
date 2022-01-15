import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
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

  products: Observable<TblMember[]>;
  modalRef: BsModalRef;
  constructor(private _memberServices : MemberServices,
    private modalService: BsModalService ) {
  }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData(){
    this.products= this._memberServices.getAll(environment.accountId);
  }

  openAddNewBox(){
    this.modalRef = this.modalService.show(ViewEditUsersComponent);
  }

  editBox(id){
    const initialState = {
      isEditing: true ,
      user_id:id
    };
    this.modalRef = this.modalService.show(ViewEditUsersComponent,{initialState});
  }

}
