import React, { ChangeEvent, SyntheticEvent } from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
  onSearchSubmit: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({
  onSearchSubmit,
  search,
  handleSearchChange,
}: Props): JSX.Element => {
  return (
    <section className="flex justify-center py-8">
      <div className="max-w-lg w-full px-4">
        <form onSubmit={onSearchSubmit} className="flex items-center">
          <input
            type="text"
            placeholder="Search companies..."
            value={search}
            onChange={handleSearchChange}
            className="flex-1 p-3 border border-gray-300 rounded-l-lg bg-gray-100 focus:outline-none focus:border-green-500"
          />
          <button
            type="submit"
            className="px-5 py-3 bg-bgGreen5 text-white font-semibold border border-bgGreen5 rounded-r-lg hover:bg-green-600 hover:text-green-500 transition-colors"
          >
            <FaSearch className="text-white text-2xl" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Search;
