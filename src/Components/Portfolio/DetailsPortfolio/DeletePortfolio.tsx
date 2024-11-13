import React from "react";
import { Link } from "react-router-dom";

interface Props {
  portfolioValue: string;
}

const DetailsPortfolio = ({ portfolioValue }: Props) => {
  return (
    <Link to={`/company/${portfolioValue}/company-profile`}>
      <button className="px-4 py-2 font-semibold text-white bg-blue-500 border border-blue-500 rounded-lg hover:bg-white hover:text-blue-500 hover:border-blue-500">
        Details
      </button>
    </Link>
  );
};

export default DetailsPortfolio;
