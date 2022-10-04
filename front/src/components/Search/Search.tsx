import React from "react";

const Search = () => {
  return (
    <div className="mt-10">
      <div className="relative block text-textColor">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-64"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          placeholder="Enter your breed"
          className="bg-full w-72 px-4 py-2 rounded-3xl border focus:border-gray-400 focus:ring-2 outline-none leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="results-box max-h-48">
        <div className="results-box_content">
          <ul>
            <li className="cursor-pointer hover:bg-colorGray py-3 px-2 rounded-xl">
              American Bobtail
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Search;
