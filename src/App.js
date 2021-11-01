import logo from './logo.svg';
import './App.css';
import ReducerCount from './components/ReducerCount/ReducerCount';
import PaitentManagement from './components/PaitentManagement/PaitentManagement';

function App() {
  return (
    <div className="App">
     <ReducerCount></ReducerCount>
     <PaitentManagement></PaitentManagement>
    </div>
  );
}

export default App;
