import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";
import '../App.css'

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Produce");
  const [searchText, setSearchText] = useState("")

  function handleSubmit(event){
    event.preventDefault();
  }

  function handleSearchChange(event) {
    setSearchText(event.target.value);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} handleCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} onSearchChange={handleSearchChange} searchValue={searchText} handleSubmit ={handleSubmit}/>
    </div>
  );
}

export default App;