import { TblAccount } from "./account";
import { TblLead } from "./leads";
import { TblMember } from "./member";

export interface TblContact {
  contactId: number;
  name: string;
  designation: string;
  emailId: string;
  mobileNo: string;
  remarks: string;
  createdOn: string | null;
  modifiedOn: string | null;
  createdBy: number | null;
  status: number | null;
  leadId: number | null;
  accountId: number | null;
  account: TblAccount;
  createdByNavigation: TblMember;
  lead: TblLead;
}
