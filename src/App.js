import logo from './logo512.png';
import plane from './plane.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={plane} className="Plane-pic" alt="plane" />
        <p>
          The great changes are coming soon.
        </p>
      </header>
    </div>
  );
}

export default App;
