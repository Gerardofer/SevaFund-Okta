import React, { Component } from 'react';
import Navbar from "./components/layout/Navbar";
import {BrowserRouter as Router, Route} from "react-router-dom"; 

import Home from "./components/pages/Home";
import Staff from "./components/pages/Staff";

import './App.css';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Route path="/" exact={true} component={Home} />
            <Route path="/staff" exact={true} component={Staff} />
            <h1>Hello There!!!</h1>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
