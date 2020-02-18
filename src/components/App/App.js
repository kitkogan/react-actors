import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Contact />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
