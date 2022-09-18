import React from 'react';
import './App.css';
import { Header, AboutUs, Specials, Chairman, IntroVid, Collabs, Gallery, FindUs, Footer } from './container'
import {Navbar} from './component'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <AboutUs />
      <Specials />
      <Chairman /> 
      <IntroVid />
      <Collabs />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;
