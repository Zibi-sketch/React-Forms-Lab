import React from "react";


function Filter({ selectedCategory, onCategoryChange, search, onSearchChange }) {
  return (
    <div className="Filter">
      <label htmlFor="search">Search items:</label>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Type to search..."
        value={search} 
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <label htmlFor="category">Filter by category:</label>
      <select
        id="category"
        name="category"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
        <option value="Meat">Meat</option>
      </select>
    </div>
  );
}

export default Filter;