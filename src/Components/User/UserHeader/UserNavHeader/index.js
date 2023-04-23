import { useContext, useEffect, useState } from 'react';
import { MobileButton, Navegacao } from './styles';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../../../UserContext';
import { ReactComponent as Photos } from '../../../../Assets/feed.svg';
import { ReactComponent as Stats } from '../../../../Assets/estatisticas.svg';
import { ReactComponent as Post } from '../../../../Assets/adicionar.svg';
import { ReactComponent as Logout } from '../../../../Assets/sair.svg';
import useMedia from '../../../../Hooks/useMedia';

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);
  return (
    <>
      <MobileButton
        active={mobileMenu}
        aria-label="Menu"
        onClick={() => setMobileMenu(!mobileMenu)}></MobileButton>

      <Navegacao mobileMenuActive={mobileMenu}>
        <NavLink to="/conta" end>
          <Photos /> {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to="/conta/stats">
          <Stats /> {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="/conta/post">
          <Post /> {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={userLogout}>
          <Logout /> {mobile && 'Sair'}
        </button>
      </Navegacao>
    </>
  );
};

export default UserHeaderNav;
