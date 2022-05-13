import React from 'react';
import './App.css';
import FormInsc from './component/formInscription';
import { Login } from './component/Login';


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <FormInsc/>
      </div>
    );
  }
}

export default App;
