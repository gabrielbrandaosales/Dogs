import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../../Assets/dogs.svg';
import { HeaderContainer } from './styles';
import { UserContext } from '../../UserContext';

const Header = () => {
  const { data } = useContext(UserContext);
  return (
    <HeaderContainer>
      <nav className="container">
        <Link className="logo" to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className="login" to="/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className="login" to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </HeaderContainer>
  );
};

export default Header;
