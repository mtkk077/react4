import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [value, setValue] = useState('');
  const [texts, setTexts] = useState([]);
  const [user, userSet] = useState({ ...value })

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleAddText = () => {
    if (value.trim() !== '') {
      setTexts([...texts, value]);
      setValue('');
    }
  };

  const handleEditText = (index) => {
    const newText = prompt('Enter new text:'); 
    if (newText !== null) {
      const newValues = [...texts];
      newValues[index] = newText;
      setTexts(newValues);
    }
  };

  const handleDeleteText = () => {
      user = {}
      userSet(user)
  }

  

  return (
    <div>
      <label htmlFor='name'>Name:</label>
      <input type='text' id='name' value={value} onChange={handleChange} />
      <button className='btn' onClick={handleAddText}>Add</button>
      
      <div>
        {texts.map((text, index) => (
          <div key={index}>
            <p>{text}</p>
            <button className='chg' onClick={() => handleEditText(index)}>Change</button> {}
           
            <button onClick={handleDeleteText}>Delete</button>
          </div>
        ))}

        
      </div>
    </div>
  );
};

export default App;
