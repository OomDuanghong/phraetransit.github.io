import React from "react";
// importing Link from react-router-dom to navigate to  
// different end points. 
import { Link } from 'react-router-dom'

import Navbar from "./navbar/Navbar";
import Hero from './hero/Hero';
import Find from "./find/Find";
import Driver from "./driver/Driver";
import Luxury from "./luxury/Luxury";
import Footer from "./footer/Footer";

const Home = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      <Find />
      <Driver />
      <Luxury />
      <Footer />
    </div>
  );
}

export default Home;
