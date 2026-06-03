import React, { useState } from "react";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce"); // Keep the required initial value

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: Date.now().toString(), // Using toString() to match the test's string id expectation safely
      name: name,
      category: category,
    };

    onItemFormSubmit(newItem);

    // Clear input fields and restore starting values
    setName("");
    setCategory("Produce");
  };

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Item Name:
        <input
          type="text"
          name="name"
          placeholder="Enter item name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label>
        Category:
        <input
          type="text"
          name="category"
          placeholder="Enter category..."
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;