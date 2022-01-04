import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import Header from './_components/Header';
import Footer from './_components/Footer';


function App() {
  return (
      <>
        <Router>
          <Header />
          <Routes>

            <Route path="/" element={
              <Home /> } strict exact />

            <Route path="*" element={
              <Navigate to="/" /> } strict exact />

            <Route path="/login" element={
              <Login /> } strict exact />

            <Route path="/profile" element={
              <UserProfile /> } strict exact />

          </Routes>
          <Footer />
        </Router>
      </>
  );
}


export default App;