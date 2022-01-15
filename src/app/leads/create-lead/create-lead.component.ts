import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TblLead } from 'src/app/shared/models/leads';
import { TblLeadStatu } from 'src/app/shared/models/leadstatus';
import { TblMember } from 'src/app/shared/models/member';
import { TblProduct } from 'src/app/shared/models/product';
import { TblSource } from 'src/app/shared/models/source';
import { LeadService } from 'src/app/shared/services/leads.services';
import { LeadStatusServices } from 'src/app/shared/services/leadStatus.services';
import { MemberServices } from 'src/app/shared/services/member.services';
import { ProductsService } from 'src/app/shared/services/products.services';
import { SourcesService } from 'src/app/shared/services/sources.services';
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-create-lead',
  templateUrl: './create-lead.component.html',
  styleUrls: ['./create-lead.component.css']
})
export class CreateLeadComponent implements OnInit {

  model: TblLead ;
  products:Observable<TblProduct[]>;
  sources:Observable<TblSource[]>;
  members: Observable<TblMember[]>;
  statusList:Observable<TblLeadStatu[]>;
  constructor(private formbulider: FormBuilder,
    private productServices:ProductsService,
    private sourceServices : SourcesService,
    private memberServices : MemberServices,
    private leadStatusServices : LeadStatusServices,
    private leadService : LeadService) { }

  ngOnInit(): void {
    this.model= new TblLead();
    // this.leadForm = this.formbulider.group({
    //   Name: ['', [Validators.required]],
    //   Email: ['', [Validators.required]],
    //   Mobile: ['', [Validators.required]],
    //   Address: [''],
    //   City: [''],
    //   State: [''],
    //   Pincode: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{6}')])],
    //   Comments:[''],
    //   InterestedIn:['',],
    //   Source:['',],
    //   AssignedTo:['',],
    // });

    this.loadSources();
    this.loadMembers();
    this.loadProducts();
    this.loadStatus();
  }

  createLead(){
this.leadService.create(this.model).subscribe(resp => {
  if (resp.success) {
    alert('Submitted Successfully');
    //this.router.navigate([``]);
  } else {
    alert('Email sending failed');
  }
});
  }


  loadMembers() {
    this.members = this.memberServices.getAllByStatus(environment.accountId,1);
  }

  loadProducts() {
    this.products = this.productServices.getAllByStatus(environment.accountId,1);
    console.log(this.products);
  }

  loadSources() {
    this.sources = this.sourceServices.getAllByStatus(environment.accountId,1);
    console.log(this.sources);
  }

  loadStatus() {
    this.statusList = this.leadStatusServices.getAll(environment.accountId,1);
  }

}
