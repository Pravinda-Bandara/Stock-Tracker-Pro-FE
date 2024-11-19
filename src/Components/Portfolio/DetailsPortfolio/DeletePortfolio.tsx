import React from "react";
import { Link } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa"; // Importing Font Awesome icon

interface Props {
  portfolioValue: string;
}

const DetailsPortfolio = ({ portfolioValue }: Props) => {
  return (
    <Link to={`/company/${portfolioValue}/company-profile`}>
      <button className="px-4 py-2 font-semibold text-white bg-bgGreen5 border border-bgGreen5 rounded-lg hover:bg-white hover:text-green-500 hover:border-green-500 flex items-center justify-center">
        <FaInfoCircle className="text-lg" /> {/* Added the icon */}
      </button>
    </Link>
  );
};

export default DetailsPortfolio;
