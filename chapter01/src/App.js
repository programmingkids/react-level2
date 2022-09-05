import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

import {Title} from './components/Title';
import {ControlBox} from './components/ControlBox';
import {TableBox} from './components/Table';
import {initData} from './components/data';

function App() {
  const [data, setData] = useState({
    item : '',
    payment : '',
    amount : '',
    balance : 0,
  });
  
  const [list, setList] = useState(initData);
  
  let [balance, setBalance] = useState(initData[initData.length-1].balance);
  
  const handleChange = (event) => {
    const newData = {...data};
    newData[event.target.id] = event.target.value;
    setData(prevData => newData);
  };
  
  const handleClick = (event) => {
    if(data.payment === 'in') {
      balance += parseInt(data.amount);
    } else {
      balance -= parseInt(data.amount);
    }
    data.balance = balance;
    setList(list => list.concat(data));
    setBalance(prevBalance => balance);
    
    setData({
      item : '',
      payment : '',
      amount : '',
      balance : 0,
    });
  };
  
  return (
    <div className="App">
    <Title>お小遣い帳</Title>
    <ControlBox 
      handleChange={handleChange} 
      handleClick={handleClick}
      data={data}
    />
    <TableBox list={list} />
    </div>
  );
}

export default App;
