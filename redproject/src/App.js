//import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Inscription from './views/Inscription';
import Maison from './views/Maison';
import Login from './views/Login';
import Etape1 from './components/Etape1Component/Etape1';
import Etape2 from './components/Etape2Component/Etape2';
import Forfaits from './components/ForfaitsComponent/Forfaits';
import AccueilRessource from './views/AccueilRessource/AccueilRessourceComponent';
import Carrousel from './components/Carrousel/CarrouselComponent';
import Detail from './views/DetailRessource/DetailRessource.Component';



function App() {
  return (
    <div className="App">

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Maison/>}/>
          <Route path="/inscription" element={<Inscription/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/etape1" element={<Etape1/>}/>
          <Route path="/etape2" element={<Etape2/>}/>
        <Route path="/forfaits" element={<Forfaits/>}/> 
          <Route path="/Accueil" element={<AccueilRessource/>}/>
          <Route path="/Carrou" element={<Carrousel/>}/>
          <Route path="/DetailRessource" element={<Detail/>}/>

          <Route path="/*" element={<Maison/>}/>
        </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;



      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header>
