import logo from './logo.svg';
import './App.css';

import {useState, useRef, useEffect} from 'react';

function App() {
  const [message, setMessage] = useState('');
  const textInput = useRef();
  
  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  
  useEffect(() => {
    textInput.current.focus();
  }, []);
  
  return (
    <div className="App">
      <Title>Ref</Title>
      <div>
        <input 
          type="text"
          onChange={handleChange}
          ref={textInput}
        />
      </div>
      <hr />
      <div>{message}</div>
    </div>
  );
}

const Title = (props) => <h1>{props.children}</h1>;

export default App;
