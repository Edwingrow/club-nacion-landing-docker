"use client";
import Image from 'next/image';
import { Account } from "@/app/types/Account";
import { Location } from "../Icons/Location";
import { useEffect, useState } from "react";
import Link from "next/link";
interface AccountCardProps {
  account: Account;
}

const AccountCard = ({ account }: AccountCardProps) => {
  const [distance, setDistance] = useState<number | null>(null);
  useEffect(() => {
    const minDistance = account.branches.reduce(
      (min, branch) => (branch.location < min ? branch.location : min),
      Infinity
    );
    setDistance(minDistance);
  }, [account]);

  const formatDistance = (distance: number | null) => {
    if (distance === null) return "";
    return distance >= 1000
      ? `${(distance / 1000).toFixed(2)} km`
      : `${distance} m`;
  };

  const getColorByClass = (index: number) => {
    const colors = ["text-primary", "text-secondary", "text-tertiary"];
    return colors[index % colors.length];
  };
  return (
    <>
      <div className="max-w-xs rounded overflow-hidden shadow-lg m-auto md:m-0">
          <div className="bg-blue-100 h-56">
            {account.images.map((image, key) => (
              <Link
              key={key}
              href={`https://club.lanacion.com.ar/${account.crmid} `}
              target="_blank"
            >
              <Image 
                key={key}
                src={image.url}
                alt={account.name}
                width={200}
                height={200}
                priority
                className="!w-full h-56 object-cover"
              />
               </Link>
            ))}
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-base mb-2">
              {" "}
              <a
                href={`https://club.lanacion.com.ar/${account.crmid} `}
                target="_blank"
              >
              {account.name}
              </a>
            </div>
            <p className="text-gray-700 text-base">
              {
                account.benefits.map((benefit, index) => (
                  <span key={index} className={`font-bold text-base ml-2 ${getColorByClass(index)}`}>
                    {benefit.type_benefit}
                  </span>
                ))
              }
            </p>
            <p className="text-gray-600 text-sm mt-2">
            <Location /> A <strong>{formatDistance(distance)}</strong>
            </p>
          </div>
        </div>
    </>
  );
};

export default AccountCard;