import React from "react";

const SearchForm = ({ handleSearch, setMovie }) => {
  return (
    <div className="bg-gray-200 lg:px-10">
      <form
        onSubmit={handleSearch}
        className="flex justify-center items-center h-14 m-auto lg:ml-0
         w-4/5 md:max-w-[678px]"
      >
        <input
          type="search"
          placeholder="Search..."
          onChange={(e) => setMovie(e.target.value)}
          className="h-8 px-6 rounded-l-lg w-full"
        />
        <input
          type="submit"
          value="Search"
          className="bg-yellow-400 rounded-r-lg font-semibold tracking-wide h-8 px-6 "
        />
      </form>
    </div>
  );
};

export default SearchForm;
