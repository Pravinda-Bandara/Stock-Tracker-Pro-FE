import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaTable, FaMoneyBill, FaBriefcase } from "react-icons/fa";
import { FaTableCells } from "react-icons/fa6";
import { SlGraph } from "react-icons/sl";

type Props = {};

const Sidebar = (props: Props) => {
  const [activeTab, setActiveTab] = useState<string>("Company Profile");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  // Centralized active styles
  const activeStyles = "text-textWhite";


  return (
    <nav className="fixed md:block py-4 px-6 mt-16 top-0 bottom-0 w-56 bg-bgBlack left-0 transition-all duration-300 ease-in-out transform md:translate-x-0 -translate-x-full h-full">
      <div className="flex-col min-h-full px-0 pt-7 flex flex-wrap items-center justify-between w-full mx-auto overflow-y-auto">
        <div className="flex bg-bgBlack flex-col items-stretch opacity-100 relative mt-4 h-auto z-40 items-center flex-1 rounded w-full">
          <div className="md:flex-col md:min-w-full flex flex-col list-none">
            <Link
              to="/search"
              onClick={() => handleTabClick("Portfolio")}
              className={`flex md:min-w-full ${
                activeTab === "Portfolio" ? activeStyles : "text-textGreen4"
              } text-xs uppercase block pt-1 pb-4 no-underline`}
            >
              <FaBriefcase />
              <h6 className="ml-3">Portfolio</h6>
            </Link>
            <Link
              to="company-profile"
              onClick={() => handleTabClick("Company Profile")}
              className={`flex md:min-w-full ${
                activeTab === "Company Profile" ? activeStyles : "text-textGreen4"
              } text-xs uppercase block pt-1 pb-4 no-underline`}
            >
              <FaHome />
              <h6 className="ml-3">Company Profile</h6>
            </Link>
            <Link
              to="income-statement"
              onClick={() => handleTabClick("Income Statement")}
              className={`flex md:min-w-full ${
                activeTab === "Income Statement" ? activeStyles : "text-textGreen4"
              } text-xs uppercase block pt-1 pb-4 no-underline`}
            >
              <FaTable />
              <h6 className="ml-3">Income Statement</h6>
            </Link>
            <Link
              to="balance-sheet"
              onClick={() => handleTabClick("Balance Sheet")}
              className={`flex md:min-w-full ${
                activeTab === "Balance Sheet" ? activeStyles : "text-textGreen4"
              } text-xs uppercase block pt-1 pb-4 no-underline`}
            >
              <FaTableCells />
              <h6 className="ml-3">Balance Sheet</h6>
            </Link>
            <Link
              to="cashflow-statement"
              onClick={() => handleTabClick("Cashflow Statement")}
              className={`flex md:min-w-full ${
                activeTab === "Cashflow Statement" ? activeStyles : "text-textGreen4"
              } text-xs uppercase block pt-1 pb-4 no-underline`}
            >
              <FaMoneyBill />
              <h6 className="ml-3">Cashflow Statement</h6>
            </Link>
            <Link
              to="historical-dividend"
              onClick={() => handleTabClick("Historical Dividend")}
              className={`flex md:min-w-full ${
                activeTab === "Historical Dividend" ? activeStyles : "text-textGreen4"
              } text-xs uppercase block pt-1 pb-4 no-underline`}
            >
              <SlGraph />
              <h6 className="ml-3">Historical Dividend</h6>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
