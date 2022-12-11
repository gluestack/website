import React from "react";

function SearchBar() {
  return (
    <>
      <form className="form bg-dark-700">
        <label
          htmlFor="default-search"
          className="lable"
        >
          Search
        </label>
        <div className="search_div">
          <svg
            className="absolute inset-y-0 left-0 w-5 h-5 mt-1 text-gray-500 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <input
            type="search"
            id="default-search"
            className="search"
            placeholder="Search Mockups, Logos..."
            required
          />
        </div>
      </form>
    </>
  );
}

export default SearchBar;
