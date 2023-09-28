/* eslint-disable react/prop-types */
function Form({
  handleSubmit,
  quantity,
  description,
  setDescription,
  setQuantity,
}) {
  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        name=''
        id=''
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='Item...'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
