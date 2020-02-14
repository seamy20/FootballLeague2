import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';

// Content
import FixedNav from './components/FixedNav.js'
import Routes from './routes/Routes.js'
import Footer from './components/Footer.js'
// var cors = require('cors');
// var express = require('express');
// var app = express();

// app.use(cors());

class App extends Component {

  render() {
    return (
        <Router >
          <div>
            <FixedNav />
            <Routes />
            <Footer />
          </div>
        </Router>
    );
  }
}

export default App;
