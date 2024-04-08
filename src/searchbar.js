import React, { useState } from 'react';

const SearchBar = ({ addList }) => {
  const [listName, setListName] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleInputChange = (event) => {
    setListName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddItem = () => {
    if (listName.trim() !== '') {
      addList(listName.trim(), quantity);
      setListName('');
      setQuantity(1);
    }
  };

  return (
    <div className="search-bar search-bar-colored">
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={handleQuantityChange}
        min="1"
        className="quantity-input"
      />
      <input
        type="text"
        placeholder="Enter task to do..."
        value={listName}
        onChange={handleInputChange}
        className="item-input"
      />
      <button onClick={handleAddItem}>Add Task</button>
    </div>
  );
};

export default SearchBar;