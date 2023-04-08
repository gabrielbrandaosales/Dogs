import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { UserStorage } from './UserContext';
import Conta from './Components/Conta';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="/conta" element={<Conta />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
