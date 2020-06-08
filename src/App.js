import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My New React Application</h1>
        <br />
        <p>I created this app using react create app command and this is the basic structure of a react app</p>
        <img src={logo} width="200" height="200"/>
        <hr />
        <p>Edited by Rooshan Ahmed&copy;</p>
      </header>
    </div>
  );
}

export default App;
