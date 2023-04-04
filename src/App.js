import React, { useEffect } from 'react';
import './App.module.scss';
import BaseLayout from './components/BaseLayout';
import { HashRouter } from 'react-router-dom';
import Home from './components/home/Home';
import Navbar from './components/Navbar';


function App() {

  return (
    <div>
      <HashRouter>
        <BaseLayout />
      </HashRouter>
    </div>
  );
}

export default App;
