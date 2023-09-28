/* eslint-disable react/prop-types */
// import React from 'react';

function Item({ item, handlePacked }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handlePacked(item.id)}>
        {item.packed ? '✔️' : '❌'}
      </button>
    </li>
  );
}

export default Item;
