/* eslint-disable react/prop-types */
import Item from './Item';

function PackingList({ list, handlePacked, handleDelete }) {
  return (
    <div className='list'>
      <ul>
        {list.map((item) => (
          <Item
            key={item.id}
            item={item}
            handlePacked={handlePacked}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
