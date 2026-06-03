import '../App.css'
import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import initialItems from "../data/items";

function App() {
  const [items, setItems] = useState(initialItems);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const handleSearchChange = (newSearchText) => {
    setSearch(newSearchText);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleItemFormSubmit = (newItem) => {
    setItems([...items, newItem]);
  };

  // Compute the filtered items here to hand over smoothly
  const displayedItems = items.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="App">
      <Header />
      {/* Pass all state and state updaters down into ShoppingList */}
      <ShoppingList 
        items={displayedItems} 
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        search={search}
        onSearchChange={handleSearchChange}
        onItemFormSubmit={handleItemFormSubmit}
      />
    </div>
  );
}

export default App;