import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { UserStorage } from './UserContext';
import User from './Components/User';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import Photo from './Components/Photo';
import UserProfile from './Components/User/UserProfile';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
            <Route path="foto/:id" element={<Photo />} />
            <Route path="perfil/:user" element={<UserProfile />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
