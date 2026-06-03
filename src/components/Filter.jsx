import React from "react";

function Filter({ selectedCategory, onCategoryChange, search, onSearchChange }) {
  return (
    <div className="Filter">
      <label>
        Search items:
        <input
          type="text"
          name="search"
          placeholder="Search..." 
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </label>

      <label>
        Filter by category:
        <select
          name="category"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Bakery</option>
        </select>
      </label>
    </div>
  );
}

export default Filter;