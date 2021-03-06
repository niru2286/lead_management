import { TblAccount } from "./account";
import { TblMember } from "./member";

export class TblTeam {
  teamId: number;
  name: string;
  status: number;
  createdOn: string;
  modifiedOn: string;
  accountId: number;
  account: TblAccount;
  tblMembers: TblMember[];
}
