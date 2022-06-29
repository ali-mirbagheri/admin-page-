import React from "react";

function SearchBar({ searchValue, setSearchValue }) {
  return (
    <input
      type="text"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      className="search-bar"
      placeholder="جستجوی نام فرد"
    ></input>
  );
}

export default SearchBar;
