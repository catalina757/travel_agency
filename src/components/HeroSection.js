import React from 'react';
import '../App.css';
import './HeroSection.css';
import vid from "../assets/videos/video-2.mp4"

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={vid} autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
    </div>
  );
}

export default HeroSection;
