import { TblAccount } from "./account";
import { TblLead } from "./leads";

export class TblProduct {
  productId: number;
  name: string;
  status: number;
  createdOn: string;
  modifiedOn: string;
  accountId: number;
  account: TblAccount;
  tblLeads: TblLead[];
}
