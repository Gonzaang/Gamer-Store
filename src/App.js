import React, { Component } from 'react';
import Img from './components/Img';
import Title from './components/Title'
import ReactLink from './components/ReactLink'
import NavBar from './components/NavBar'
import './App.css';

function App (){
  return (<>
      
        <NavBar />
        <Img />
        <Title />
        <ReactLink />    
    </>
  );
}

export default App;
