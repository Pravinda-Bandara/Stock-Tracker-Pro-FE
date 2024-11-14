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
    <div className="flex flex-col items-center p-6 space-y-4 text-center bg-white rounded-lg shadow-md">
      <div className="text-2xl font-semibold text-gray-800">
        {portfolioValue.symbol}
      </div>
      <DetailsPortfolio portfolioValue={portfolioValue.symbol} />
      <DeletePortfolio
        portfolioValue={portfolioValue.symbol}
        onPortfolioDelete={onPortfolioDelete}
      />
    </div>
  );
};

export default CardPortfolio;
