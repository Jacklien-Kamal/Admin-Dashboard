import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaUserCircle } from "react-icons/fa";
import { LuDoorClosed, LuDoorOpen, LuSettings } from "react-icons/lu";

export default function UserDropdown() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        onBlur={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        {/* User Profile */}
        <div className="flex items-center gap-2">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="avatar"
            className="w-9 h-9 rounded-full object-cover"
          />
          <div className="text-left hidden sm:block">
            <div className="text-sm font-semibold text-slate-700">
              Json Taylor
            </div>
            <div className="text-xs text-gray-500">{t("Web Designer")}</div>
          </div>
        </div>
      </button>
      {/* User Menu */}
      {menuOpen && (
        <div
          className="absolute text-sm bg-white text-black dark:bg-primary-body  dark:text-white shadow rounded py-1 z-50 w-32 "
          onBlur={() => setMenuOpen(!menuOpen)}
        >
          <button className="flex items-center gap-2 w-full text-left px-2 py-2 hover:bg-primary-light  hover:bg-opacity-80">
            <FaUserCircle /> Profile
          </button>

          <button className="flex items-center gap-2 w-full text-left px-2 py-2 hover:bg-primary-light  hover:bg-opacity-80">
            <LuSettings /> settings
          </button>
          <button className="flex items-center gap-2 w-full text-left px-2 py-2 hover:bg-primary-light  hover:bg-opacity-80">
            <LuDoorOpen /> Logout{" "}
          </button>
        </div>
      )}
    </div>
  );
}
