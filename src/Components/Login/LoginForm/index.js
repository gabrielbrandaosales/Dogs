import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Section, StyledLink } from './styles';
import Input from '../../Forms/Input';
import Button from '../../Forms/Button';
import useForm from '../../../Hooks/useForm';
import { UserContext } from '../../../UserContext';
import Error from '../../Helper/Error';
import Head from '../../Helper/Head';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  const handleLogin = async (event) => {
    event.preventDefault();
    if (username.validate() && password.validate())
      userLogin(username.value, password.value);
  };

  return (
    <Section className="animeLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form className="form" onSubmit={handleLogin}>
        <Input label="Usuário" name="username" type="text" {...username} />
        <Input label="Senha" name="password" type="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className="perdeu" to="/login/lost">
        Perdeu a senha?
      </Link>
      <div className="cadastro">
        <h2 className="subtitle">Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <StyledLink to="/login/create">Cadastro</StyledLink>
      </div>
    </Section>
  );
};

export default LoginForm;
