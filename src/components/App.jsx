import React, { useState } from "react";
import Header from "./Header";
import Filter from "./Filter";
import ShoppingList from "./ShoppingList";
import ItemForm from "./ItemForm";
import initialItems from "../data/items"; 
import '../App.css'

function App() {
  const [items, setItems] = useState(initialItems);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  // Handler for search text changes
  const handleSearchChange = (newSearchText) => {
    setSearchText(newSearchText);
  };

  // Handler for category changes (referenced in Step 2 prompt)
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filter items dynamically based on BOTH category and search text
  const displayedItems = items.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchText.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Callback to add a new item (for Step 3)
  const handleItemFormSubmit = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div className="App">
      <Header />
      {/* Pass the state and required prop callback */}
      <Filter 
        selectedCategory={selectedCategory} 
        onCategoryChange={handleCategoryChange}
        searchText={searchText}
        onSearchChange={handleSearchChange} 
      />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ShoppingList items={displayedItems} />
    </div>
  );
}

export default App;