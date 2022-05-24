import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Accueil from './component/accueil';
import FormInsc from './component/formInscription';
import Login from './component/Login';
import NavBar from './component/NavBar/NavBar2';


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/connexion' element={<Login/>} />
            <Route path='/inscription' element={<FormInsc />} />
            <Route path='/accueil' element={<Accueil />} />
          </Routes>
        </BrowserRouter>

        
      </div>
    );
  }
}

export default App;
