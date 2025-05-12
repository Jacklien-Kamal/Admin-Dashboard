import React, { useState } from "react";
import { useLocalization } from "../localization/LocalizationContext";
import { useTranslation } from "react-i18next";
import { FaSearch, FaEnvelope, FaBell, FaUserCircle, FaCog, FaGlobe, FaChurch, FaBars  } from "react-icons/fa";
import { MdOutlineLightMode,  MdOutlineDarkMode} from "react-icons/md";
import { LuMessageSquareText } from "react-icons/lu";
import { AiOutlineSetting } from "react-icons/ai";

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
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-bold">
          <span>Company name</span>
          {/* <FaChurch /> */}
        </div>

        {/* Search */}
        <div className="relative hidden sm:block">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded bg-white text-black w-64 focus:outline-none"
          />
        </div>

        {/* Desktop Icons */}
        <div className="hidden text-xl md:flex items-center gap-4">
           <button
        onClick={toggleTheme}
        className="flex items-center gap-2 text-dark dark:text-white px-4 py-2 text-xl"
      >
        {theme === 'dark' ? <MdOutlineLightMode  /> : <MdOutlineDarkMode />}
       
      </button>
          <button className="relative">
            <LuMessageSquareText />
            <span className="absolute -top-2 -right-2 bg-purple-500 text-xs rounded-full px-1">4</span>
          </button>
          <button className="relative">
            <FaBell />
            <span className="absolute -top-2 -right-2 bg-blue-300 text-xs rounded-full px-1">17</span>
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FaUserCircle />
          </button>
          <button>
            <FaCog />
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
              <FaCog />
              Settings
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
          <button className="block w-full text-left px-2 py-1 hover:bg-gray-100">Profile</button>
          <button className="block w-full text-left px-2 py-1 hover:bg-gray-100">My Account</button>
        </div>
      )}
    </div>
  );
}
