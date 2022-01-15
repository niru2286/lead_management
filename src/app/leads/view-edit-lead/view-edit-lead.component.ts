import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-edit-lead',
  templateUrl: './view-edit-lead.component.html',
  styleUrls: ['./view-edit-lead.component.css']
})
export class ViewEditLeadComponent implements OnInit {

  basicComponent:boolean;
  callComponent:boolean;
  contactComponent:boolean;
  notesComponent:boolean;
  constructor() { }

  ngOnInit(): void {
    this.loadBasicComponent()
  }

  loadBasicComponent() {
    this.callComponent = false;
    this.basicComponent=true;
    this.contactComponent=false;
    this.notesComponent=false;
  }
  loadCallComponent() {
    this.callComponent = true;
    this.basicComponent=false;
    this.contactComponent=false;
    this.notesComponent=false;
  }
  loadContactComponent() {
    this.callComponent = false;
    this.basicComponent=false;
    this.contactComponent=true;
    this.notesComponent=false;
  }
  loadNotesComponent() {
    this.callComponent = false;
    this.basicComponent=false;
    this.contactComponent=false;
    this.notesComponent=true;
  }
}
