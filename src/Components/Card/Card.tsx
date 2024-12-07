import React, { SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import { CompanySearch } from "../../company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({
  id,
  searchResult,
  onPortfolioCreate,
}: Props): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row bg-bgGray9 mb-6"
      key={id}
      id={id}
    >
      {/* Left Section */}
      <div className="flex flex-col md:flex-row items-center md:items-center w-full md:w-auto space-y-2 md:space-y-0 md:space-x-4">
        <Link
          to={`/company/${searchResult.symbol}/company-profile`}
          className="font-bold text-center md:text-left text-veryDarkViolet text-black"
        >
          {searchResult.name} ({searchResult.symbol})
        </Link>
      </div>

      {/* Right Section: Currency and Add Button */}
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
        {/* Currency Info */}
        <div className="flex flex-row items-center space-x-1">
          <p className="text-gray-600 text-sm">Currency:</p>
          <p className="text-gray-600 text-sm font-medium">{searchResult.currency}</p>
        </div>
        {/* Add Portfolio Button */}
        <div>
          <AddPortfolio
            onPortfolioCreate={onPortfolioCreate}
            symbol={searchResult.symbol}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
