import logo from './logo.svg';
import './App.css';

import React from 'react';

const App = () => {
  const capitalData = [{
    id : 1,
    name : 'Japan',
    capital : 'Tokyo',
  },{
    id : 2,
    name : 'Australia',
    capital : 'Canberra',
  },{
    id : 3,
    name : 'France',
    capital : 'Paris',
  },{
    id : 4,
    name : 'Spain',
    capital : 'Madrid',
  }];
  
  return (
    <div className="App">
      <Title>Capital City</Title>
      <CaptalList capitalData={capitalData}/>
    </div>
  );
};

const Title = (props) => <h1>{props.children}</h1>;

const CaptalList = ({capitalData}) => (
  <dl className="my-def">
    {capitalData.map(c => (
      <React.Fragment key={c.id}>
        <dt>{c.name}</dt>
        <dd>{c.capital}</dd>
      </React.Fragment>
    ))}
  </dl>
);

export default App;
