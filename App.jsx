import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from './components/auth/AuthContext';
import PrivateRoute from './components/auth/PrivateRoute';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Hero from './components/Hero';
import About from './components/About';
import BookRide from './components/BookRide';
import Contact from './components/Contact';
import Details from './components/Details';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Testimonials from './components/Testimonials';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <About />
          </PrivateRoute>
        } />
        <Route path="/book" element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <BookRide />
          </PrivateRoute>
        } />
        <Route path="/contact" element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Contact />
          </PrivateRoute>
        } />
        <Route path="/details" element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Details />
          </PrivateRoute>
        } />
        <Route path="/testimonials" element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Testimonials />
          </PrivateRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;