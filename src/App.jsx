import { useState } from 'react';
import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

function App() {
  const [list, setList] = useState([]);
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    setList((l) => [...l, newItem]);

    setDescription('');
    setQuantity(1);
  }

  function handlePacked(id) {
    const newItem = list.map((item) => {
      if (item.id == id) return { ...item, packed: !item.packed };
      else return { ...item };
    });

    setList([...newItem]);
  }

  function handleDelete(id) {
    setList((l) => l.filter((item) => item.id !== id));
  }

  function handleClearList() {
    if (list.length == 0) return;

    const confirm = window.confirm('Delete all items?');

    if (confirm) setList([]);
  }

  return (
    <div className='app'>
      <Logo />
      <Form
        handleSubmit={handleSubmit}
        quantity={quantity}
        description={description}
        setDescription={setDescription}
        setQuantity={setQuantity}
      />
      <PackingList
        list={list}
        handlePacked={handlePacked}
        handleDelete={handleDelete}
        handleClearList={handleClearList}
      />
      <Stats list={list} />
    </div>
  );
}

export default App;
