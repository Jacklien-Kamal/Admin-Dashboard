import React from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import { useTheme } from "../../context/Theme";

export default function ThemeToggler() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 text-dark dark:text-white  py-2 text-xl"
    >
      {theme === "dark" ? <LuSun /> : <LuMoon />}
    </button>
  );
}
