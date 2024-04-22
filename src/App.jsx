import logo from './logo.svg';
import './App.css';
import logo2 from './image.png'
import bank from './bank.jpg'
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo2} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonComponent className="margin-3" content="Click Me!" />
        <div>
          <h1>Ecco una bella foto!</h1>
          <ImageComponent src={bank} alt="banca" />
        </div>
      </header>
    </div>
  );
}

export default App;
