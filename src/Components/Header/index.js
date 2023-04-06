import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../../Assets/dogs.svg';
import { HeaderContainer } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <nav className="container">
        <Link className="logo" to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        <Link className="login" to="/login">
          Login / Criar
        </Link>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
