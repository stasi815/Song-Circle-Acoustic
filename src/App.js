import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import Footer from './Footer';
import CompilationsList from './CompliationsList'

function App() {
  return (
    <div className="App">
      <Title />
      <CompilationsList />
      <Footer />
    </div>
  );
}

export default App;
