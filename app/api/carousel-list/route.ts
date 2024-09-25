import accountsData from "../../data/accountsData.json";
import { NextResponse } from "next/server";
import { Account } from "@/app/types/Account";

interface AccountsData {
  accounts: Account[];
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const tagsParam = searchParams.get("tags");
    const tags = tagsParam ? tagsParam.replace(/"/g, "").split(",") : [];
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "4", 10);
    const sortBy = (searchParams.get("sortBy") as keyof Account) || "location";
    const order = searchParams.get("order") || "asc";

    const data: AccountsData = accountsData;

    const accounts: Account[] = data.accounts.filter((account: Account) => {
      return account.tags && account.tags.some((tag) => tags.includes(tag.name));
    });

    accounts.sort((a, b) => {
      let ValueSortA = a[sortBy as keyof Account];
      let ValueSortB = b[sortBy as keyof Account];
      
      if (sortBy === "location" as keyof Account) {
        ValueSortA = a.branches.reduce(
          (min, branch) => (branch.location < min ? branch.location : min),
          Infinity
        );

        ValueSortB = b.branches.reduce(
          (min, branch) => (branch.location < min ? branch.location : min),
          Infinity
        );
      }

      if ((ValueSortA ?? Infinity) < (ValueSortB ?? Infinity)) return order === "asc" ? -1 : 1;
      if ((ValueSortA ?? Infinity) > (ValueSortB ?? Infinity)) return order === "asc" ? 1 : -1;
      return 0;
    });


    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const carouselAccounts = accounts.slice(startIndex, endIndex);

    return NextResponse.json(carouselAccounts);
  } catch (error) {
    return NextResponse.error();
  }
}
