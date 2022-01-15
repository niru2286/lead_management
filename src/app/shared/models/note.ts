import { TblAccount } from "./account";
import { TblLead } from "./leads";
import { TblMember } from "./member";

export interface TblNote {
  noteId: number;
  note: string;
  createdOn: string | null;
  modifiedOn: string | null;
  createdBy: number | null;
  accountId: number | null;
  leadId: number | null;
  status: number | null;
  account: TblAccount;
  createdByNavigation: TblMember;
  lead: TblLead;
}
