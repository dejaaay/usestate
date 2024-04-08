import React, { useState } from 'react';
import './App.css';
import SearchBar from './searchbar';
import ItemList from './ItemList';
import Footer from './footer';
import Dropdown from './Dropdown';

function App() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('All');

  const addList = (listName, quantity) => {
    const newItem = {
      id: Math.random(),
      name: listName,
      quantity: quantity,
      complete: false,
    };
    setItems([...items, newItem]);
  };

  const toggleComplete = (id) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, complete: !item.complete } : item
      )
    );
  };

  const editItem = (id, newName) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, name: newName } : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems(prevItems =>
      prevItems.filter(item => item.id !== id)
    );
  };

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const getFilteredItems = () => {
    switch (filter) {
      case 'Active':
        return items.filter(item => !item.complete);
      case 'Completed':
        return items.filter(item => item.complete);
      case 'All':
      default:
        return items;
    }
  };

  return (
    <div className="app-container">
      <div className="App">
        <h1 className='text-primary'>To Do List</h1>
        <SearchBar addList={addList} />
        <Dropdown onChange={handleFilterChange} options={['All', 'Active', 'Completed']} />
        <ItemList items={getFilteredItems()} toggleComplete={toggleComplete} editItem={editItem} deleteItem={deleteItem} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
