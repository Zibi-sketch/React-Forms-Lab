import React from "react";

function ItemForm({onSearchChange , search, handleSubmit, onItemFormSubmit}) {
  
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Produce');

  function handleItemSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: Date.now(), 
      name: name,
      category: category,
      price: "$1.00",
      inStock: true
    };

    setName ('');

    onItemFormSubmit(newItem);
  }
  
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
        type="text" 
        placeholder="Search products..." 
        value={search} 
        onChange={onSearchChange} {(e) => setName(e.target.value)} 
          required/>
      </label>

      <label>
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onClick={handleItemSubmit}>Add to List</button>
    </form>
  );
}

export default ItemForm;