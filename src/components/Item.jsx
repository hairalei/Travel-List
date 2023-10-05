/* eslint-disable react/prop-types */

function Item({ item, handlePacked, handleDelete }) {
  return (
    <li>
      <input
        type='checkbox'
        name='checkbox'
        id='item.id'
        onClick={() => handlePacked(item.id)}
      />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDelete(item.id)}>❌</button>
    </li>
  );
}

export default Item;
