import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Section } from './styles';
import Input from '../../Forms/Input';
import Button from '../../Forms/Button';
import useForm from '../../../Hooks/UseForm';
import { TOKEN_POST, USER_GET } from '../../../api';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) getUser(token);
  }, []);

  const getUser = async (token) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });
      const response = await fetch(url, options);
      const json = await response.json();
      window.localStorage.setItem('token', json.token);
      getUser(json.token);
    }
  };

  return (
    <Section>
      <form action="" onSubmit={handleLogin}>
        <h1>Login</h1>
        <Input label="Usuário" name="username" type="text" {...username} />
        <Input label="Senha" name="password" type="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/create">Cadastro</Link>
    </Section>
  );
};

export default LoginForm;
