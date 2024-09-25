"use client";

import AccountCard from "../Account/AccountCard";
import "../../styles/style.css";
import { useAccounts } from "@/app/hook/useAccounts";
import AccountCardVoucher from "../Account/AccountCardVoucher";

interface Props {
  tags: string;
  title: string;
  subtitle?: string;
  buttonLabel: string;
  haveVoucher?: boolean;
}

const Carousel = ({
  tags,
  title,
  subtitle,
  buttonLabel,
  haveVoucher,
}: Props) => {
  const { ListAccountsByTag, ListAccountWithVoucher, loading } =
    useAccounts(tags);
  console.log(ListAccountWithVoucher, "ListAccountWithVoucher");
  return (
    <div className="container mx-4 md:m-auto">
      <div className="flex row items-center justify-between m-auto gap-5 max-w-[620px] mb-4">
        <h2 className="text-4xl text-center  font-medium text-terciary">
          {title}
        </h2>
        <button className="bg-transparent  text-tertiary font-bold py-2 px-4 border-2 border-tertiary rounded-full text-xs">
          {buttonLabel}
        </button>
      </div>
      {subtitle && (
        <h3 className="text-2xl  font-medium text-terciary ">
          {subtitle}
        </h3>
      )}
      {loading ? (
        <p className=" text-center  text-terciary ">Cargando...</p>
      ) : (
        <div className="relative mt-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {ListAccountsByTag.map((account) =>
              account.images.map((image) => (
                <AccountCard
                  key={image.id}
                  account={{ ...account, images: [image] }}
                />
              ))
            )}
          </div>
          {haveVoucher && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {ListAccountWithVoucher.map((account) => (
                <AccountCardVoucher key={account.id} account={account} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Carousel;
