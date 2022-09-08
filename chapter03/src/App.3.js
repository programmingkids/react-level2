import logo from './logo.svg';
import './App.css';

import React from 'react';
import {useState, useRef, useEffect} from 'react';

function App() {
  const [person, setPerson] = useState({
    name : '',
    age : '',
    address : '',
  });
  const [addressList, setAddressList] = useState([]);
  const textInput = useRef(null);
  
  const handleChange = (e) => {
    const newPerson = {...person};
    newPerson[e.target.id] = e.target.value;
    setPerson(newPerson);
  };
  
  const handleClick = (e) => {
    setAddressList(prevList => prevList.concat(person));
    setPerson({
      name : '',
      age : '',
      address : ''
    });
    textInput.current.focus();
  };
  
  useEffect(() => {
    textInput.current.focus();
  },[]);
  
  return (
    <div className="App">
      <Title>アドレスブック</Title>
      <ControlBox 
        person={person} 
        handleChange={handleChange}
        handleClick={handleClick}
        textInput={textInput}
      />
      <hr />
      <AddressTable 
        addressList={addressList}
      />
    </div>
  );
}

const Title = (props) => <h1>{props.children}</h1>;

const ControlBox = ({person, handleChange, handleClick, textInput}) => (
  <>
    <div>
      名前：
      <input 
        type="text" 
        id="name" 
        onChange={handleChange}
        value={person.name}
        ref={textInput}
        autoComplete="off"
      />
    </div>
    <div>
      年齢：
      <input 
        type="number" 
        id="age"
        onChange={handleChange}
        value={person.age}
        autoComplete="off"
      />
    </div>
    <div>
      住所：
      <input 
        type="text" 
        id="address" 
        onChange={handleChange}
        value={person.address}
        autoComplete="off"
      />
    </div>
    <div>
      <button onClick={handleClick}>登録</button>
    </div>
  </>
);

const AddressTable = ({addressList}) => (
  <table className="my-table">
    <AddressTableHeader />
    <AddressTableBody addressList={addressList} />
  </table>
);

const AddressTableHeader = () => (
  <thead>
    <tr>
      <th>名前</th>
      <th>年齢</th>
      <th>住所</th>
    </tr>
  </thead>
);

const AddressTableBody = ({addressList}) => (
  <tbody>
    {addressList.map(({name, age, address}) => (
      <tr key={name}>
        <td>{name}</td>
        <td>{age}</td>
        <td>{address}</td>
      </tr>
    ))}
  </tbody>
);

export default App;
