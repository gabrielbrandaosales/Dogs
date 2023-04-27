import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import LoginForm from './LoginForm';
import { UserContext } from '../../UserContext';
import { Section } from './styles';
import NotFound from '../NotFound';

const Login = () => {
  const { login } = useContext(UserContext);

  if (login) return <Navigate to="/conta" />;
  return (
    <Section>
      <div className="forms">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<LoginForm />} />
          <Route path="/create" element={<LoginCreate />} />
          <Route path="/lost" element={<LoginPasswordLost />} />
          <Route path="/reset" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </Section>
  );
};

export default Login;
