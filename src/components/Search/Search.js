import React from "react";
import "./search.scss";
const Search = () => {
  return (
    <div className="wrapper-product">
      <form className="search">
        <input type="text" className="search__input" placeholder="Search" />
        <button className="search__btn">Search</button>
      </form>
    </div>
  );
};

export default Search;
