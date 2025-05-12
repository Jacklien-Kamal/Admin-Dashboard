import React, { useState } from "react";
import { useLocalization } from "../localization/LocalizationContext";
import { useTranslation } from "react-i18next";
import {
  FaSearch,
  FaEnvelope,
  FaBell,
  FaUserCircle,
  FaCog,
  FaGlobe,
  FaChurch,
  FaBars,
} from "react-icons/fa";
import {
  LuMessageCircleMore,
  LuSettings,
  LuBell,
  LuMoon,
  LuSun,
} from "react-icons/lu";

import { useTheme } from "../context/theme"; // Import the theme context

export default function Topbar() {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);
  const { language, changeLanguage } = useLocalization();
  const { t } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-primary-dark text-black dark:text-white p-4 shadow border border-gray-500  border-opacity-30">
      <div className=" mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex text-purple-600 items-center gap-2 text-xl font-bold">
          <span>Company name</span>
          {/* <FaChurch /> */}
        </div>

        {/* Search */}
        <div className="relative hidden sm:block border border-gray-400 rounded-xl">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-xl bg-white text-black w-44 focus:outline-none"
          />
        </div>

        {/* Desktop Icons */}
        <div className="hidden text-xl md:flex items-center gap-6  ">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 text-dark dark:text-white  py-2 text-xl"
          >
            {theme === "dark" ? <LuSun /> : <LuMoon />}
          </button>
          <button className="relative">
            <LuMessageCircleMore />
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
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FaUserCircle />
          </button>
          <button>
            <LuSettings className="animate-spin" />
          </button>

          {/* Language Selector */}
          <select
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="text-black px-2 py-1 rounded"
          >
            <option value="en">{t("english")}</option>
            <option value="ar">{t("arabic")}</option>
          </select>
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
        <div className="md:hidden bg-blue-500 px-4 pb-3">
          <div className="flex flex-col gap-2 text-sm">
            <button className="flex items-center gap-2">
              <LuMessageSquareText />
              Messages
            </button>
            <button className="flex items-center gap-2">
              <FaBell />
              Notifications
            </button>
            <button className="flex items-center gap-2">
              <FaUserCircle />
              Profile
            </button>
            <button className="flex items-center gap-2">
              <CiSettings className="animate-spin" />
            </button>
            <div className="flex items-center gap-2">
              <FaGlobe />
              <select
                value={language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="text-black px-2 py-1 rounded"
              >
                <option value="en">{t("english")}</option>
                <option value="ar">{t("arabic")}</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* User Menu */}
      {menuOpen && (
        <div className="absolute right-4 mt-2 bg-white text-black shadow rounded p-2 z-50">
          <button className="block w-full text-left px-2 py-1 hover:bg-gray-100">
            Profile
          </button>
          <button className="block w-full text-left px-2 py-1 hover:bg-gray-100">
            My Account
          </button>
        </div>
      )}
    </div>
  );
}
