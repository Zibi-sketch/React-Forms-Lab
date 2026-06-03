import React from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ 
  items, 
  selectedCategory, 
  onCategoryChange, 
  search, 
  onSearchChange, 
  onItemFormSubmit 
}) {
  return (
    <div className="ShoppingList">
      {/* Form gets its direct execution handler */}
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      
      {/* Filter gets its controlled hooks */}
      <Filter 
        selectedCategory={selectedCategory} 
        onCategoryChange={onCategoryChange}
        search={search}
        onSearchChange={onSearchChange}
      />

      <ul className="Items">
        {items.length > 0 ? (
          items.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              category={item.category}
            />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;