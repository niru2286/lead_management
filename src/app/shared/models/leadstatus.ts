import { TblAccount } from "./account";
import { TblLead } from "./leads";

export interface TblLeadStatu {
  statusId: number;
  name: string;
  color: string;
  createdOn: string;
  modifiedOn: string;
  accountId: number;
  account: TblAccount;
  tblLeads: TblLead[];
}
