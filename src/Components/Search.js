import { React, useState, useEffect } from "react";
import axios from "axios";
import "../styles/Search.css";
import DropDown from "./DropDown";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [emptySearch, setEmptySearch] = useState(true);

  const getSearch = (e) => {
    setSearchText(e);
  };

  //onBlur also affects clicking shows in dropDown menu.
  //Need to find a way to check what its clicking
  //maybe add and onClick instead and if target value specific attribute
  //dont do anything but its normal function
  // const resetInput = () => {
  //   setEmptySearch(true);
  //   setSearchResults([]);
  //   setSearchText("");
  // };

  useEffect(() => {
    const fetchSearch = async () => {
      if (searchText.length < 3) return;

      const result = await axios(
        `https://api.jikan.moe/v3/search/anime?q=${searchText}`
      );
      setSearchResults(result.data.results);
    };

    if (searchText === "") {
      setEmptySearch(true);
      setSearchResults([]);
    } else {
      setEmptySearch(false);
      fetchSearch();
    }
  }, [searchText]);

  return (
    <div>
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => getSearch(e.target.value)}
      />
      <DropDown emptySearch={emptySearch} searchResults={searchResults} />
    </div>
  );
};

export default Search;
