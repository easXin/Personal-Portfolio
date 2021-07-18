import React, { useState, useEffect } from 'react'
import Header from './components/header/Header'
import Section from './components/body/Section'
import './App.css';

function App() {
  

  return (
    <div className="app scrollbar">
      <Header name="Eric Wang" />
      <Section  />
    </div>
  );
}

export default App;
