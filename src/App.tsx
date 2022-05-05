import React from 'react';
import logo from './logo.svg';
import './App.css';

import ReactQueryComp from './components/ReactQueryComp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Playground
          </h1>
      </header>
      <div className='content'>
        <ReactQueryComp/>
      </div>
    </div>
  );
}

export default App;
