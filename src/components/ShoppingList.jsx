import React from "react";
import Item from "./Item";

// ShoppingList should only receive the ALREADY filtered items array as a prop
function ShoppingList({ items }) {
  return (
    <div className="ShoppingList">
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