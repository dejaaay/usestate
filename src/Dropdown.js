import React from "react";

function Dropdown({ options, onChange }) {
    return (
      <select onChange={(e) => onChange(e.target.value)}>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    );
  }
  

export default Dropdown;