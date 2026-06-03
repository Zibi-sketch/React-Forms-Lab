import React, { useState } from "react";

function ItemForm({ onItemFormSubmit }) {
  // State for form fields
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce"); // Default set to "Produce"

  const handleSubmit = (e) => {
    e.preventDefault(); // Crucial: prevents the page from reloading on form submit

    // Create the new item object structure
    const newItem = {
      id: Date.now(), // Generate a safe unique ID
      name: name,
      category: category,
    };

    // Pass the new item object up to App using the explicit prop callback
    onItemFormSubmit(newItem);

    // Reset the input fields
    setName("");
    setCategory("Produce");
  };

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="item-name">Item Name:</label>
        <input
          type="text"
          id="item-name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="item-category">Category:</label>
        <select
          id="item-category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
        </select>
      </div>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;