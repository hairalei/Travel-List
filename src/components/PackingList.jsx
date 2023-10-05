/* eslint-disable react/prop-types */
import { useState } from 'react';
import Item from './Item';

function PackingList({ list, handlePacked, handleDelete }) {
  const [sortBy, setSortBy] = useState('date');

  let sortedItems;

  switch (sortBy) {
    case 'description':
      sortedItems = list
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
      break;
    case 'packed status':
      sortedItems = list.slice().sort((a, b) => a.packed - b.packed);
      break;
    case 'date':
      sortedItems = list;
      break;
  }

  return (
    <div className='list'>
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            handlePacked={handlePacked}
            handleDelete={handleDelete}
          />
        ))}
      </ul>

      <div className='actions'>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value='date'>Sort by date</option>
          <option value='description'>Sort by description</option>
          <option value='packed status'>Sort by packed status</option>
        </select>
      </div>
    </div>
  );
}

export default PackingList;
