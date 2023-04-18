import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Header from './header';
import About from './About';
import Info from './info';
import Hero from './Hero';
import Projects from './Projects';
import Footer from './Footer';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}/>
      </Routes>
      </BrowserRouter>
      <Hero/>
      <Info/>
      <About/>
      <Projects/>
      <Footer/>
      </div>
  );
}
export default App;