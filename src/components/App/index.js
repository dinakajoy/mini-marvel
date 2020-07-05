import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import HomePage from '../HomePage';
import './App.css';

function App() {
  return (
    <>
      <Header />
      
        <HomePage />
      <Footer />
    </>
  );
}

export default App;
