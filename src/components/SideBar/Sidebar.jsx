import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocalization } from "../../localization/LocalizationContext";

import {
  MdDashboard,
  MdPeople,
  MdInventory2,
  MdMenu,
  MdClose,
} from "react-icons/md";

import logo from "../../../public/logo.png";
import ReportsMenuSection from "./Report";
import { FaChartBar } from "react-icons/fa";
import { useTheme } from "../../context/theme";

export default function Sidebar() {
  const { theme } = useTheme();
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();
  const { direction } = useLocalization();
  const location = useLocation();

  const navItems = [
    { path: "/", label: t("dashboard"), icon: <MdDashboard size={20} /> },
    { path: "/users", label: t("users"), icon: <MdPeople size={20} /> },
    {
      path: "/servants",
      label: t("servants"),
      icon: <MdInventory2 size={20} />,
    },
  ];

  return (
    <div id="sidebar"
      className={`text-primary-light dark:text-white h-full transition-all duration-300 ease-in-out px-5  border border-gray-500  border-opacity-100
        ${collapsed ? "w-20 " : "w-70 pe-9"} 
        ${direction === "rtl" ? "text-right" : "text-left"}     ${theme === "dark" ? "darkBg" : "lightBg"}

        `}

    >
      {!collapsed && (
        <div className="flex items-center justify-center h-16 mt-6">
          <h1 className="text-3xl font-bold"> ♰ {t("meeting")} ♰</h1>
        </div>
      )}
   
      <hr className="border border-primary-light dark:border-gray-300 border-opacity-10 mx-auto w-56  "></hr>

      <div className="flex items-center justify-between px-4 py-4">
        {/*  */}
        {!collapsed && <h2 className="text-xl font-bold"></h2>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="dark:text-white hover:text-gray-900 "
        >
          {collapsed ? <MdMenu size={24} /> : <MdClose size={24} />}
        </button>
      </div>

      <ul className="space-y-2 mt-6 text-primary-light dark:text-white text-lg" 
    onMouseOver={() => setCollapsed(false)}

      >
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`flex items-center justify-start gap-3 px-4 py-3 rounded-lg  hover:bg-primary-light hover:bg-opacity-20 transition-all ${
                location.pathname === item.path
                  ? "bg-white bg-opacity-10  font-semibold"
                  : ""
              }`}
            >
              <span>{item.icon}</span>
              {!collapsed && <span className="text-md">{item.label}</span>}
            </Link>
          </li>
        ))}
        {!collapsed ? (
          <li className="">
            <ReportsMenuSection />
          </li>
        ) : (
          <li className="flex items-center justify-start gap-3 px-4 py-3 rounded-lg hover:text-gray-100 hover:bg-white hover:bg-opacity-20 transition-all ">
            <Link to={""}>  <FaChartBar />{" "} </Link>
          
          </li>
        )}
      </ul>
    </div>
  );
}
