import './App.css';
import LuckyDraw from './LuckyDraw'

function App() {
  return (
    <div className="App">
      <LuckyDraw howMany={5} howManyLuck={1}></LuckyDraw>
    </div>
  );
}

export default App;
