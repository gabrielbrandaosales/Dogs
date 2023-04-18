import styled from 'styled-components';
import img from '../../../../Assets/visualizacao.svg';

export const Photo = styled.li`
  :nth-child(2) {
    grid-column: 2/4;
    grid-row: span 2;
  }

  @media (max-width: 40rem) {
    :nth-child(2) {
      grid-column: initial;
      grid-row: initial;
    }
  }

  display: grid;
  border-radius: 0.2rem;
  overflow: hidden;
  cursor: pointer;

  > div {
    grid-area: 1/1;
  }
  .visualizacao {
    background: rgba(0, 0, 0, 0.3);
    color: white;
    font-size: 1rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    grid-area: 1/1;
    display: none;
  }
  .visualizacao:before {
    width: 16px;
    height: 10px;
    content: '';
    display: inline-block;
    margin-right: 0.25rem;
    background: url(${img}) no-repeat;
  }
  :hover {
    .visualizacao {
      display: flex;
    }
  }
`;
