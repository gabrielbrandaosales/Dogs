import styled from 'styled-components';
import img from '../../Assets/login.jpg';

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  ::before {
    content: '';
    display: block;
    background: url(${img}) no-repeat center center;
    background-size: cover;
  }

  .forms {
    max-width: 30rem;
    padding: 1rem;
    margin-top: 20vh;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;

    ::before {
      display: none;
    }

    .forms {
      max-width: 100%;
    }
  }
`;
