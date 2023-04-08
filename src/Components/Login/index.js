import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import LoginForm from './LoginForm';
import { UserContext } from '../../UserContext';

const Login = () => {
  const { login } = useContext(UserContext);

  if (login) return <Navigate to="/conta" />;
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/create" element={<LoginCreate />} />
        <Route path="/password-lost" element={<LoginPasswordLost />} />
        <Route path="/password-reset" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
};

export default Login;
