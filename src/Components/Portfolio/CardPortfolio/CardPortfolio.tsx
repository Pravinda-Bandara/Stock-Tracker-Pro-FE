import React, { SyntheticEvent } from "react";
import DeletePortfolio from "../DeletePortfolio/DeletePortfolio";
import { PortfolioGet } from "../../../Models/Portfolio";
import DetailsPortfolio from "../DetailsPortfolio/DeletePortfolio";

interface Props {
  portfolioValue: PortfolioGet;
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const CardPortfolio = ({ portfolioValue, onPortfolioDelete }: Props) => {
  return (
    <div className="flex flex-col items-center justify-between p-6 space-y-4 text-center bg-white rounded-lg border border-gray-300 bg-bgGray9 hover:scale-105 transition-transform duration-200 ease-in-out">
      <div className="text-sm font-semibold text-textGray4 sm:text-lg text-black">
        {portfolioValue.companyName}
      </div>
      <div className="flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0 space-y-4">
        <DetailsPortfolio portfolioValue={portfolioValue.symbol} />
        <DeletePortfolio
          portfolioValue={portfolioValue.symbol}
          onPortfolioDelete={onPortfolioDelete}
        />
      </div>
    </div>
  );
};

export default CardPortfolio;
