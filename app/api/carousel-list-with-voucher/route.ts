import accountsData from "../../data/accountsData.json";
import { NextResponse } from "next/server";
import { Account } from "@/app/types/Account";

interface AccountsData {
  accounts: Account[];
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "4", 10);
    const sortBy = searchParams.get("sortBy") || "name";
    const order = searchParams.get("order") || "desc";

    
    const data: AccountsData = accountsData;

    const VoucherAccount: Account[] = data.accounts.filter((account: Account) => account.haveVoucher);

    VoucherAccount.sort((a, b) => {
      const ValueSortA = a[sortBy as keyof Account];
      const ValueSortB = b[sortBy as keyof Account];

      if ((ValueSortA ?? Infinity) < (ValueSortB ?? Infinity)) return order === "asc" ? -1 : 1;
      if ((ValueSortA ?? Infinity) > (ValueSortB ?? Infinity)) return order === "asc" ? 1 : -1;
      return 0;
      
    });
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const voucherAccounts = VoucherAccount.slice(startIndex, endIndex);

    return NextResponse.json(voucherAccounts);
    
  } catch (error) {
    console.error('Error retrieving voucher accounts:', error);
    return NextResponse.error();
  }
}
