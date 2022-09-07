import logo from './logo.svg';
import './App.css';

import React from 'react';

const App = () => {
  const teamData = ['Yankees', 'Angels', 'Dodgers','Mariners'];
  
  return (
    <div className="App">
      <Title>Teams</Title>
      <TeamList teamData={teamData} />
    </div>
  );
};

const Title = (props) => <h1>{props.children}</h1>;

const TeamList = ({teamData}) => (
  <>
    {teamData.map(team => 
      <div key={team} className="my-team">{team}</div>
    )}
  </>
);

export default App;
