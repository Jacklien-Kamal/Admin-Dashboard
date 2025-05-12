import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocalization } from "../localization/LocalizationContext";
import logo from "../assets/pngegg.png";

import {
  MdDashboard,
  MdPeople,
  MdInventory2,
  MdMenu,
  MdClose,
} from "react-icons/md";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();
  const { direction } = useLocalization();
  const location = useLocation();

  const navItems = [
    { path: "/", label: t("dashboard"), icon: <MdDashboard size={20} /> },
    { path: "/users", label: t("users"), icon: <MdPeople size={20} /> },
    {
      path: "/products",
      label: t("products"),
      icon: <MdInventory2 size={20} />,
    },
  ];

  return (
    <div
      className={`bg-primary dark:bg-primary-dark text-white h-full transition-all duration-300 ease-in-out   border border-gray-500  border-opacity-30
        ${collapsed ? "w-20" : "w-64"} 
        ${direction === "rtl" ? "text-right" : "text-left"}`}
    >
        {!collapsed && (
          <div className="flex items-center justify-center h-16 mt-6">
          <img src={logo} alt="Company Logo" width={60} className="mr-2" />
          <h1 className="text-xl font-bold"> Company Name </h1>
          <hr className="border  border-white opacity-20 mx-4 my-2" />
        </div>
        )}
        {collapsed && <img src={logo} alt="Company Logo" width={60} className="mx-auto pt-4" />
 }


      <div className="flex items-center justify-between px-4 py-4">



        {!collapsed && <h2 className="text-xl font-bold">{t("adminPanel")}</h2>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-white hover:text-gray-300"
        >
          {collapsed ? <MdMenu size={24} /> : <MdClose size={24} />}
        </button>
      </div>

      <ul className="space-y-2 mt-6">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white hover:bg-opacity-20 transition-all ${
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
      </ul>
    </div>
  );
}
