import React from "react";
import { Outlet } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  ticker: string;
}

const CompanyDashboard = ({ children, ticker }: Props) => {
  return (
    <div className="relative md:ml-64 bg-blueGray-100 w-full">
      <div className="relative pb-32 bg-lightBlue-500 flex justify-center">
        <div className="w-full ">
          <div>
            <div className="flex flex-wrap pb-8 pt-16">{children}</div>
            <div className="flex flex-wrap w-full">{<Outlet context={ticker} />}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
