import logo from './logo.svg';
import './App.css';

import React from 'react';

const App = () => {
  const friendData = [{
    id : 1,
    name : "Bell",
    age: 15,
    hobby : "Dance",
  },{
    id : 2,
    name : "Elsa",
    age: 18,
    hobby : "Magic",
  },{
    id : 3,
    name : "Ariel",
    age: 16,
    hobby : "Swimming",
  }];
  
  return (
    <div className="App">
      <Title>Friends</Title>
      <FriendTable friendData={friendData} />
    </div>
  );
};

const Title = (props) => <h1>{props.children}</h1>;

const FriendTable = ({friendData}) => (
  <table className="my-table">
    <FriendHeader />
    <FriendBody friendData={friendData} />
  </table>
);

const FriendHeader = () => (
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Hobby</th>
    </tr>
  </thead>
);

const FriendBody = ({friendData}) => (
  <tbody>
    {friendData.map(f => (
      <tr key={f.id}>
        <FriendData {...f}/>
      </tr>
    ))}
  </tbody>
);

const FriendData = ({name, age, hobby}) => (
  <React.Fragment>
    <td>{name}</td>
    <td>{age}</td>
    <td>{hobby}</td>
  </React.Fragment>
);

export default App;
