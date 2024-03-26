import './App.css';
import { useEffect, useState } from 'react'
import ChildComponent from './ChildComponent';
import UserContext from './userContext';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [showChild, setShowChlid] = useState(false);
  const handleNameChange = (event) => {
    setName(event.target.value);
    console.log(name);
  };
  const handleAgeChange = (event) => {
    setAge(event.target.value);
    console.log(age);
  };
  const handleButtonClick = () => {
    setShowChlid(true);
  }
  return (
    <UserContext.Provider value={{ name, age }}>
      <div className='baseDiv'>
        <div className='leftDiv'>
          <h4>Full Name :</h4>
          <input type='text' value={name} onChange={handleNameChange} />
          <h4>Age :</h4>
          <input type='number' value={age} onChange={handleAgeChange} />
          <div className='emptyDiv'></div>
          <button className='buttonCSS' onClick={handleButtonClick}>Save</button>
        </div>
        {showChild && <ChildComponent />}
      </div>
    </UserContext.Provider>

  );
}
export default App;
