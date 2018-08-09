import React, { Component } from 'react';
import './App.css';

import { Navbar, Header, Container, Footer } from './Components/';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Container />
        <Footer />
      </div>
    );
  }
}


export default App;
