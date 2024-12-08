import React, { useState } from 'react';

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      // Handle the search logic, like navigating to a search results page
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <form onSubmit={handleSearchSubmit} className="relative flex items-center w-full max-w-md mx-auto">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search for books..."
        className="w-full py-2 px-4 rounded-l-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-cyan-500 rounded-r-lg transition"
      />
      <button
        type="submit"
        className="absolute right-0 top-0 bottom-0 px-4 py-2 bg-cyan-500 text-white rounded-r-lg hover:bg-cyan-400 focus:outline-none transition"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
