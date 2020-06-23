import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

import './App.css';

function App() {
  return (
    <div className="App">
        <div className="pure-g">
            <Sidebar></Sidebar>
            <MainContent></MainContent>
        </div>
    </div>
  );
}

export default App;
