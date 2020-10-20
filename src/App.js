<<<<<<< HEAD
import React, { Component } from 'react';
import Img from './components/Img';
import Title from './components/Title'
import ReactLink from './components/ReactLink'
import NavBar from './components/NavBar/NavBar'
import './App.css';

function App (){
  return (<>
        <NavBar />   
    </>
=======
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> parent of 1e34ba7... components
  );
}

export default App;
