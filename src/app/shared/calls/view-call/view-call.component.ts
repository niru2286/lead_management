import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AddCallComponent } from '../add-call/add-call.component';
@Component({
  selector: 'app-view-call',
  templateUrl: './view-call.component.html',
  styleUrls: ['./view-call.component.css']
})
export class ViewCallComponent implements OnInit {

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openModal() {
    this.modalRef = this.modalService.show(AddCallComponent);
  }

}
