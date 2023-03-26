
import React from 'react';
import '../App.css';

function Header() {
  return (
    <header>
      <nav >
      <div className="title">TrekkDeal</div>
      <div className="flex-container">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
          <a href="/destination">Destinations</a>
      </div>
      </nav>
    </header>
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