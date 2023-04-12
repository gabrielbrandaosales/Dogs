import React, { useContext, useState } from 'react';
import { Navegacao } from './styles';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../../UserContext';
import { ReactComponent as Photos } from '../../../../Assets/feed.svg';
import { ReactComponent as Stats } from '../../../../Assets/estatisticas.svg';
import { ReactComponent as Post } from '../../../../Assets/adicionar.svg';
import { ReactComponent as Logout } from '../../../../Assets/sair.svg';

const UserHeaderNav = () => {
  const [mobile, setMobile] = useState(null);
  const { userLogout } = useContext(UserContext);
  return (
    <Navegacao>
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
  );
};

export default UserHeaderNav;
