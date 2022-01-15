import { TblAccount } from "./account";
import { TblCall } from "./call";
import { TblContact } from "./contact";
import { TblLead } from "./leads";
import { TblNote } from "./note";
import { TblTeam } from "./team";

export class TblMember {
  memberId: number;
  name: string;
  emailId: string;
  createdOn: string;
  modifiedOn: string;
  status: number;
  teamId: number;
  accountId: number;
  account: TblAccount;
  team: TblTeam;
  tblCalls: TblCall[];
  tblContacts: TblContact[];
  tblLeadAssignedToNavigations: TblLead[];
  tblLeadCreatedByNavigations: TblLead[];
  tblNotes: TblNote[];
}
