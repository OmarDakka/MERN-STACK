import './App.css';
import React from 'react';
import {Router} from '@reach/router';
import Home from './components/Home';
import NumberOrWord from './components/NumberOrWord';
import AllOfThem from './components/AllOfThem';


function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <NumberOrWord path="/:id"/>
        <AllOfThem path="/:id/:color/:backgroundColor"/>
      </Router>
    </div>
  );
}

export default App;
