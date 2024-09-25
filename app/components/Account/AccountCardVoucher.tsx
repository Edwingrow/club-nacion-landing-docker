"use client";

import { Account } from "@/app/types/Account";
import Image from "next/image";
import Link from "next/link";
interface AccountCardProps {
  account: Account;
}

const AccountCardVoucher = ({ account }: AccountCardProps) => {
  const firstImage = account.images[0];
  return (
    <>
      <div className="md:max-w-md max-w-80 rounded overflow-hidden shadow-lg m-auto md:m-0">
        <div className="bg-blue-100 h-56">
          {firstImage && (
            <Link
              href={`https://club.lanacion.com.ar/${account.crmid} `}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={firstImage.url}
                alt={account.name}
                width={200}
                height={200}
                priority
                className="w-full h-56 object-cover"
              />
            </Link>
          )}
        </div>
        <div className="bg-blue-500 p-4 min-h-32 ">
          <div className="font-bold text-base text-white mb-4">
            {" "}
            <a
              href={`https://club.lanacion.com.ar/${account.crmid} `}
              target="_blank"
            >
              {account.name}
            </a>
          </div>
            <Link href={`https://club.lanacion.com.ar/${account.crmid} `} target="_blank">
              <button className="bg-transparent text-white font-bold py-2 px-4 border border-white rounded block text-center text-xs">
              QUIERO MI CODIGO
              </button>
            </Link>
        </div>
      </div>
    </>
  );
};

export default AccountCardVoucher;
