import React from "react";

function Filter({ selectedCategory, onCategoryChange, search = "", onSearchChange }) {
  return (
    <div className="Filter">
      <div className="search-container">
        <label htmlFor="search">Search items:</label>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            if (typeof onSearchChange === "function") {
              onSearchChange(e.target.value);
            }
          }}
        />
      </div>

      <div className="category-container">
        <label htmlFor="category">Filter by category:</label>
        <select
          id="category"
          name="category"
          value={selectedCategory}
          onChange={(e) => {
            if (typeof onCategoryChange === "function") {
              onCategoryChange(e.target.value);
            }
          }}
        >
          <option value="All">All</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;