import React, { SyntheticEvent } from "react";
import { FaTrash } from "react-icons/fa"; // Importing the trash icon

interface Props {
  onPortfolioDelete: (e: SyntheticEvent) => void;
  portfolioValue: string;
}

const DeletePortfolio = ({ onPortfolioDelete, portfolioValue }: Props) => {
  return (
    <div>
      <form onSubmit={onPortfolioDelete}>
        <input hidden={true} value={portfolioValue} readOnly /> {/* Made input readonly */}
        <button
          className="px-4 py-2 font-semibold text-white duration-200 border rounded-lg bg-red-600 hover:text-red-600 hover:bg-white border-red-600 flex items-center justify-center"
          aria-label="Delete Portfolio"
        >
          <FaTrash className="text-lg" /> {/* Trash icon */}
        </button>
      </form>
    </div>
  );
};

export default DeletePortfolio;
