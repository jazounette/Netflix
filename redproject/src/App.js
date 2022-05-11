//import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Inscription from './views/Inscription';
import Maison from './views/Maison';


function App() {
  return (
    <div className="App">

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Maison/>}/>
          <Route path="/inscription" element={<Inscription/>}/>
          <Route path="/*" element={<Maison/>}/>
        </Routes>
    </BrowserRouter>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}
    </div>
  );
}

export default App;
