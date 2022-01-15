import { TblAccount } from "./account";
import { TblLead } from "./leads";

export class TblSource {
  sourceId: number;
  name: string;
  status: number;
  createdOn: string;
  modifiedOn: string;
  accountId: number;
  account: TblAccount;
  tblLeads: TblLead[];
}
