import React, { useEffect } from 'react';
import './App.module.scss';
import BaseLayout from './components/BaseLayout';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/home/Home';


function App() {

  return (
    <div>
      <BrowserRouter>
        <BaseLayout/>
      </BrowserRouter>
    </div>
  );
}

export default App;
