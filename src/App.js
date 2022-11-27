import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LastMinute from './components/pages/LastMinute';
import Destinations from './components/pages/Destinations';
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/lastMinute' element={<LastMinute />} />
          <Route path='/destinations' element={<Destinations />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
