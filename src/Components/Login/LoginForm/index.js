import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Section } from './styles';
import Input from '../../Forms/Input';
import Button from '../../Forms/Button';
import useForm from '../../../Hooks/UseForm';
import { UserContext } from '../../../UserContext';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, login, loading } = useContext(UserContext);

  const handleLogin = async (event) => {
    event.preventDefault();
    if (username.validate() && password.validate())
      userLogin(username.value, password.value);
  };

  return (
    <Section>
      <form action="" onSubmit={handleLogin}>
        <h1>Login</h1>
        <Input label="Usuário" name="username" type="text" {...username} />
        <Input label="Senha" name="password" type="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}

        {error && <>{error}</>}
      </form>
      <Link to="/login/create">Cadastro</Link>
    </Section>
  );
};

export default LoginForm;
