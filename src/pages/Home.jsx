// src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import { venues } from '../seedData';

function Home() {
  const featuredVenues = venues.sort((a, b) => b.popularityScore - a.popularityScore).slice(0, 3);

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Find Your Perfect Turf</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Turfs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredVenues.map((venue) => (
            <Link key={venue.id} to={`/venue/${venue.id}`} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={venue.image} alt={venue.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{venue.name}</h3>
                <p className="text-gray-700 mb-2">{venue.location}</p>
                <p className="text-blue-600 font-semibold">${venue.hourlyRate}/hour</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">All Venues</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {venues.map((venue) => (
            <Link key={venue.id} to={`/venue/${venue.id}`} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={venue.image} alt={venue.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{venue.name}</h3>
                <p className="text-gray-700 mb-2">{venue.location}</p>
                <p className="text-blue-600 font-semibold">${venue.hourlyRate}/hour</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;