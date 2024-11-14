import React, { SyntheticEvent } from "react";

interface Props {
  onPortfolioDelete: (e: SyntheticEvent) => void;
  portfolioValue: string;
}

const DeletePortfolio = ({ onPortfolioDelete, portfolioValue }: Props) => {
  return (
    <div>
      <form onSubmit={onPortfolioDelete}>
        <input hidden={true} value={portfolioValue} />
        <button className="px-4 py-2 font-semibold text-white duration-200 border rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500">
          Delete
        </button>
      </form>
    </div>
  );
};

export default DeletePortfolio;
