import React, { useState } from "react";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: Date.now().toString(),
      name: name,
      category: category,
    };

    onItemFormSubmit(newItem);

    setName("");
    setCategory("Produce");
  };

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label htmlFor="item-name">Item Name:</label>
      <input
        type="text"
        id="item-name"
        name="name"
        placeholder="Enter item name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="item-category">Category:</label>
      <input
        type="text"
        id="item-category"
        name="category"
        placeholder="Enter category..."
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;