import { TblCall } from "./call";
import { TblContact } from "./contact";
import { TblLead } from "./leads";
import { TblLeadStatu } from "./leadstatus";
import { TblMember } from "./member";
import { TblNote } from "./note";
import { TblProduct } from "./product";
import { TblSource } from "./source";
import { TblTeam } from "./team";

export interface TblAccount {
  accountId: number;
  name: string;
  status: number;
  createdOn: string;
  modifiedOn: string;
  tblCalls: TblCall[];
  tblContacts: TblContact[];
  tblLeadStatus: TblLeadStatu[];
  tblLeads: TblLead[];
  tblMembers: TblMember[];
  tblNotes: TblNote[];
  tblProducts: TblProduct[];
  tblSources: TblSource[];
  tblTeams: TblTeam[];
}
