import React, { useState } from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import { IoIosArrowForward } from "react-icons/io";
import { FaChartBar } from "react-icons/fa";

function ReportsMenuSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-start gap-3 px-4 py-3 rounded-lg hover:text-gray-100 hover:bg-white hover:bg-opacity-20 transition-all"
      ><FaChartBar />


        <span className="flex items-center justify-center gap-28">
          Reports{" "}
          {isOpen ?  <IoIosArrowForward className="rotate-90 mt-2 " />: <IoIosArrowForward />}
        </span>
      </button>

      <div
        className={`ml-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <a
          href="/reports/sales"
          className="flex items-center text-sm  hover:text-gray-100 hover:bg-white hover:bg-opacity-20 transition-all p-2 rounded"
        >
          <DescriptionIcon fontSize="small" />
          <span className="ml-2">Sales</span>
        </a>
        <a
          href="/reports/traffic"
          className="flex items-center text-sm hover:text-gray-100 hover:bg-white hover:bg-opacity-20 transition-all p-2 rounded"
        >
          <DescriptionIcon fontSize="small" />
          <span className="ml-2">Traffic</span>
        </a>
      </div>
    </div>
  );
}

export default ReportsMenuSection;
