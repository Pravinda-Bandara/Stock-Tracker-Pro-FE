import React, { useState, ChangeEvent, SyntheticEvent, useEffect } from "react";
import { CompanySearch } from "../../company";
import { searchCompanies } from "../../api";
import Search from "../../Components/Search/Search";
import ListPortfolio from "../../Components/Portfolio/ListPortfolio/ListPortfolio";
import CardList from "../../Components/CardList/CardList";
import { PortfolioGet } from "../../Models/Portfolio";
import {
  portfolioAddAPI,
  portfolioDeleteAPI,
  portfolioGetAPI,
} from "../../Services/PortfolioService";
import { toast } from "react-toastify";

interface Props {}

const SearchPage = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<PortfolioGet[] | null>([]);
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getPortfolio();
  }, []);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getPortfolio = () => {
    setIsLoading(true);
    portfolioGetAPI()
      .then((res) => {
        if (res?.data) {
          setPortfolioValues(res?.data);
        }
      })
      .catch((e) => {
        setPortfolioValues(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    portfolioAddAPI(e.target[0].value)
      .then((res) => {
        if (res?.status === 204) {
          toast.success("Stock added to portfolio!");
          getPortfolio();
        }
      })
      .catch((e) => {
        toast.warning("Could not add stock to portfolio!");
      });
  };

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    portfolioDeleteAPI(e.target[0].value).then((res) => {
      if (res?.status == 200) {
        toast.success("Stock deleted from portfolio!");
        getPortfolio();
      }
    });
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      toast.error(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
  };
  

  return (
    <div className="flex flex-col lg:flex-row flex-center justify-center p-5 space-y-5 lg:space-y-0 lg:space-x-5"> {/* Set flex-col on smaller screens and row on larger */}
      {/* Left column: Search and CardList */}
      <div className="w-full lg:w-5/12 space-y-5"> {/* Full width on small screens, half on large */}
        <Search
          onSearchSubmit={onSearchSubmit}
          search={search}
          handleSearchChange={handleSearchChange}
        />
        <CardList
          searchResults={searchResult}
          onPortfolioCreate={onPortfolioCreate}
        />
      </div>
      {/* Right column: ListPortfolio */}
      <div className="w-full lg:w-6/12"> {/* Full width on small screens, half on large */}
        <ListPortfolio
          portfolioValues={portfolioValues!}
          onPortfolioDelete={onPortfolioDelete}
          isLoading={isLoading}
        />
      </div>


    </div>
  );
};

export default SearchPage;
