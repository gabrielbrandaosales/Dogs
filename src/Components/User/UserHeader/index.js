import { useEffect, useState } from 'react';
import { Header } from './styles';
import UserHeaderNav from './UserNavHeader';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = useState('');
  const { pathname } = useLocation();
  useEffect(() => {
    switch (pathname) {
      case '/conta/post':
        setTitle('Poste Sua Foto');
        break;
      case '/conta/stats':
        setTitle('Estatístico');
        break;
      default:
        setTitle('Minha Conta');
        break;
    }
  }, [pathname]);

  return (
    <Header className="container">
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </Header>
  );
};

export default UserHeader;
