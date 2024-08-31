import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import VenueDetails from './pages/VenueDetails';
import Booking from './pages/Booking';
import PaymentConfirmation from './pages/PaymentConfirmation';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/" element={<Home />} />
            <Route path="/venue/:id" element={<VenueDetails />} />
            <Route path="/booking/:id" element={<Booking />} />
            <Route path="/confirmation" element={<PaymentConfirmation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;