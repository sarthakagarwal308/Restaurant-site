import React from 'react';
import Logo from './components/logo.js';
import Navbar from './components/navbar.js';
import Contact from './components/contact.js';
import Closing from './components/closing.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet"></link>
      <Logo/>
      <Navbar/>
      <Contact/>
      <Closing/>
    </div>
  );
}

export default App;
