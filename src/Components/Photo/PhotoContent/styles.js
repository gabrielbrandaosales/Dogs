import styled from 'styled-components';
import img from '../../../Assets/visualizacao-black.svg';

export const Photo = styled.div`
  margin: auto;
  height: 36rem;
  border-radius: 0.2rem;
  background: white;
  display: grid;
  grid-template-columns: 36rem 20rem;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.8);
  animation: scaleUp 0.3s forwards;

  ${(props) =>
    props.single && {
      gridTemplateColumns: '1fr',
      height: 'auto',
    }}

  @keyframes scaleUp {
    to {
      opacity: initial;
      transform: initial;
    }
  }

  .details {
    padding: 2rem 2rem 0 2rem;
    ${(props) =>
      props.single && {
        padding: '1rem 0 0 0px',
      }}
  }

  .img {
    grid-row: 1/4;
    ${(props) =>
      props.single && {
        gridRow: '1',
        borderRadius: '.4rem',
        overflow: 'hidden',
      }}
  }

  .author {
    opacity: 0.5;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a:hover {
      text-decoration: underline;
    }
  }

  .visualizacao:before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 10px;
    margin-right: 0.5rem;
    background: url(${img}) no-repeat;
  }

  .attributes {
    display: flex;
    font-size: 1.25rem;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 2rem;
    li {
      margin-right: 2rem;
    }
    li:before {
      content: '';
      display: inline-block;
      height: 20px;
      margin-right: 0.5rem;
      position: relative;
      top: 3px;
      width: 2px;
      background: #333;
      margin-top: 5px;
    }
  }

  @media (max-width: 64rem) {
    height: auto;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);
    .img {
      grid-row: 1;
    }
  }
`;
