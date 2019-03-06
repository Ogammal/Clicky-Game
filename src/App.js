import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav.js"
import Header from "./components/Header.js"
import Main from "./components/Main"
import Footer from "./components/Footer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
