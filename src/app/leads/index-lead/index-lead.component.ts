import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CreateLeadComponent } from "../create-lead/create-lead.component";

@Component({
  selector: 'app-index-lead',
  templateUrl: './index-lead.component.html',
  styleUrls: ['./index-lead.component.css']
})
export class IndexLeadComponent implements OnInit {

  modelRef:BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openAddLeadBox(){
    this.modelRef=this.modalService.show(CreateLeadComponent);
  }

}
