import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, handleCategoryChange, selectedCategory, onSearchChange, searchValue , handleSubmit}) {
  const itemsToDisplay = items.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;

    const matchesSearch = item.name.toLowerCase().includes(searchValue.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="ShoppingList">
      <ItemForm handleCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} onSearchChange={onSearchChange} searchValue={searchValue} handleSubmit ={handleSubmit}/>

      <Filter onCategoryChange={handleCategoryChange} searchValue={searchValue} />

      <ul className="Items">
        {itemsToDisplay.length > 0 ? (
          itemsToDisplay.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              category={item.category} />
          ))) : (
          <p>No products available.</p>
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;