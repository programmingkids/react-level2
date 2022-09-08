import logo from './logo.svg';
import './App.css';

import Title from './components/Title';
import {SubTitle2, SubTitle3} from './components/SubTitle';

function App() {
  return (
    <div className="App">
      <Title>今日の天気</Title>
      <SubTitle2>晴れのち曇り</SubTitle2>
      <SubTitle3>最高気温：29度</SubTitle3>
      <SubTitle3>最低気温：12度</SubTitle3>
    </div>
  );
}

export default App;
