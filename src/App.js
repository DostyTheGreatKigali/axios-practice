import './App.css';
import PersonList from './components/PersonList.js';
import PersonAdd from './components/PersonAdd';

function App() {
  return (
    <div className="App">
      <PersonAdd/>
      <PersonList/>
    </div>
  );
}

export default App;
