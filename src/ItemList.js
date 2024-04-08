import React from 'react';
import Item from './item';

const ItemList = ({ items, toggleComplete, editItem, deleteItem }) => {
  return (
    <ul className="item-list">
      {items.map(item => (
        <Item
          key={item.id}
          item={item}
          toggleComplete={toggleComplete}
          editItem={editItem} // Passing editItem down to each Item
          deleteItem={deleteItem}
        />
      ))}
    </ul>
  );
};

export default ItemList;
