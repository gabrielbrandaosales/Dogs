import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  .form {
    margin-bottom: 2rem;
  }
  .perdeu {
    display: inline-block;
    color: #666;
    padding: 0.5rem 0;
    line-height: 1;
  }

  .perdeu::after {
    content: '';
    height: 2px;
    width: 100%;
    background-color: currentColor;
    display: block;
  }

  .cadastro {
    margin-top: 4rem;
    p {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }

  .subtitle {
    font-family: var(--type-second);
    line-height: 1;
    font-size: 2rem;
  }

  .subtitle::after {
    content: '';
    display: block;
    background: #ddd;
    height: 0.5rem;
    width: 3rem;
    border-radius: 0.2rem;
  }
`;

//Isso aqui foi uma "gambiarra" porque eu não sei importar o css direto de um styled component
export const StyledLink = styled(Link)`
  font-size: 1rem;
  font-family: var(--type-first);
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  background: #fb1;
  color: #764701;
  min-width: 8rem;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: 0.1s;

  :hover,
  :focus {
    outline: none;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }

  :disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;
