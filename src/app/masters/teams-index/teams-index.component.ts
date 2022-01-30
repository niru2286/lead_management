import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TblTeam } from 'src/app/shared/models/team';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AppComponent } from 'src/app/app.component';
import { environment } from 'src/environments/environment';
import { ViewEditTeamsComponent } from '../view-edit-teams/view-edit-teams.component';
import { TeamsService } from 'src/app/shared/services/teams.services';

@Component({
  selector: 'app-teams-index',
  templateUrl: './teams-index.component.html',
  styleUrls: ['./teams-index.component.css']
})
export class TeamsIndexComponent implements OnInit {
  sources: Observable<TblTeam[]>;
  modalRef: BsModalRef;
  constructor(private _teamServices : TeamsService,
    private modalService: BsModalService ,
    private spinnerService:AppComponent) {
  }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData(){
    this.spinnerService.spinnerStatus(true);
    this.sources= this._teamServices.getAll(environment.accountId);
    this.spinnerService.spinnerStatus(false);
  }

  openAddNewBox(){
    this.modalRef = this.modalService.show(ViewEditTeamsComponent);
  }

  editBox(id){
    const initialState = {
      isEditing: true ,
      team_id:id
    };
    this.modalRef = this.modalService.show(ViewEditTeamsComponent,{initialState});
  }


}
