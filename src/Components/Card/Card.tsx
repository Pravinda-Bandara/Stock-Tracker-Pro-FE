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
      className="flex flex-col items-start justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row bg-bgGray9 mb-6"
      key={id}
      id={id}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center w-full md:w-auto space-y-2 md:space-y-0 md:space-x-4">
        <Link
          to={`/company/${searchResult.symbol}/company-profile`}
          className="font-bold text-center md:text-left text-veryDarkViolet text-textGray4"
        >
          {searchResult.name} ({searchResult.symbol})
        </Link>
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-1 md:space-x-2 md:space-y-0">
          <p className="text-textGray4 text-sm">Currency:</p>
          <p className="text-textGray4 text-sm font-medium">{searchResult.currency}</p>
        </div>
      </div>

      <div className="mt-4 md:mt-0">
        <AddPortfolio
          onPortfolioCreate={onPortfolioCreate}
          symbol={searchResult.symbol}
        />
      </div>
    </div>
  );
};

export default Card;
