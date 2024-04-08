import React, { useState } from 'react';

const Item = ({ item, toggleComplete, editItem, deleteItem }) => {
  const { id, name, quantity, complete } = item;
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedQuantity, setEditedQuantity] = useState(quantity);

  // Function to save the edited item
  const handleSave = () => {
    editItem(id, editedName, editedQuantity); // Assuming editItem can handle both name and quantity
    setIsEditing(false); // Exit editing mode
  };

  return (
    <li className={`item ${complete ? 'complete' : ''}`}>
      {isEditing ? (
        <div>
          <input
            type="number"
            value={editedQuantity}
            onChange={(e) => setEditedQuantity(e.target.value)}
            placeholder="Quantity"
          />
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            placeholder="Item Name"
          />
          <button className="save-btn" onClick={handleSave}>Save</button>
          <button className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>{quantity} {name}</p>
          <div>
            <button
              className={`complete-btn ${complete ? 'completed' : ''}`}
              onClick={() => toggleComplete(id)}
            >
              {complete ? 'Undo' : 'Complete'}
            </button>
            <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="remove-btn" onClick={() => deleteItem(id)}>Delete</button>
          </div>
        </div>
      )}
    </li>
  );
};

export default Item;
