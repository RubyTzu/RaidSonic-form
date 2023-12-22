import { useState } from "react";
import useFetch from "../API/useFetch";
import CitiesList from "./CitiesList";

const SearchForm = () => {
  const { citiesData, loading, error } = useFetch();
  const [searchData, setSearchData] = useState("");

  const handleSearch = (e) => {
    setSearchData(e.target.value);
  };


const filterData = citiesData.filter((cityData) => {
      return (
        cityData.city.toLowerCase().includes(searchData.toLowerCase()) ||
        cityData.state.toLowerCase().includes(searchData.toLowerCase())
      );
    })

  return (
    <>
      {error && <div className="err">{error}</div>}
      {loading && <div className="loading">Loading...</div>}

      {(!error && !loading && citiesData) && (
        <form className="search-form">
          <input
            type="text"
            className="search"
            placeholder="City or State"
            value={searchData}
            onChange={handleSearch}
          />
          <CitiesList citiesData={filterData} searchData={searchData} />
        </form>
      )}
    </>
  );
};

export default SearchForm;
