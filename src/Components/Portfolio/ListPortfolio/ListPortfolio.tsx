import React, { SyntheticEvent } from "react";
import CardPortfolio from "../CardPortfolio/CardPortfolio";
import { PortfolioGet } from "../../../Models/Portfolio";
import Spinner from "../../Spinners/Spinner";

interface Props {
  portfolioValues: PortfolioGet[];
  onPortfolioDelete: (e: SyntheticEvent) => void;
  isLoading: boolean;
}

const ListPortfolio = ({ portfolioValues, onPortfolioDelete, isLoading }: Props) => {
  return (
    <section id="portfolio">
      <h3 className="my-8 mt-3 text-xl font-semibold text-center md:text-2xl">
        My Portfolio
      </h3>
      <div className="relative flex flex-col items-center max-w-5xl mx-auto px-10 mb-5 md:px-6">
        {isLoading ? (
          <div className="flex justify-center items-center w-full h-64">
            <Spinner isLoading={isLoading} />
          </div>
        ) : (
          <>
            {portfolioValues.length > 0 ? (
              <div className="grid grid-cols-2 gap-6 xsm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-4">
                {portfolioValues.map((portfolioValue) => (
                  <CardPortfolio
                    key={portfolioValue.id}
                    portfolioValue={portfolioValue}
                    onPortfolioDelete={onPortfolioDelete}
                  />
                ))}
              </div>
            ) : (
              <h3 className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
                Your portfolio is empty.
              </h3>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default ListPortfolio;
