/* eslint-disable react/prop-types */
function Stats({ list }) {
  const packed = list.filter((item) => item.packed).length;
  return (
    <footer className='stats'>
      <em>
        You have {list.length} items on your list, and you already packed{' '}
        {packed} ({Math.round((packed / list.length) * 100)}%)
      </em>
    </footer>
  );
}

export default Stats;
