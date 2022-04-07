import Salonger from './components/Salonger';
import data from './data/salonger.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <Salonger data={data} />
    </div>
  );
}

export default App;
