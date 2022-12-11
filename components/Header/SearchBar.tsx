import React from "react";

function SearchBar() {
  return (
    <>
      <form className="relative w-full max-w-2xl px-8 pt-8 pb-16 bg-dark-700">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative w-full overflow-hidden transition-all duration-500 border-b border-gray-600 border-opacity-50 focus-within:border-gray-600">
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
            className="flex-1 w-full py-1 pl-8 pr-4 tracking-wide text-gray-400 placeholder-gray-500 bg-transparent border-b focus:outline-none"
            placeholder="Search Mockups, Logos..."
            required
          />
        </div>
      </form>
    </>
  );
}

export default SearchBar;
