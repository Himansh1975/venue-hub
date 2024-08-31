import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">TurfBooking</Link>
        <div>
          <Link to="/login" className="mr-4">Login</Link>
          <Link to="/signup" className="bg-white text-blue-600 px-4 py-2 rounded">Sign Up</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;