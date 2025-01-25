import logo from './logo.svg';
import './App.css';
import HelloButton from './components/HelloButton';
import TiltedScroll from './components/TiltedScroll';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloButton />
        <p>
          See my resume here.
		  <img src={logo} className="App-logo" alt="logo" />
        </p>
		<TiltedScroll />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
