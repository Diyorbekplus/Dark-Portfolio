import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Style/css/Main.css"
import Navbar from './Navbar/Navbar';
import Home from './Pages/Home';
import Features from './Pages/Features';
import Skills from './Pages/Skills';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Navbar/>
  <Home/>
  <Features/>
  <Skills/>
  <Portfolio/>
  <Contact/>
  </>
);
