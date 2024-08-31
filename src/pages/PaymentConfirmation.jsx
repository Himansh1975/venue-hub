import React from 'react';
import { Link } from 'react-router-dom';

function PaymentConfirmation() {
  return (
    <div className="container mx-auto mt-8 max-w-md text-center">
      <h1 className="text-2xl font-bold mb-4">Booking Confirmed!</h1>
      <p className="mb-4">Your booking has been successfully confirmed and paid for.</p>
      <p className="mb-8">You will receive a confirmation email shortly.</p>
      <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg">
        Return to Home
      </Link>
    </div>
  );
}

export default PaymentConfirmation;