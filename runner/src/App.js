// eslint-disable-next-line
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import User from './components/User';
function App(){
  return (
    <div className="container">
      <Navbar title="User app"/>
      <User/>
    </div>
  );
}

export default App;