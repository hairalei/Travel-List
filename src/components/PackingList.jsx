/* eslint-disable react/prop-types */
import Item from './Item';

function PackingList({ list, handlePacked }) {
  return (
    <div className='list'>
      <ul>
        {list.map((item) => (
          <Item key={item.id} item={item} handlePacked={handlePacked} />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
