import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { TblSource } from 'src/app/shared/models/source';
import { SourcesService } from 'src/app/shared/services/sources.services';
import { environment } from 'src/environments/environment';
import { ViewEditSourcesComponent } from '../view-edit-sources/view-edit-sources.component';

@Component({
  selector: 'app-sources-index',
  templateUrl: './sources-index.component.html',
  styleUrls: ['./sources-index.component.css']
})
export class SourcesIndexComponent implements OnInit {
  sources: Observable<TblSource[]>;
  modalRef: BsModalRef;
  constructor(private _sourcesServices : SourcesService,
    private modalService: BsModalService ) {
  }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData(){
    this.sources= this._sourcesServices.getAll(environment.accountId);
  }

  openAddNewBox(){
    this.modalRef = this.modalService.show(ViewEditSourcesComponent);
  }

  editBox(id){
    const initialState = {
      isEditing: true ,
      sources_id:id
    };
    this.modalRef = this.modalService.show(ViewEditSourcesComponent,{initialState});
  }

}
