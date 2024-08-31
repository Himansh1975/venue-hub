// src/pages/VenueDetails.js

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { venues } from '../seedData';

function VenueDetails() {
  const { id } = useParams();
  const venue = venues.find(v => v.id === parseInt(id));

  if (!venue) {
    return <div className="container mx-auto mt-8 px-4">Venue not found</div>;
  }

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-4">{venue.name}</h1>
      <img src={venue.image} alt={venue.name} className="w-full h-64 object-cover mb-4 rounded-lg" />
      <p className="mb-4 text-gray-700">{venue.description}</p>
      <p className="mb-4"><strong>Location:</strong> {venue.location}</p>
      <div className="mb-4">
        <strong>Amenities:</strong>
        <ul className="list-disc list-inside mt-2">
          {venue.amenities.map((amenity, index) => (
            <li key={index} className="text-gray-700">{amenity}</li>
          ))}
        </ul>
      </div>
      <p className="mb-4"><strong>Hourly Rate:</strong> ${venue.hourlyRate}</p>
      <Link to={`/booking/${id}`} className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg inline-block hover:bg-blue-700 transition-colors duration-300">
        Book Now
      </Link>
    </div>
  );
}

export default VenueDetails;