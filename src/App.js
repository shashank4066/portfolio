import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Header from './header';
import About from './About';
import Info from './info';
import Hero from './Hero';
import Projects from './Projects';
import Footer from './Footer';
import AboutPage from './AboutPage'
import ContactForm from "./Contact";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/AboutPage" element={<AboutPage/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Footer" element={<Footer/>}/>
      </Routes>
      </BrowserRouter>
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