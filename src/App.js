import React, { useState, useEffect } from 'react'
import Header from './components/header/Header'
import Section from './components/body/Section'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

import './App.css';

function App() {

  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      })
      .catch(err => {
        console.warn(err.message)
      });
  }, [resumeData]);
  return (

    <div className="app scrollbar">

      <Header data={resumeData.header} />
      <Section />
    </div>
  );
}

export default App;
