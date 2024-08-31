import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className="container mx-auto mt-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to TurfBooking</h1>
      <p className="mb-8">Find and book sports venues in your area</p>
      <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg">
        Explore Venues
      </Link>
    </div>
  );
}

export default Welcome;