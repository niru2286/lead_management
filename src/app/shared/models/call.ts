import { TblAccount } from "./account";
import { TblLead } from "./leads";
import { TblMember } from "./member";

export interface TblCall {
  callId: number;
  callDate: string;
  description: string;
  callType: string;
  createdOn: string;
  modifiedOn: string;
  createdBy: number;
  leadId: number;
  accountId: number;
  status: number | null;
  account: TblAccount;
  createdByNavigation: TblMember;
  lead: TblLead;
}
