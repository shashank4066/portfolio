import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import About from './About';
import Info from './info';
import Hero from './Hero';
import Projects from './Projects';
import Footer from './Footer';
import ContactForm from "./Contact";
import Header from "./header";
function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Info/>
      <About/>
      <Projects/>
      <ContactForm/>
      <Footer/>
      </div>
  );
}
export default App;