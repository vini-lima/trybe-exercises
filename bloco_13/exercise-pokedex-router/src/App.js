import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router className="App">
      <Header />
      <Content />
    </Router>
  );
}

export default App;