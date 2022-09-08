import logo from './logo.svg';
import './App.css';

import Title from './components/Title';
import {SubTitle2, SubTitle3} from './components/SubTitle';
import {
  Title as MainTitle,
  Title2 as MainTitle2,
  Title3 as MainTitel3,
} from './components/Message';

function App() {
  return (
    <div className="App">
      <Title>今日の天気</Title>
      <SubTitle2>晴れのち曇り</SubTitle2>
      <SubTitle3>最高気温：29度</SubTitle3>
      <SubTitle3>最低気温：12度</SubTitle3>
      <MainTitle>明日の天気</MainTitle>
      <MainTitle2>曇り</MainTitle2>
      <MainTitel3>最高気温：20度</MainTitel3>
      <MainTitel3>最低気温：8度</MainTitel3>
    </div>
  );
}

export default App;
