import { TblAccount } from "./account";
import { TblCall } from "./call";
import { TblContact } from "./contact";
import { TblLeadStatu } from "./leadstatus";
import { TblMember } from "./member";
import { TblNote } from "./note";
import { TblProduct } from "./product";
import { TblSource } from "./source";

export class TblLead {
  leadId: number;
  title: string;
  name: string;
  emailId: string;
  mobile: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  interestedIn: number | null;
  sourceId: number | null;
  assignedTo: number | null;
  comments: string;
  status: number | null;
  accountId: number;
  createdOn: string | null;
  modifiedOn: string | null;
  createdBy: number | null;
  account: TblAccount;
  assignedToNavigation: TblMember;
  createdByNavigation: TblMember;
  interestedInNavigation: TblProduct;
  source: TblSource;
  statusNavigation: TblLeadStatu;
  tblCalls: TblCall[];
  tblContacts: TblContact[];
  tblNotes: TblNote[];
}
