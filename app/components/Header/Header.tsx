"use client";

import { BellIcon } from "../Icons/BellIcon";
import HamburguerMenuIcon from "../Icons/HamburgerMenuIcon";
import { HearIcon } from "../Icons/HearIcon";
import { NacionIconLogo } from "../Icons/NacionIconLogo";
import { SearchInput } from "../Icons/SearchInput";
import { SmileIcon } from "../Icons/SmileIcon";


const Header = () => {
  return (
    <header
      className="absolute top-0 left-0 w-full flex justify-between items-center text-white py-8 px-10 md:px-20 bg-black bg-opacity-70 drop-shadow-md z-10 "
    >
      <div className="flex gap-4  items-center ">
      <HamburguerMenuIcon className="h-8 w-6  " />
        <NacionIconLogo
          width="43px"
          height="39px"
          fill="#FFFFFF"
          className="h-10"
        />
      </div>
      <div className="">
        <SearchInput />
      </div>
      <div className="flex gap-4">
        <BellIcon />
        <HearIcon />
        <SmileIcon />

      </div>
    </header>
  );
};

export default Header;
