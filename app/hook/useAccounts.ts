import { useState, useEffect } from "react";
import {
  GetListAccountWithTag,
  GetListWithVoucher,
} from "@/app/services/FetchRequest";
import { Account } from "../types/Account";

export const useAccounts = (tags: string, page: number = 1, limit: number = 4, ) => {
  const [ListAccountsByTag, setListAccountsByTag] = useState<Account[]>([]);
  const [ListAccountWithVoucher, setListAccountWithVoucher] = useState<
    Account[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getAccounts = async () => {
      try {
        const data = await GetListAccountWithTag(tags, page, limit, 'location', 'asc');
        setListAccountsByTag(data);

        const data2 = await GetListWithVoucher(page, limit, 'name', 'desc');
        setListAccountWithVoucher(data2);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getAccounts();
  }, [tags, page, limit]);

  return { ListAccountsByTag, ListAccountWithVoucher, loading };
};
