import logo from './logo.svg';
import './App.css';

import React from 'react';

const App = () => {
  return (
    <div className="App">
      <Title>Nations</Title>
      <NationList />
    </div>
  );
};

const Title = (props) => <h1>{props.children}</h1>;

const NationList = () => (
  <React.Fragment>
    <li>Japan</li>
    <li>Germany</li>
    <li>Spanin</li>
    <li>Costa Rica</li>
  </React.Fragment>
);

export default App;
