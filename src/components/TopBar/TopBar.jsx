import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaSearch,

  FaUserCircle,

  FaBars,
} from "react-icons/fa";
import {
  LuMessageCircleMore,
  LuSettings,
  LuBell,
} from "react-icons/lu";

import LanguageSelector from "./languageMenu";
import UserDropdown from "./userDropdown";
import ThemeToggler from "./themeToggler";
import FullScreenBtn from "./FullScreenBtn";
import { Link } from "react-router-dom";



export default function TopBar() {
  const { t } = useTranslation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white py-1 dark:bg-primary-dark text-gray-600 dark:text-white shadow border-b px-4 py-2 ">
      <div className=" mx-auto px-4 py- flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-bold">
          <span>{t("meeting")}</span>
          {/* <FaChurch /> */}  
        </div>

        {/* Search */}
        <div className="relative hidden sm:block border border-gray-400 rounded-xl">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ">
            <FaSearch className="text-gray-400 " />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-1 rounded-xl bg-white text-black w-44 focus:outline-none"
          />
        </div>

        {/* Desktop Icons */}
        <div className="hidden text-xl md:flex items-center gap-6 ">
          
          <ThemeToggler/>

          <button className="relative">
            <Link to={'./messages'}><LuMessageCircleMore /> </Link>
            <span className="absolute -top-2 -right-2 text-xs w-full  rounded-full bg-sky-400 ">
              4
            </span>
            <span className="absolute -top-2 -right-2 text-xs w-full  rounded-full bg-sky-400 animate-ping ">
              4
            </span>
          </button>
          <button className="relative">
            <LuBell />
            <span className="absolute -top-2 -right-2 bg-violet-400 text-xs rounded-full px-1">
              17
            </span>
          </button>

        <FullScreenBtn/>
          <LanguageSelector/>
 

        <UserDropdown/>
          {/* Language Selector */}
      
        </div>




        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-blue-500 px-4 pb-3">
          <div className="flex flex-col gap-2 text-sm">
            <button className="flex items-center gap-2">
              <LuMessageCircleMore />
              Messages
            </button>
            <button className="flex items-center gap-2">
              <LuBell />
              Notifications
            </button>
            <button className="flex items-center gap-2">
              <FaUserCircle />
              Profile
            </button>
            <button className="flex items-center gap-2">
              <LuSettings className="animate-spin" />
            </button>
            <div className="flex items-center  gap-2">
                       <LanguageSelector/>

            </div>
          </div>
        </div>
      )}

    
    </div>
  );
}
