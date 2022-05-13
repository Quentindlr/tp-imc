import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FormInsc from './component/formInscription';
import Login from './component/Login';


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path='/connexion' element={<Login />} />
            <Route path='/inscription' element={<FormInsc />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
