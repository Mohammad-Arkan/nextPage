import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const App = () => {
  return (
    <div>
       <Header/>
      <h1>Hello word</h1>
      <Outlet/>
    </div>
  );
};

export default App;