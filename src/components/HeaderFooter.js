
import React from 'react';
import '../App.css';
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom'
import About from './about';
import Home from './home'
import Destination from './destinations'
import TrekDetails from './trekDetailsPage';
function Header() {
  return (
    <div>
      <Router>
    <header className="App-header">
      <div className="title">TrekkDeal</div>
      <nav>
      <div className="flex-container">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/destinations">Destinations</Link>
      </div>
      </nav>
    </header>
        <div className="main">
      <Routes>
      <Route exact path="/" element={<Home/>} />  
      <Route path="/contact" element={<About/>} />  
      <Route exact path="/destinations" element={<Destination/>} />
      <Route path="/trekdetails/:trekId" element={<TrekDetails/>} />  
      </Routes>
        </div>
    </Router>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <p>© 2023 TrekkDeal. All rights reserved.</p>
      </div>
    </footer>
  );
}

export { Header, Footer };