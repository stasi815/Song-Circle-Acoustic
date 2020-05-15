import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Title from './Title/Title';
import Footer from './Footer/Footer';
import CompilationsList from './CompilationsList/CompilationsList';
import About from './About/About';
import CompilationDetails from './CompilationDetails/CompilationDetails';
import HymnList from './HymnList'
import Hymn from './Hymn/Hymn';

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Route exact path='/' component={CompilationsList} />
        <Route path="/about" component={About} />
        <Route path="/details/:id" component={CompilationDetails} />
        <Route path=":id/:name" component={Hymn} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
